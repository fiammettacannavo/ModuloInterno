import 'jest';
import { Model } from '../panels/PredictionPanel/model';
import { Data } from 'utils/Data';
import { Predictor } from 'utils/Predictor';

let model: Model;
let data: Data;

beforeEach(() => {
    model = new Model();
    data = new Data();
});

/* RL */
test('modelPredictionRlToBe0', () => {
    data.addValues({ a: 1, b: 1, time: 0 });
    model.setData(data);
    model.setPredictor(new Predictor('RL', [0, 0]));
    expect(model.predict()).toBe(0);
});

test('modelPredictionRlToBe1', () => {
    data.addValues({ a: 1, b: 1, time: 0 });
    model.setData(data);
    model.setPredictor(new Predictor('RL', [1, 0]));
    expect(model.predict()).toBe(1);
});

test('modelPredictionRlToBe2', () => {
    data.addValues({ a: 1, b: 1, time: 0 });
    model.setData(data);
    model.setPredictor(new Predictor('RL', [1, 1]));
    expect(model.predict()).toBe(2);
});

/* SVM */
test('modelPredictionSvmToBe0', () => {
    data.addValues({ a: 1, b: 1, time: 0 });
    model.setData(data);
    model.setPredictor(new Predictor('SVM', [0, 0, 0]));
    expect(model.predict()).toBe(0);
});

test('modelPredictionSvmToBe1', () => {
    data.addValues({ a: 1, b: 1, time: 0 });
    model.setData(data);
    model.setPredictor(new Predictor('SVM', [1, 1, 0]));
    expect(model.predict()).toBe(1);
});

test('modelPredictionSvmToBe-1', () => {
    data.addValues({ a: -1, b: -1, time: 0 });
    model.setData(data);
    model.setPredictor(new Predictor('SVM', [1, 1, 0]));
    expect(model.predict()).toBe(-1);
});

/* Empty Array */
test('modelPredictionRlWithEmptyArray', () => {
    model.setData(data);
    model.setPredictor(new Predictor('RL', [1, 1]));
    try {
        model.predict();
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

test('modelPredictionSvmWithEmptyArray', () => {
    model.setData(data);
    model.setPredictor(new Predictor('SVM', [1, 1, 0]));
    try {
        model.predict();
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
        expect(e).toEqual(Error('Data not predicted'));
    }
});

/* Exceptions */
test('modelPredictionWrongAlgorithm', () => {
    data.addValues({ a: 1, b: 2, time: 0 });
    model.setData(data);
    try {
        model.setPredictor(new Predictor('', [0, 0]));
        model.predict();
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
        expect(e).toEqual(Error('Wrong algorithm'));
    }
});

test('modelPredictionNoData', () => {
    try {
        model.setPredictor(new Predictor('RL', [0, 0]));
        model.predict();
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
        expect(e).toEqual(Error('Predictor not found'));
    }
});

test('modelPredictionNoData', () => {
    model.saveToInflux().catch(e => {
        expect(e).toBeInstanceOf(Error);
        expect(e).toEqual(Error('data.predicted not found'));
    });
});

test('predictorFromJSON', () => {
    let s = Predictor.fromJSON('{"algorithm": "RL", "coefficients": [1,1]}');
    expect(s).toStrictEqual({ algorithm: 'RL', coefficients: [1, 1] });
});
