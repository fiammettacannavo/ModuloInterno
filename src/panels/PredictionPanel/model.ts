import { Data, Predictor } from 'utils/dataTypes';
import { strategies } from './strategies/strategies';
import { Strategy } from './strategies/interfaces/strategy';

export class Model {
    private data?: Data;
    private predictor?: Predictor;
    private strategy?: Strategy;

    setData(data: Data) {
        this.data = data;
    }

    setPredictor(predictor: Predictor) {
        this.predictor = predictor;
        if (!strategies[predictor.algorithm]) {
            throw Error('Wrong algorithm');
        }
        this.strategy = strategies[predictor.algorithm];
    }

    predict() {
        if (!this.data || !this.predictor) {
            throw Error('Predictor not found');
        }
        console.log(this.data, this.predictor, this.predictor.opt);
        this.data.predicted = this.strategy?.predict(this.data, this.predictor, this.predictor.opt);

        if (!this.data.predicted || this.data.predicted.length < 1) {
            throw Error('Data not predicted');
        }
        return this.data.predicted[this.data.predicted.length - 1][1];
    }

    async saveToInflux() {
        if (!this.data?.predicted) {
            throw Error('data.predicted not found');
        }

        this.data.predicted.forEach((meas: number[]) => {
            $.post({
                url: 'http://localhost:8086/write?db=telegraf',
                data: 'prediction value=' + meas[1] + ' ' + meas[0] + '000000', // + zeros for wrong time format
            });
        });
    }
}
