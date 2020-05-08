import Strategy from '../../Strategy';
import regression from 'regression';
import Predictor from '../../../../common/Predictor';
import DataRegression from '../DataRegression';
import OptionRegression from 'common/OptionsRegression';

export default class StrategyRegExp implements Strategy {
    train(dataset: DataRegression, options: OptionRegression): Predictor<OptionRegression> {
        return new Predictor(
            'REXP',
            regression.exponential(dataset.getPoints(), {
                order: options.getOrder(),
                precision: options.getPrecision(),
            }).equation,
            regression.exponential(dataset.getPoints(), {
                order: options.getOrder(),
                precision: options.getPrecision(),
            }).string,
            options,
            regression.exponential(dataset.getPoints(), {
                order: options.getOrder(),
                precision: options.getPrecision(),
            }).r2
        );
    }
}
