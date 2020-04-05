import { Strategy } from '../strategy';
import { Data, Predictor } from 'utils/dataTypes';

export class StrategySVM implements Strategy {
    predict(data: Data, predictor: Predictor) {
        const coeff = predictor.coefficients;
        const f = (x1: number, x2: number) => {
            return x1 * coeff[0] + x2 * coeff[1] + coeff[2];
        }; //make function
        data.predicted = [];
        data.series.forEach(value => {
            const val = f(value[0], value[1]);
            let x = 0;
            if (val > 0) {
                x = 1;
            } else if (val < 0) {
                x = -1;
            }

            if (data && (value[0] || value[1])) {
                data.predicted?.push([value[2], x]);
            }
        });
        return data.predicted;
    }
}
