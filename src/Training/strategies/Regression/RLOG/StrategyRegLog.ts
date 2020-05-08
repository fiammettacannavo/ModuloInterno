import Strategy from '../../Strategy';
import regression from 'regression';
import Predictor from '../../../../common/Predictor';
import OptionRegression from '../../../../common/OptionsRegression';
import DataRegression from '../DataRegression';

export default class StrategyRegLog implements Strategy {
    train(dataset: DataRegression, options: OptionRegression): Predictor<OptionRegression> {
        return new Predictor(
            'RLOG',
            regression.logarithmic(dataset.getPoints(), {
                order: options.getOrder(),
                precision: options.getPrecision(),
            }).equation,
            regression.logarithmic(dataset.getPoints(), {
                order: options.getOrder(),
                precision: options.getPrecision(),
            }).string,
            options,
            regression.logarithmic(dataset.getPoints(), {
                order: options.getOrder(),
                precision: options.getPrecision(),
            }).r2
        );
    }
}
