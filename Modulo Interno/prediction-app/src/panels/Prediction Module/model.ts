import { Data, Predictor } from 'utils/dataTypes';
import { Strategy } from './strategies/strategy';
import { StrategyRL } from './strategies/strategyRL';
import { StrategySVM } from './strategies/strategySVM';

export class Model {

    data?: Data;
    predictor?: Predictor;
    algorithm?: Strategy;
    static model: Model;

    static getInstance() {
        if (!Model.model)
            Model.model = new Model();
        return Model.model;
    }

    setData(data: Data) {
        this.data = data;
    }

    setPredictor(predictor: Predictor) {
        this.predictor = predictor;
        switch (predictor.algorithm) {
            case "RL":
                this.algorithm = new StrategyRL();
                break;
            case "SVM":
                this.algorithm = new StrategySVM();
                break;
        }
    }

    predict(toPredict: number) {
        if (!this.predictor || !this.data) throw new Error("predictor not found");
        this.data.predicted = this.algorithm?.predict(
            this.data,
            this.predictor,
            { toPredict: toPredict }
        );
    }

    async saveToInflux() {
        if (!this.data?.predicted) throw new Error("data.predicted not found");

        this.data.predicted.forEach((meas: number[]) => {
            $.post({
                url: 'http://localhost:8086/write?db=telegraf',
                data: "prediction value=" + meas[1] + " " + meas[0] + '000000',//this.props.timeRange.from.toISOString() + "'",
                success: () => {
                    //console.log("done");
                }
            });
        });
    }

}