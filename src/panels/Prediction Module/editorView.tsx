import React, { PureComponent } from 'react';
import { PanelOptionsGroup, PanelOptionsGrid } from '@grafana/ui';
import { Props } from './props';
import { PanelEditorProps } from '@grafana/data';

export class EditorView extends PureComponent<PanelEditorProps<Props>> {
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
          {' '}
          {seriesName[i]}{' '}
        </option>
      );
    }
    return options;
  }

  setOpt(opt: any) {
    this.props.options.predictor.opt = opt;
  }

  renderAlgorithmOptions() {
    const { algorithm } = this.props.options.predictor;

    //TODO: move in strategy
    switch (algorithm) {
      case 'RL':
        this.props.options.predictor.opt = this.props.options.predictor.opt || { toPredict: 0 };
        return (
          <PanelOptionsGroup title="RL">
            <p> Select value to predict: </p>
            <select
              onChange={event =>
                this.setOpt({
                  toPredict: Number.parseInt(event.target.value, 10),
                })
              }
            >
              {this.renderQueryOptions()}
            </select>
          </PanelOptionsGroup>
        );
      case 'SVM':
        return (
          <PanelOptionsGroup title="SVM">
            <p> There are no options </p>
          </PanelOptionsGroup>
        );
      default:
        return <p>Wrong algoritm</p>;
    }
  }

  render() {
    return (
      <div>
        <PanelOptionsGrid>{this.renderAlgorithmOptions()}</PanelOptionsGrid>
      </div>
    );
  }
}
