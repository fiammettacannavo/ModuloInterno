import { Predictor } from 'panels/PredictionPanel/utils/Predictor';
import { Data } from 'panels/PredictionPanel/utils/Data';
import { Predicted, PredIterator } from 'panels/PredictionPanel/utils/Predicted';
import { strategies } from './strategies/strategies';
import { Strategy } from './strategies/Strategy';

export class Model {
    private data?: Data;
    private predicted?: Predicted;
    private predictor?: Predictor<any>;
    private strategy?: Strategy;

    setData(data: Data) {
        this.data = data;
    }

    setPredictor(predictor: Predictor<any>) {
        this.predictor = predictor;
        if (!strategies[predictor.getAlgorithm()]) {
            throw Error('Wrong algorithm');
        }
        this.strategy = strategies[predictor.getAlgorithm()];
    }

    predict() {
        if (!this.data || !this.predictor) {
            throw Error('Predictor not found');
        }
        this.predicted = this.strategy?.predict(this.data, this.predictor);

        if (!this.predicted || this.predicted.size() < 1) {
            throw Error('Data not predicted');
        }
        return this.predicted.getAt(this.predicted.size() - 1).value;
    }

    async saveToInflux() {
        if (!this.predicted) {
            throw Error('data.predicted not found');
        }

        let it = new PredIterator(this.predicted);
        let meas;
        while ((meas = it.next())) {
            $.post({
                url: 'http://localhost:8086/write?db=telegraf',
                data: 'prediction value=' + meas.value + ' ' + meas.time + '000000', // + zeros for wrong time format
            });
        }
    }
}
