import { AppPlugin } from '@grafana/data';
import { AppController } from 'appController';

export class ConfigCtrl { } // Placeholer class just for enable app.. waiting for grafana updates

export const plugin = new AppPlugin()
    .addConfigPage({
        title: 'Import',
        icon: 'fa fa-arrow-down',
        body: AppController,
        id: 'import',
    });
