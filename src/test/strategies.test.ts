import { strategies, configs } from '../panels/PredictionPanel/strategies/strategies';
import { StrategyRL } from 'panels/PredictionPanel/strategies/RL/strategyRL';
import { StrategySVM } from 'panels/PredictionPanel/strategies/SVM/strategySVM';
import { Strategy } from 'panels/PredictionPanel/strategies/interfaces/strategy';
import { Data, Predictor } from 'utils/dataTypes';

let rl: Strategy;
let svm: Strategy;

beforeAll(() => {
    rl = new StrategyRL();
    svm = new StrategySVM();
});

test('strategyRlEmptyData', () => {
    try {
        rl.predict(new Data(), new Predictor(), {});
    } catch (e) {
        expect(e).toEqual(Error('Data not found'));
    }
});

test('strategyRlEmptyOpts', () => {
    let data = new Data();
    data.series = [[1, 1, 1]];
    const res = rl.predict(data, { algorithm: 'RL', coefficients: [1, 1] }, {});
    expect(res).toEqual([[1, 2]]);
});

test('strategyRlNullOpts', () => {
    let data = new Data();
    data.series = [[1, 1, 1]];
    const res = rl.predict(data, { algorithm: 'RL', coefficients: [1, 1] }, null);
    expect(res).toEqual([[1, 2]]);
});

test('strategyRlRandomOpts', () => {
    let data = new Data();
    data.series = [[1, 1, 1]];
    const res = rl.predict(data, { algorithm: 'RL', coefficients: [1, 1] }, { ranomProp: 0 });
    expect(res).toEqual([[1, 2]]);
});
