// Libraries
import React, { PureComponent } from 'react';
import { Button } from '@grafana/ui';
import { AppPluginMeta, PluginConfigPageProps } from '@grafana/data';

export class AppView extends PureComponent<PluginConfigPageProps<AppPluginMeta>> {
    private async makeDashboard() {
        const data = {
            dashboard: require('dashboards/sample.json'),
            overwrite: true,
        };

        $.post({
            url: '/api/dashboards/db',
            contentType: 'application/json',
            dataType: 'application/json',
            data: JSON.stringify(data),
            complete: res => {
                alert('Dashboard: ' + data.dashboard.title + '\nStatus: ' + res.statusText);
                location.replace('/d/' + data.dashboard.uid);
            },
        });
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.makeDashboard()}>Sample Dashboard</Button>
            </div>
        );
    }
}
