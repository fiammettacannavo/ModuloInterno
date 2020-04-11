import React from 'react';
import { PanelOptionsGroup } from '@grafana/ui';
import { Config } from '../interfaces/config';

export class ConfigSVM extends Config {
    private getSeriesNames() {
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

    setFirstQuery(value: string) {
        this.props.options.predictor.opt = {
            ...this.props.options.predictor.opt,
            firstQuery: Number.parseInt(value, 10),
        };
        this.render();
    }

    render() {
        let { predictor } = this.props.options;
        if (!predictor.opt) {
            predictor.opt = { ...predictor.opt, firstQuery: 0 };
        }
        return (
            <PanelOptionsGroup title="SVM">
                <p>{predictor.predFun ? 'Function: ' + predictor.predFun : ''}</p>
                <label className="gf-form-label width-10" style={{ display: 'inline-block' }}>
                    {' '}
                    x1 (first query){' '}
                </label>
                <div className="gf-form-select-wrapper width-10" style={{ display: 'inline-block' }}>
                    <select className="input-small gf-form-input" onChange={event => this.setFirstQuery(event.target.value)}>
                        {this.renderQueryOptions()}
                    </select>
                </div>
            </PanelOptionsGroup>
        );
    }
}
