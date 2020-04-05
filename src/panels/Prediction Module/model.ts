import { Data, Predictor } from 'utils/dataTypes';
import { strategies } from './strategies/strategies';
import { Strategy } from './strategies/strategy';

export class Model {
    data?: Data;
    predictor?: Predictor;
    algorithm?: Strategy;
    static model: Model;

    static getInstance() {
        if (!Model.model) {
            Model.model = new Model();
        }
        return Model.model;
    }

    setData(data: Data) {
        this.data = data;
    }

    setPredictor(predictor: Predictor) {
        this.predictor = predictor;
        try {
            this.algorithm = strategies[predictor.algorithm];
            console.log(this.algorithm);
        } catch (e) {
            throw new Error('Wrong algorithm');
        }
    }

    predict(toPredict: number) {
        if (!this.predictor || !this.data) {
            throw new Error('predictor not found');
        }
        this.data.predicted = this.algorithm?.predict(this.data, this.predictor, { toPredict: toPredict });
    }

    async saveToInflux() {
        if (!this.data?.predicted) {
            throw new Error('data.predicted not found');
        }

        this.data.predicted.forEach((meas: number[]) => {
            $.post({
                url: 'http://localhost:8086/write?db=telegraf',
                data: 'prediction value=' + meas[1] + ' ' + meas[0] + '000000', //this.props.timeRange.from.toISOString() + "'",
                success: () => {
                    //console.log("done");
                },
            });
        });
    }
}
