import Strategy from './../Strategy';
import regression from 'regression';
import Predictor from '../../../common/Predictor';
import DataRL from './DataRL';
import OptionRL from '../../../common/OptionsRL';

export default class StrategyRL implements Strategy {
    train(dataset: DataRL, options: OptionRL): Predictor<OptionRL> {
        return new Predictor(
            'RL',
            regression.linear(dataset.getPoints(), {
                order: options.getOrder(),
                precision: options.getPrecision(),
            }).equation,
            regression.linear(dataset.getPoints(), {
                order: options.getOrder(),
                precision: options.getPrecision(),
            }).string,
            options,
            regression.linear(dataset.getPoints(), { order: options.getOrder(), precision: options.getPrecision() }).r2
        );
    }
}