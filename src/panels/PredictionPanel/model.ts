import { Data, Predictor } from 'utils/dataTypes';
import { strategies } from './strategies/strategies';
import { Strategy } from './strategies/interfaces/strategy';

export class Model {
    data?: Data;
    predictor?: Predictor;
    strategy?: Strategy;
    opt: any;

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

    setOpt(opt: any) {
        this.opt = opt;
    }

    predict() {
        if (!this.data || !this.predictor) {
            throw Error('Predictor not found');
        }
        this.data.predicted = this.strategy?.predict(this.data, this.predictor, this.opt);

        if (!this.data.predicted) {
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
        return;
    }
}
