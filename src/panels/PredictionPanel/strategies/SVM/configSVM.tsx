import React, { PureComponent } from 'react';
import { Props } from '../../props';
import { PanelOptionsGroup } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';

export class ConfigSVM extends PureComponent<PanelEditorProps<Props>> {
    getSeriesNames() {
        return this.props.data.series.map(serie => {
            return serie.name || 'unknown';
        });
    }

    renderQueryOptions() {
        const seriesName = this.getSeriesNames();
        const { opt } = this.props.options.predictor;

        const options: JSX.Element[] = [];
        for (const i of seriesName.keys()) {
            options.push(
                <option value={i} selected={opt.firstQuery === i}>
                    {seriesName[i]}
                </option>
            );
        }
        return options;
    }

    render() {
        if (!this.props.options.predictor.opt) {
            this.props.options.predictor.opt = { firstQuery: 0 };
        }
        console.log(this.props);
        return (
            <PanelOptionsGroup title="SVM">
                <p> Select query to use as first paramether (the other one will be the second): </p>
                <select onChange={event => (this.props.options.predictor.opt = { firstQuery: Number.parseInt(event.target.value, 10) })}>
                    {this.renderQueryOptions()}
                </select>
            </PanelOptionsGroup>
        );
    }
}
