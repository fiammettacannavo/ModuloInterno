import Option from './Options';

export default class OptionRL implements Option {
    private order: number = 2;
    private precision: number = 2;
    private toPredict: number = 0;

    public fromJSON(json: { order: number; precision: number; toPredict: number }) {
        this.order = json.order;
        this.precision = json.precision;
        this.toPredict = json.toPredict || 0;
        return this;
    }

    public setValueFile(config: string): void {
        try {
            let predictor = JSON.parse(config);
            this.order = predictor.opt.order;
            this.precision = predictor.opt.precision;
        } catch (e){
            throw new Error('Predictor bad formatted');
        }
    }

    public getOrder() {
        return this.order;
    }

    public getPrecision() {
        return this.precision;
    }

    public getToPredict() {
        return this.toPredict;
    }

    public setPrecision(p: number): void {
        this.precision = p;
    }

    public setToPredict(toPredict: number): void {
        this.toPredict = toPredict;
    }
}
