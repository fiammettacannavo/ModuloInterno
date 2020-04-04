import React, { PureComponent } from 'react';
import {  PanelProps } from '@grafana/data';

import { Props } from "./props";
import { Data } from 'utils/dataTypes';
import { Model } from './model';
import { PanelView } from './panelView';

export class Controller extends PureComponent<PanelProps<Props>>{

    model: Model = Model.getInstance();

    constructor(props: PanelProps) {
        super(props);
    }

    updateData() {
        if (this.props.data.series.length > 0) {
            this.model.setPredictor(this.props.options.predictor);
            this.model.data = Data.fromSeries(this.props.data.series);
        }
    }

    setToPredict = (n: any) => {
        //controlli se 0|1
        this.props.options.predictor.opt.toPredict = n;
        console.log("to predict: " + this.props.options.predictor.opt.toPredict);
    }

    render() {

        //TODO: forse da mettere in un controller??
        this.model.setData(Data.fromSeries(this.props.data.series));
        this.model.setPredictor(this.props.options.predictor || 0);
        this.model.predict(this.props.options.predictor.opt?.toPredict || 0);
        this.model.saveToInflux();

        const { predictor } = this.props.options;

        return (
            <PanelView
                algorithm={predictor.algorithm}
                coefficients={predictor.coefficients}
                opt={predictor.opt}
                setToPreditct={this.setToPredict}
            />
        );
    }
}