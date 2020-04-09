import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';

import { Props } from './props';
import { Data } from 'utils/dataTypes';
import { Model } from './model';
import { PanelView } from './panelView';

export class PanelController extends PureComponent<PanelProps<Props>> {
    private model: Model;
    private paused = false;
    private lastValue?: number;

    constructor(props: PanelProps) {
        super(props);
        this.model = new Model();
    }

    private setData() {
        this.model.setData(Data.fromSeries(this.props.data.series));
    }

    private setPredictor() {
        this.model.setPredictor(this.props.options.predictor);
    }

    private predict() {
        this.lastValue = this.model.predict();
    }

    private saveToInflux() {
        this.model.saveToInflux();
    }

    private pause() {
        this.paused = true;
    }
    private start() {
        this.paused = false;
    }

    private updatePrediction() {
        if (!this.paused) {
            this.setData();
            this.setPredictor();
            this.predict();
            this.saveToInflux();
        }
    }

    render() {
        this.updatePrediction();

        const { predictor } = this.props.options;

        return (
            <div>
                <PanelView
                    algorithm={predictor.algorithm}
                    coefficients={predictor.coefficients}
                    opt={predictor.opt}
                    lastValue={this.lastValue}
                    pause={this.pause}
                    start={this.start}
                />
            </div>
        );
    }
}
