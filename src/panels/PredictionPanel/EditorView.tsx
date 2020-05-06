import React, { PureComponent } from 'react';
import { PanelOptionsGrid, PanelOptionsGroup } from '@grafana/ui';
import { Props } from './Props';
import { PanelEditorProps } from '@grafana/data';
import { configs } from './strategies/strategies';
import { Predictor } from 'panels/PredictionPanel/utils/Predictor';

export class EditorView extends PureComponent<PanelEditorProps<Props>> {
    private importPredictor(target: HTMLInputElement) {
        const reader = new FileReader();
        if (target.files == null) {
            throw new Error('File not selected');
        }
        reader.readAsText(target.files[0]);
        reader.onload = event => {
            try {
                this.props.options.predictor = Predictor.fromJSON(event.target?.result?.toString());
            } catch (e) {
                alert(e);
            }
            this.render();
        };
    }

    private parsePredictor() {
        try {
            this.props.options.predictor?.getAlgorithm();
        } catch (e) {
            const json = this.props.options.predictor;
            this.props.options.predictor = Predictor.fromJSON(JSON.stringify(json));
        }
    }

    render() {
        this.parsePredictor();
        const predictor = this.props.options.predictor;

        const algorithm = predictor?.getAlgorithm();
        let Config;
        if (algorithm && configs[algorithm]) {
            Config = configs[algorithm];
        } else {
            Config = typeof React.PureComponent;
        }

        return (
            <div>
                <PanelOptionsGrid>
                    <PanelOptionsGroup title="Import predictor">
                        <input
                            className="input gf-input gf-file"
                            type="file"
                            name="Import"
                            id="import"
                            onChange={event => this.importPredictor(event.target)}
                        />
                    </PanelOptionsGroup>
                    <Config data={this.props.data} options={this.props.options} />
                </PanelOptionsGrid>
            </div>
        );
    }
}
