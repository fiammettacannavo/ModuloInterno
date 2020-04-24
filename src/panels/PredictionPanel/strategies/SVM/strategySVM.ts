import { Strategy } from '../interfaces/strategy';
import { Data, DataIterator } from 'utils/Data';
import { Predicted } from 'utils/Predicted';
import { Predictor } from 'utils/Predictor';

export class StrategySVM implements Strategy {
    predict(data: Data, predictor: Predictor, options: { firstQuery: 0 | 1 }) {
        if (!options || !options.firstQuery) {
            options = { ...options, firstQuery: 0 };
        }

        const coeff = predictor.getCoefficients();
        const first = options.firstQuery;

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

            predicted.addValue(cls, val.time);
        }

        return predicted;
    }
}
