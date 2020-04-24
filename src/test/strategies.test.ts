import { StrategyRL } from 'panels/PredictionPanel/strategies/RL/strategyRL';
import { Strategy } from 'panels/PredictionPanel/strategies/interfaces/strategy';
import { Data } from 'utils/Data';
import { Predictor } from 'utils/Predictor';

let rl: Strategy;

beforeAll(() => {
    rl = new StrategyRL();
});

test('strategyRlEmptyData', () => {
    try {
        rl.predict(new Data(), new Predictor('', []), {});
    } catch (e) {
        expect(e).toEqual(Error('Data not found'));
    }
});

test('strategyRlEmptyOpts', () => {
    let data = new Data();
    data.addValues(1, 1, 1);
    const res = rl.predict(data, new Predictor('RL', [1, 1]), {});
    expect(res.getAt(0)).toEqual({ value: 2, time: 1 });
});

test('strategyRlNullOpts', () => {
    let data = new Data();
    data.addValues(1, 1, 1);
    const res = rl.predict(data, new Predictor('RL', [1, 1]), null);
    expect(res.getAt(0)).toEqual({ value: 2, time: 1 });
});

test('strategyRlRandomOpts', () => {
    let data = new Data();
    data.addValues(1, 1, 1);
    const res = rl.predict(data, new Predictor('RL', [1, 1]), { ranomProp: 0 });
    expect(res.getAt(0)).toEqual({ value: 2, time: 1 });
});
