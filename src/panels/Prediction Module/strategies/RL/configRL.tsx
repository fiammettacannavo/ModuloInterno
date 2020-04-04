import React, { PureComponent } from 'react';
import { Props } from '../../props';
import { PanelOptionsGroup } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';

export class ConfigRL extends PureComponent<PanelEditorProps<Props>>{

    getSeriesName() {
        return this.props.data.series.map(serie => {
            return serie.name || 'unknown';
        });
    }

    renderQueryOptions() {
        const seriesName = this.getSeriesName();
        const { opt } = this.props.options.predictor;
        if (opt.toPredict === null) {
            throw Error('Missing option');
        }

        const options: JSX.Element[] = [];
        for (const i of seriesName.keys()) {
            options.push(
                <option value={i} selected={opt.toPredict === i}>
                    {seriesName[i]}
                </option>
            );
        }
        return options;
    }

    render() {
        if (!this.props.options.predictor.opt)
            this.props.options.predictor.opt = { toPredict: 0 };
        console.log(this.props);
        return (<PanelOptionsGroup title="RL" >
            <p> Select value to predict: </p>
            <select
                onChange={event =>
                    this.props.options.predictor.opt = { toPredict: Number.parseInt(event.target.value, 10) }
                }>
                {this.renderQueryOptions()}
            </select>
        </PanelOptionsGroup>)
    };
}
