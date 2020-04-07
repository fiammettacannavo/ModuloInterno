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

    private setOpt() {
        this.model.setOpt(this.props.options.predictor.opt);
    }

    private predict() {
        this.lastValue = this.model.predict();
    }

    private saveToInflux() {
        //TODO: controlli e eccezioni
        this.model.saveToInflux();
    }

    pause() {
        this.paused = true;
    }
    start() {
        this.paused = false;
    }

    updatePrediction() {
        if (!this.paused) {
            this.setData();
            this.setPredictor();
            this.setOpt();
            this.predict();
            this.saveToInflux();
        }
    }

    render() {
        this.updatePrediction();

        const { predictor } = this.props.options;
        console.log(this.props.options);

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
