import React, { PureComponent } from 'react';
import { PanelOptionsGrid, PanelOptionsGroup } from '@grafana/ui';
import { Props } from './props';
import { PanelEditorProps } from '@grafana/data';
import './strategies/strategies';
import { configs } from './strategies/strategies';
import { Predictor } from 'utils/dataTypes';

export class EditorView extends PureComponent<PanelEditorProps<Props>> {

    importPredictor(target: HTMLInputElement) {
        const reader = new FileReader();
        if (target.files == null) {
            throw new Error('File not selected');
        }
        reader.readAsText(target.files[0]);
        reader.onload = event => {
            this.props.options.predictor = Predictor.fromJSON(
                event.target?.result?.toString()
            );
            this.render();
        };
    }

    render() {
        const Config = configs[this.props.options.predictor.algorithm];

        return (
            <div>
                <PanelOptionsGrid>
                    <PanelOptionsGroup title="Import predictor">
                        <input
                            className="input gf-input gf-file"
                            type="file"
                            name="Import"
                            id="import"
                            onChange={event => this.importPredictor(event.target)} />
                    </PanelOptionsGroup>
                    <Config data={this.props.data} options={this.props.options} />
                </PanelOptionsGrid>
            </div>
        );
    }
}
