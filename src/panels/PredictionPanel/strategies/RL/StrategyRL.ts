import { Strategy } from '../Strategy';
import { Data, DataIterator } from '../../utils/Data';
import { Predicted } from '../../utils/Predicted';
import { Predictor } from '../../utils/Predictor';
import OptionRL from '../../../../common/OptionsRL';

export class StrategyRL implements Strategy {
    predict(data: Data, predictor: Predictor<OptionRL>) {
        const base = 1 - (predictor.getOpt().getToPredict() || 0); //the other one
        const coeff = predictor.getCoefficients();

        const f = (x: number) => {
            return x ? x * coeff[0] + coeff[1] : 0;
        };

        let predicted = new Predicted();

        if (!data) {
            throw Error('Data not found');
        }

        let it = new DataIterator(data);
        let val;
        while ((val = it.next())) {
            predicted.addValues({ value: f(base === 0 ? val.a : val.b), time: val.time });
        }

        return predicted;
    }
}
