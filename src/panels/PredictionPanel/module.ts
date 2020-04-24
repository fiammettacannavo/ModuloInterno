import { PanelPlugin } from '@grafana/data';
import { PanelController } from './panelController';
import { EditorView } from './editorView';
import { Predictor } from 'utils/Predictor';

export const plugin = new PanelPlugin(PanelController)
    .setDefaults({
        predictor: new Predictor('', []),
    })
    .setEditor(EditorView);
