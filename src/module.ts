import { AppPlugin } from '@grafana/data';
import { AppView } from 'AppView';

export class ConfigCtrl {} // Placeholer class just for enable app.. waiting for grafana updates

export const plugin = new AppPlugin().addConfigPage({
    title: 'Wizard',
    icon: 'fa fa-magic',
    body: AppView,
    id: 'import',
});
