import { Strategy } from '../interfaces/strategy';
import { Data, DataIterator } from 'utils/Data';
import { Predicted } from 'utils/Predicted';
import { Predictor } from 'utils/Predictor';

export class StrategyRL implements Strategy {
    predict(data: Data, predictor: Predictor, options: { toPredict: number }) {
        if (!options || !options.toPredict) {
            options = { ...options, toPredict: 0 };
        }

        const base = 1 - options.toPredict; //the other one
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
            predicted.addValue(f(base === 0 ? val.a : val.b), val.time);
        }

        return predicted;
    }
}
