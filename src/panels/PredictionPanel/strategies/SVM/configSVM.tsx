import React, { PureComponent, ChangeEvent } from 'react';
import { Props } from '../../props';
import { PanelOptionsGroup } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';

export class ConfigSVM extends PureComponent<PanelEditorProps<Props>> {
    private getSeriesNames() {
        return this.props.data.series.map(serie => {
            return serie.name || 'unknown';
        });
    }

    private renderQueryOptions() {
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

    private setFirstQuery(event: ChangeEvent<HTMLSelectElement>) {
        this.props.options.predictor.opt = {
            ...this.props.options.predictor.opt,
            firstQuery: Number.parseInt(event.target.value, 10),
        };
        this.render();
    }

    render() {
        let { predictor } = this.props.options;
        if (!predictor.opt) {
            predictor.opt = { ...predictor.opt, firstQuery: 0 };
        }
        console.log(this.props);
        return (
            <PanelOptionsGroup title="SVM">
                <p>{predictor.predFun ? 'Function: ' + predictor.predFun : ''}</p>
                <label className="gf-form-label width-10" style={{ display: 'inline-block' }}>
                    {' '}
                    x1 (first query){' '}
                </label>
                <div className="gf-form-select-wrapper width-10" style={{ display: 'inline-block' }}>
                    <select className="input-small gf-form-input" onChange={event => this.setFirstQuery(event)}>
                        {this.renderQueryOptions()}
                    </select>
                </div>
            </PanelOptionsGroup>
        );
    }
}
