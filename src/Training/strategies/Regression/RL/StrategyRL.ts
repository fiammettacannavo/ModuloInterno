import Strategy from '../../Strategy';
import regression from 'regression';
import Predictor from '../../../../common/Predictor';
import DataRegression from '../DataRegression';
import OptionRegression from 'common/OptionsRegression';

export default class StrategyRL implements Strategy {
    train(dataset: DataRegression, options: OptionRegression): Predictor<OptionRegression> {
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
