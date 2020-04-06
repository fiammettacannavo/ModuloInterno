import { PanelPlugin } from '@grafana/data';
import { PanelController } from './panelController';
import { EditorView } from './editorView';

export const plugin = new PanelPlugin(PanelController)
    .setDefaults({
        predictor: {
            algorithm: '',
            coefficients: [],
        },
    })
    .setEditor(EditorView);
