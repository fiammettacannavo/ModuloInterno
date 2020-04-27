import { Data } from 'utils/Data';
import { Predicted } from 'utils/Predicted';
import { Predictor } from 'utils/Predictor';

export interface Strategy {
    predict: (data: Data, predictor: Predictor) => Predicted;
}
