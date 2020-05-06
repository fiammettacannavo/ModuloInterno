import Option from './Options';

export default class OptionSVM implements Option {
    private C: number = 1;
    private maxiter: number = 10000;
    private numpass: number = 10;
    private firstQuery: number = 0;

    public fromJSON(json: { C: number; maxiter: number; numpass: number; firstQuery: number }) {
        this.C = json.C;
        this.maxiter = json.maxiter;
        this.numpass = json.numpass;
        this.firstQuery = json.firstQuery || 0;
        return this;
    }

    public setValueFile(config: string): void {
        try {
            let predictor = JSON.parse(config);
            this.C = predictor.opt.C;
            this.maxiter = predictor.opt.maxiter;
            this.numpass = predictor.opt.numpass;
        } catch (e){
            throw new Error('Predictor bad formatted');
        }
    }

    public getC(): number {
        return this.C;
    }

    public getMaxIter(): number {
        return this.maxiter;
    }

    public getNumPass(): number {
        return this.numpass;
    }

    public getFirstQuery(): number {
        return this.firstQuery;
    }

    public setC(c: number): void {
        this.C = c;
    }

    public setMaxIter(m: number): void {
        this.maxiter = m;
    }

    public setNumPass(n: number): void {
        this.numpass = n;
    }

    public setFirstQuery(firstQuery: number): void {
        this.firstQuery = firstQuery;
    }
}
