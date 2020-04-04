import React, { PureComponent } from 'react';
import { Props } from '../../props';
import { PanelOptionsGroup } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';

export class ConfigSVM extends PureComponent<PanelEditorProps<Props>>{

    render() {
        return (
            <PanelOptionsGroup title="SVM">
                <p> There are no options </p>
            </PanelOptionsGroup>
        );
    }

}
