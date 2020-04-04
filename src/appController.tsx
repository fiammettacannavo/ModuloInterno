// Libraries
import React, { PureComponent } from 'react';
import { AppView } from 'appView';
import { Predictor } from 'utils/dataTypes';
import { AppPluginMeta, PluginConfigPageProps } from '@grafana/data';

interface Props extends PluginConfigPageProps<AppPluginMeta> {}

export class AppController extends PureComponent<Props> {
  predictor?: Predictor;

  readFile = (target: HTMLInputElement) => {
    const reader = new FileReader();
    if (target.files == null) {
      throw new Error('File not selected');
    }
    reader.readAsText(target.files[0]);
    reader.onload = event => {
      const preString = event.target?.result?.toString();
      this.predictor = Predictor.fromJSON(preString);
    };
  };

  makeDashboard = () => {
    //TODO: spostare nel model (?)
    if (!this.predictor) {
      throw new Error('Predictor file not loaded');
    }
    let data = require('dashboards/prediction.json');
    data.panels[1].options.predictor = this.predictor;
    data = { dashboard: data, overwrite: true };
    console.log(data);

    $.ajax({
      url: '/api/dashboards/db',
      type: 'post',
      contentType: 'application/json',
      dataType: 'application/json',
      data: JSON.stringify(data),
      complete: res => {
        alert('Added dashboard: ' + data.dashboard.title + '\nStatus: ' + res.statusText);
      },
    });
  };

  render() {
    return <AppView onImport={this.readFile} makeDashboard={this.makeDashboard} />;
  }
}
