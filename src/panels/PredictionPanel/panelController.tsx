import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';

import { Props } from './props';
import { Data } from 'utils/dataTypes';
import { Model } from './model';
import { PanelView } from './panelView';

export class PanelController extends PureComponent<PanelProps<Props>> {
    private model: Model;

    constructor(props: PanelProps) {
        super(props);
        this.model = new Model();
    }

    private setData() {
        //TODO: controlli e eccezioni
        this.model.setData(Data.fromSeries(this.props.data.series));
    }

    private setPredictor() {
        //TODO: controlli e eccezioni
        this.model.setPredictor(this.props.options.predictor || 0);
    }

    private setOpt() {
        //TODO: controlli e eccezioni
        this.model.setOpt(this.props.options.predictor.opt);
    }

    private predict() {
        //TODO: controlli e eccezioni
        this.model.predict();
    }

    private saveToInflux() {
        //TODO: controlli e eccezioni
        this.model.saveToInflux();
    }

    render() {
        this.setData();
        this.setPredictor();
        this.setOpt();
        this.predict();
        this.saveToInflux();

        const { predictor } = this.props.options;

        return <PanelView algorithm={predictor.algorithm} coefficients={predictor.coefficients} opt={predictor.opt} />;
    }
}
