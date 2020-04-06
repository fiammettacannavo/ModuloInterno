import React, { PureComponent } from 'react';
import { PanelOptionsGrid } from '@grafana/ui';
import { Props } from './props';
import { PanelEditorProps } from '@grafana/data';
import './strategies/strategies';
import { configs } from './strategies/strategies';

export class EditorView extends PureComponent<PanelEditorProps<Props>> {
    render() {
        const Config = configs[this.props.options.predictor.algorithm];

        return (
            <div>
                <PanelOptionsGrid>
                    <Config data={this.props.data} options={this.props.options} />
                </PanelOptionsGrid>
            </div>
        );
    }
}
