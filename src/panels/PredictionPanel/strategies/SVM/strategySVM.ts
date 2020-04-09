import { Strategy } from '../interfaces/strategy';
import { Data, Predictor } from 'utils/dataTypes';

export class StrategySVM implements Strategy {
    predict(data: Data, predictor: Predictor, options: { firstQuery: 0 | 1 }) {
        if (!options || !options.firstQuery) {
            options = { ...options, firstQuery: 0 };
        }

        const coeff = predictor.coefficients;
        const x1 = options.firstQuery;
        const x2 = 1 - options.firstQuery;

        const f = (x1: number, x2: number) => {
            return x1 * coeff[0] + x2 * coeff[1] + coeff[2];
        };
        data.predicted = [];

        data.series.forEach(value => {
            const val = f(value[x1], value[x2]);
            let cls = 0; //classification
            if (val > 0) {
                cls = 1;
            } else if (val < 0) {
                cls = -1;
            }

            if (data && (value[0] || value[1])) {
                data.predicted?.push([value[2], cls]);
            }
        });

        return data.predicted;
    }
}
