import { Option } from '../Options';

export class OptionRL implements Option {
    private order?: number;
    private precision?: number;
    private toPredict?: number;

    fromJSON(json: { order?: number; precision?: number; toPredict?: number }) {
        this.order = json.order;
        this.precision = json.precision;
        this.toPredict = json.toPredict || 0;
        return this;
    }

    getOrder() {
        return this.order;
    }

    getPrecision() {
        return this.precision;
    }

    getToPredict() {
        return this.toPredict;
    }

    setToPredict(toPredict: number) {
        this.toPredict = toPredict;
    }
}
