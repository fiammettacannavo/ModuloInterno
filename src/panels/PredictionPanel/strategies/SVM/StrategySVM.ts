import { Strategy } from '../Strategy';
import { Data, DataIterator } from '../../utils/Data';
import { Predicted } from '../../utils/Predicted';
import { OptionSVM } from './OptionsSVM';
import { Predictor } from '../../utils/Predictor';

export class StrategySVM implements Strategy {
    predict(data: Data, predictor: Predictor<OptionSVM>) {
        // predict(data: Data, predictor: Predictor) {
        const first = predictor.getOpt().getFirstQuery() || 0;
        const coeff = predictor.getCoefficients();

        const f = (x1: number, x2: number) => {
            return x1 * coeff[0] + x2 * coeff[1] + coeff[2];
        };

        let predicted = new Predicted();

        if (!data) {
            throw Error('Data not found');
        }

        let it = new DataIterator(data);
        let val;
        while ((val = it.next())) {
            const v = first === 0 ? f(val.a, val.b) : f(val.b, val.a);
            let cls = v === 0 ? 0 : v > 0 ? 1 : -1; //classification 1 / -1

            predicted.addValues({ value: cls, time: val.time });
        }

        return predicted;
    }
}
