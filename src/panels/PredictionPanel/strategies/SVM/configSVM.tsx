import React from 'react';
import { PanelOptionsGroup } from '@grafana/ui';
import { Config } from '../interfaces/config';
import { OptionsSVM } from 'utils/Options';

export class ConfigSVM extends Config {
    private getSeriesNames() {
        return this.props.data.series.map(serie => {
            return serie.name || 'unknown';
        });
    }

    renderQueryOptions() {
        const seriesName = this.getSeriesNames();
        const opt: OptionsSVM = this.props.options.predictor.getOpt();

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
        this.props.options.predictor.setOpt({
            firstQuery: Number.parseInt(value, 10),
        });
        this.render();
    }

    render() {
        let { predictor } = this.props.options;
        if (!predictor.getOpt()) {
            predictor.setOpt({ firstQuery: 0 });
        }
        return (
            <PanelOptionsGroup title="SVM">
                <p>{predictor.getPredFun() ? 'Function: ' + predictor.getPredFun() : ''}</p>
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
