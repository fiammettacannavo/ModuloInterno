// Libraries
import React, { PureComponent } from 'react';
import { Button } from '@grafana/ui';

interface Actions {
    onImport: (event: HTMLInputElement) => void;
    makeDashboard: () => void;
}

export class AppView extends PureComponent<Actions> {
    render() {
        const { onImport, makeDashboard } = this.props;

        return (
            <div>
                <h1>Import Prediction file</h1>
                <input className="input gf-input gf-file" type="file" name="Import" id="import" onChange={event => onImport(event.target)} />
                <br />
                <Button onClick={() => makeDashboard()}>Make Dashboard</Button>
            </div>
        );
    }
}
