/**
 * Project: Predire in Grafana
 * File: Predictor.ts
 * Author: Federico Carboni
 * Created: 2020-04-16
 * Version: 0.1
 * -----------------------------------------------------------------------------------------
 * Copyright 2020 ProApesGroup.
 * Licensed under the MIT License. See LICENSE in the project root for license informations.
 * -----------------------------------------------------------------------------------------
 * Changelog:
 * 0.1 - Writing Predictor class for incpsulation of pred info.
 */

export class Predictor {
    private algorithm!: string;
    private coefficients!: number[];
    private predFun?: string;
    private opt?: any;

    constructor(algorithm: string, coefficients: number[], predFun?: string, opt?: any) {
        this.algorithm = algorithm;
        this.coefficients = coefficients;
        this.predFun = predFun;
        this.opt = opt;
    }

    getAlgorithm() {
        return this.algorithm;
    }

    getCoefficients() {
        return this.coefficients;
    }

    getPredFun() {
        return this.predFun;
    }

    getOpt() {
        return this.opt;
    }

    setOpt(opt: any) {
        this.opt = {
            ...this.opt,
            ...opt,
        };
    }

    static fromJSON(str: string | undefined): Predictor {
        if (!str) {
            throw Error('No file found');
        }
        let predictor = JSON.parse(str);
        if (!predictor.algorithm || !predictor.coefficients) {
            throw Error('Error reading file');
        }
        return predictor;
    }
}
