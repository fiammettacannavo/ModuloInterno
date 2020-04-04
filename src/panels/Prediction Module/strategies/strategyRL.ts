import { Strategy } from './strategy';
import { Data, Predictor } from 'utils/dataTypes';

export class StrategyRL implements Strategy {
  predict(data: Data, predictor: Predictor, options: { toPredict: number }) {
    const base = 1 - options.toPredict; //the other one
    const coeff = predictor.coefficients;
    const f = (x: number) => {
      return x ? x * coeff[0] + coeff[1] : 0;
    }; //make function
    data.predicted = [];
    data.series.forEach(value => {
      if (data && value[base]) {
        data.predicted?.push([value[2], f(value[base])]);
      }
    });
    return data.predicted;
  }
}
