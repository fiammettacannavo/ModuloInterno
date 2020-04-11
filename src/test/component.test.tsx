import 'react';
import { ConfigRL } from "panels/PredictionPanel/strategies/RL/configRL";
import { LoadingState, dateTime, DefaultTimeZone, FieldType, ArrayVector } from '@grafana/data';

import { ConfigSVM } from 'panels/PredictionPanel/strategies/SVM/configSVM';
import { Predictor } from 'utils/dataTypes';
import { PanelController } from 'panels/PredictionPanel/panelController';

let data = {
    series: [{
        name: '',
        fields: [{
            name: '',
            type: FieldType.number,
            config: {},
            values: new ArrayVector([[1, 2]])
        },
        {
            name: '',
            type: FieldType.number,
            config: {},
            values: new ArrayVector([[1, 2]])
        }],
        length: 0
    },
    {
        name: '',
        fields: [{
            name: '',
            type: FieldType.number,
            config: {},
            values: new ArrayVector([[1, 2]])
        },
        {
            name: '',
            type: FieldType.number,
            config: {},
            values: new ArrayVector([[1, 2]])
        }],
        length: 0
    }],
    state: LoadingState.Done,
    timeRange: {
        from: dateTime(),
        raw: {
            from: dateTime(),
            to: dateTime(),
        },
        to: dateTime()
    }
}
let options: { predictor: Predictor } = {
    predictor: {
        algorithm: 'RL',
        coefficients: [1, 1],
    }
}

let controllerMock = new PanelController({
    id: 0,
    data: data,
    timeRange: data.timeRange,
    timeZone: DefaultTimeZone,
    options: options,
    onOptionsChange: () => { },
    transparent: false,
    height: 0,
    width: 0,
    renderCounter: 0,
    replaceVariables: () => '',
    onChangeTimeRange: () => { }
});


test('renderOptionsRL', () => {
    let configRL = new ConfigRL({
        data: data,
        options: options,
        onOptionsChange: () => { }
    });
    configRL.render();
    configRL.renderQueryOptions();
    configRL.setToPredict("0");
});

test('renderOptionsSVM', () => {
    let configSVM = new ConfigSVM({
        data: data,
        options: options,
        onOptionsChange: () => { }
    });
    configSVM.render();
    configSVM.renderQueryOptions();
    configSVM.setFirstQuery("0");
});

test('renderOptionsSVMWithoutOpt', () => {
    options.predictor.opt = null;
    let configSVM = new ConfigSVM({
        data: data,
        options: options,
        onOptionsChange: () => { }
    });
    configSVM.render();
    configSVM.renderQueryOptions();
    configSVM.setFirstQuery("0");
});

test('conrtollerRender', () => {
    controllerMock.render();
});