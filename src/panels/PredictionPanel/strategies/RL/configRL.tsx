import React from 'react';
import { PanelOptionsGroup } from '@grafana/ui';
import { Config } from '../interfaces/config';

export class ConfigRL extends Config {
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
                <option value={i} selected={opt.toPredict === i}>
                    {seriesName[i]}
                </option>
            );
        }
        return options;
    }

    setToPredict(value: string) {
        this.props.options.predictor.opt = {
            ...this.props.options.predictor.opt,
            toPredict: Number.parseInt(value, 10),
        };
        this.render();
    }

    render() {
        let { predictor } = this.props.options;
        if (!this.props.options.predictor.opt) {
            this.props.options.predictor.opt = { ...predictor.opt, toPredict: 0 };
        }
        return (
            <PanelOptionsGroup title="RL">
                <p>{predictor.predFun ? 'Function: ' + predictor.predFun : ''}</p>
                <label className="gf-form-label width-10" style={{ display: 'inline-block' }}>
                    {' '}
                    y (value to predict){' '}
                </label>
                <div className="gf-form-select-wrapper width-10" style={{ display: 'inline-block' }}>
                    <select className="input-small gf-form-input" onChange={event => this.setToPredict(event.target.value)}>
                        {this.renderQueryOptions()}
                    </select>
                </div>
            </PanelOptionsGroup>
        );
    }
}
