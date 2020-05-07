import Predictor from '../../common/Predictor';
import Data from './Data';
import Option from '../../common/Options';

export default interface Strategy {
    train(dataset: Data, options: Option): Predictor<Option>;
}
