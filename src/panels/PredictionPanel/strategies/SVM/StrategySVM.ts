import { Strategy } from '../Strategy';
import { Data, DataIterator } from '../../utils/Data';
import { Predicted } from '../../utils/Predicted';
import OptionSVM from '../../../../common/OptionsSVM';
import Predictor from '../../../../common/Predictor';

export class StrategySVM implements Strategy {
    predicted: Predicted = new Predicted();

    predict(data: Data, predictor: Predictor<OptionSVM>) {
        this.predicted.clear();

        const first = predictor.getOpt().getFirstQuery() || 0;
        const coeff = predictor.getCoefficients();

        const f = (x1: number, x2: number) => {
            return x1 * coeff[0] + x2 * coeff[1] + coeff[2];
        };

        if (!data) {
            throw Error('Data not found');
        }

        let it = new DataIterator(data);
        let val;
        while ((val = it.next())) {
            if (val.a || val.b) {
                const v = first === 0 ? f(val.a, val.b) : f(val.b, val.a);
                let cls = v === 0 ? 0 : v > 0 ? 1 : -1; //classification 1 / -1

                this.predicted.addValues({ value: cls, time: val.time });
            }
        }

        return this.predicted;
    }

    saveToInflux() {
        const meas = this.predicted.getAt(this.predicted.size() - 1);
        $.post({
            url: 'http://localhost:8086/write?db=telegraf',
            data: 'predictionSVM value=' + meas.value + ' ' + meas.time + '000000', // + zeros for wrong time format
        });
    }
}
