import { Data } from 'panels/PredictionPanel/utils/Data';
import { Predicted } from 'panels/PredictionPanel/utils/Predicted';
import Option from '../../../common/Options';
import Predictor from 'common/Predictor';

export interface Strategy {
    predict(data: Data, predictor: Predictor<Option>): Predicted;
    saveToInflux(): void;
}
