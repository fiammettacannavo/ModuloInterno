import 'jest';
import { Model } from '../panels/PredictionPanel/model';
import { Data } from 'utils/dataTypes';

test('nome_test', () => {
    let model = new Model();
    const data = new Data();
    data.series = [
        [0, 0],
        [1, 1],
    ];
    model.setData(data);
    model.setPredictor({ algorithm: 'RL', coefficients: [0, 0] });
    expect(model.predict()).toBe(0);
});
