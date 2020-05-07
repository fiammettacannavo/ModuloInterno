import Options from '../common/Options';
import { opt } from './strategies/Strategies';

export default class Predictor {
    private algorithm: string;
    private coefficients: number[];
    private predFun: string;
    private opt?: Options;
    private accuracy?: number;

    constructor(alg?: string, coef?: number[], func?: string, opt?: Options, acc?: number) {
        this.algorithm = alg ? alg : '';
        this.coefficients = coef ? coef : [];
        this.predFun = func ? func : '';
        if (opt) {
            this.opt = opt;
        }
        if (acc) {
            this.accuracy = acc;
        }
    }

    getAlg(): string {
        return this.algorithm;
    }

    getCoef(): number[] {
        return this.coefficients;
    }

    getFun(): string {
        return this.predFun;
    }

    getOpt(): Options | undefined {
        return this.opt;
    }

    getAcc(): number | undefined {
        return this.accuracy;
    }

    setAlg(alg: string) {
        this.algorithm = alg;
        this.opt = opt[alg];
    }

    setCoef(coef: number[]) {
        this.coefficients = coef;
    }

    setFun(fun: string) {
        this.predFun = fun;
    }

    setOpt(conf: string) {
        this.opt?.setValueFile(conf);
    }

    toJSON(): string {
        const textFile = `{
    "GroupName": "ProApes",
    "Version": "1.5",
    "PluginName": "PredireInGrafana",
    "algorithm": "${this.algorithm}",
    "coefficients": [${this.coefficients}],
    "predFun": "${this.predFun}",
    "opt": ${JSON.stringify(this.opt)},
    "accuracy": "${this.accuracy}"
}`; // string output
        return textFile;
    }
}
