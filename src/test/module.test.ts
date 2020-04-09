import 'jest';
import { Model } from '../panels/PredictionPanel/model';
import { Data } from 'utils/dataTypes';

let model: Model;
let data: Data;

beforeEach(() => {
    model = new Model();
    data = new Data();
});

/* RL */
test('modelPredictionRlToBe0', () => {
    data.series = [[1, 1]];
    model.setData(data);
    model.setPredictor({ algorithm: 'RL', coefficients: [0, 0] });
    expect(model.predict()).toBe(0);
});

test('modelPredictionRlToBe1', () => {
    data.series = [[1, 1]];
    model.setData(data);
    model.setPredictor({ algorithm: 'RL', coefficients: [1, 0] });
    expect(model.predict()).toBe(1);
});

test('modelPredictionRlToBe2', () => {
    data.series = [[1, 1]];
    model.setData(data);
    model.setPredictor({ algorithm: 'RL', coefficients: [1, 1] });
    expect(model.predict()).toBe(2);
});

/* SVM */
test('modelPredictionSvmToBe0', () => {
    data.series = [[1, 1]];
    model.setData(data);
    model.setPredictor({ algorithm: 'SVM', coefficients: [0, 0, 0] });
    expect(model.predict()).toBe(0);
});

test('modelPredictionSvmToBe1', () => {
    data.series = [[1, 1]];
    model.setData(data);
    model.setPredictor({ algorithm: 'SVM', coefficients: [1, 1, 0] });
    expect(model.predict()).toBe(1);
});

test('modelPredictionSvmToBe-1', () => {
    data.series = [[-1, -1]];
    model.setData(data);
    model.setPredictor({ algorithm: 'SVM', coefficients: [1, 1, 0] });
    expect(model.predict()).toBe(-1);
});

/* Empty Array */
test('modelPredictionRlWithEmptyArray', () => {
    data.series = [];
    model.setData(data);
    model.setPredictor({ algorithm: 'RL', coefficients: [1, 1] });
    try {
        model.predict();
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});

test('modelPredictionSvmWithEmptyArray', () => {
    data.series = [];
    model.setData(data);
    model.setPredictor({ algorithm: 'SVM', coefficients: [1, 1, 0] });
    try {
        model.predict();
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
        expect(e).toEqual(Error('Data not predicted'));
    }
});

/* Exceptions */
test('modelPredictionWrongAlgorithm', () => {
    data.series = [[1, 2]];
    model.setData(data);
    try {
        model.setPredictor({ algorithm: '', coefficients: [0, 0] });
        model.predict();
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
        expect(e).toEqual(Error('Wrong algorithm'));
    }
});

test('modelPredictionNoData', () => {
    try {
        model.setPredictor({ algorithm: 'RL', coefficients: [0, 0] });
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
