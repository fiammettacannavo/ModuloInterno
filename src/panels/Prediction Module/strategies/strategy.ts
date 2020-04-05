import { Data, Predictor } from 'utils/dataTypes';

export interface Strategy {
    predict: (data: Data, predictor: Predictor, options: any) => number[][];
}
