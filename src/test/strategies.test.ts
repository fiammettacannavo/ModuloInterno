import { StrategyRL } from 'panels/PredictionPanel/strategies/RL/StrategyRL';
import { Strategy } from 'panels/PredictionPanel/strategies/Strategy';
import { Data } from 'panels/PredictionPanel/utils/Data';
import { Predictor } from 'panels/PredictionPanel/utils/Predictor';
import { OptionRL } from 'panels/PredictionPanel/strategies/RL/OptionsRL';

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
    const res = rl.predict(data, new Predictor('RL', [1, 1], '', new OptionRL().fromJSON({ precision: 23 })));
    expect(res.getAt(0)).toEqual({ value: 2, time: 1 });
});
