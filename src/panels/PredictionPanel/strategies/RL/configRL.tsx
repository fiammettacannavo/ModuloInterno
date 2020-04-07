import React, { PureComponent, ChangeEvent } from 'react';
import { Props } from '../../props';
import { PanelOptionsGroup } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';

export class ConfigRL extends PureComponent<PanelEditorProps<Props>> {
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
                <option value={i} selected={opt.toPredict === i}>
                    {seriesName[i]}
                </option>
            );
        }
        return options;
    }

    setToPredict(event: ChangeEvent<HTMLSelectElement>) {
        this.props.options.predictor.opt = {
            toPredict: Number.parseInt(event.target.value, 10),
        };
        this.render();
    }

    render() {
        if (!this.props.options.predictor.opt) {
            this.props.options.predictor.opt = { toPredict: 0 };
        }
        console.log(this.props);
        let { predictor } = this.props.options;
        return (
            <PanelOptionsGroup title="RL">
                <p>{predictor._function ? 'Function: ' + predictor._function : ''}</p>
                <label className="gf-form-label width-10" style={{ display: 'inline-block' }}>
                    {' '}
                    y (value to predict){' '}
                </label>
                <div className="gf-form-select-wrapper width-10" style={{ display: 'inline-block' }}>
                    <select className="input-small gf-form-input" onChange={event => this.setToPredict(event)}>
                        {this.renderQueryOptions()}
                    </select>
                </div>
            </PanelOptionsGroup>
        );
    }
}
