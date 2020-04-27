/**
 * Project: Predire in Grafana
 * File: Predicted.ts
 * Author: Federico Carboni
 * Created: 2020-04-15
 * Version: 0.1
 * -----------------------------------------------------------------------------------------
 * Copyright 2020 ProApesGroup.
 * Licensed under the MIT License. See LICENSE in the project root for license informations.
 * -----------------------------------------------------------------------------------------
 * Changelog:
 * 0.1 - Writing Predicted class for incpsulation of predicted data.
 */

export class Predicted {
    private predicted: number[][];

    constructor() {
        this.predicted = [];
    }

    addValue(value: number, time: number) {
        this.predicted.push([value, time]);
    }

    clear() {
        this.predicted = [];
    }

    getAt(index: number): { value: number; time: number } {
        return {
            value: this.predicted[index][0],
            time: this.predicted[index][1],
        };
    }

    size() {
        return this.predicted.length;
    }
}

export class PredIterator {
    private index = 0;
    private predicted: Predicted;

    constructor(predicted: Predicted) {
        this.predicted = predicted;
    }

    next() {
        return this.index < this.predicted.size() ? this.predicted.getAt(this.index++) : null;
    }
}
