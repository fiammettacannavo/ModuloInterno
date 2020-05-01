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

import { Option } from '../strategies/Options';
import { options } from '../strategies/strategies';

export class Predictor<Opt extends Option> {
    private algorithm: string;
    private coefficients: number[];
    private predFun: string;
    private opt: Opt;

    constructor(algorithm: string, coefficients: number[], predFun: string, opt: Opt) {
        this.algorithm = algorithm;
        this.coefficients = coefficients;
        this.predFun = predFun;
        this.opt = opt;
    }

    public getAlgorithm() {
        return this.algorithm;
    }

    public getCoefficients() {
        return this.coefficients;
    }

    public getPredFun() {
        return this.predFun;
    }

    public getOpt() {
        return this.opt;
    }

    static fromJSON(str: string | undefined): Predictor<Option> {
        if (!str) {
            throw Error('No file found');
        }
        let json = JSON.parse(str);
        let opt = options[json.algorithm];

        if (!json.algorithm || !json.coefficients) {
            throw Error('Error reading file');
        }

        let predictor = new Predictor(
            json.algorithm,
            json.coefficients,
            json.predFun || '',
            opt.fromJSON(json.opt || {})
        );

        return predictor;
    }
}
