import { PanelPlugin } from '@grafana/data';
import { Controller } from './controller';
import { EditorView } from './editorView';

export const plugin = new PanelPlugin(Controller)
    .setDefaults({
        predictor: {
            algorithm: '',
            coefficients: [],
        },
    })
    .setEditor(EditorView);
