import { StrategyRL } from 'panels/PredictionPanel/strategies/RL/StrategyRL';
import { Strategy } from 'panels/PredictionPanel/strategies/Strategy';
import { Data } from 'panels/PredictionPanel/utils/Data';
import Predictor from 'common/Predictor';
import OptionRL from 'common/OptionsRegression';

let rl: Strategy;

beforeAll(() => {
    rl = new StrategyRL();
});

test('strategyRlEmptyData', () => {
    try {
        rl.predict(new Data(), new Predictor('', [], '', new OptionRL()));
    } catch (e) {
        expect(e).toEqual(Error('Data not found'));
    }
});

test('strategyRlEmptyOpts', () => {
    let data = new Data();
    data.addValues({ a: 1, b: 1, time: 1 });
    const res = rl.predict(data, new Predictor('RL', [1, 1], '', new OptionRL()));
    expect(res.getAt(0)).toEqual({ value: 2, time: 1 });
});

test('strategyRlNullOpts', () => {
    let data = new Data();
    data.addValues({ a: 1, b: 1, time: 1 });
    const res = rl.predict(data, new Predictor('RL', [1, 1], '', new OptionRL()));
    expect(res.getAt(0)).toEqual({ value: 2, time: 1 });
});

test('strategyRlRandomOpts', () => {
    let data = new Data();
    data.addValues({ a: 1, b: 1, time: 1 });
    const res = rl.predict(
        data,
        new Predictor('RL', [1, 1], '', new OptionRL().fromJSON({ order: 1, precision: 23, toPredict: 0 }))
    );
    expect(res.getAt(0)).toEqual({ value: 2, time: 1 });
});
