import { Option } from '../Options';

export class OptionSVM implements Option {
    private C?: number;
    private maxiter?: number;
    private numpass?: number;
    private firstQuery?: number;

    fromJSON(json: { C?: number; maxiter?: number; numpass?: number; firstQuery?: number }) {
        this.C = json.C;
        this.maxiter = json.maxiter;
        this.numpass = json.numpass;
        this.firstQuery = json.firstQuery || 0;
        return this;
    }

    getC() {
        return this.C;
    }

    getMaxIter() {
        return this.maxiter;
    }

    getNumPass() {
        return this.numpass;
    }

    getFirstQuery() {
        return this.firstQuery;
    }

    setFirstQuery(firstQuery: number) {
        this.firstQuery = firstQuery;
    }
}
