import { Data } from 'panels/PredictionPanel/utils/Data';
import { Predicted } from 'panels/PredictionPanel/utils/Predicted';
import { Option } from './Options';
import { Predictor } from 'panels/PredictionPanel/utils/Predictor';

export interface Strategy {
    /* predict: (data: Data, predictor: Predictor) => Predicted; */
    predict(data: Data, predictor: Predictor<Option>): Predicted;
}
