/**
 * Project: Predire in Grafana
 * File: Data.ts
 * Author: Federico Carboni
 * Created: 2020-04-15
 * Version: 0.1
 * -----------------------------------------------------------------------------------------
 * Copyright 2020 ProApesGroup.
 * Licensed under the MIT License. See LICENSE in the project root for license informations.
 * -----------------------------------------------------------------------------------------
 * Changelog:
 * 0.1 - Writing Data class for incpsulation of measured data.
 */

import { DataFrame } from '@grafana/data';

export class Data {
    private data: number[][];

    constructor() {
        this.data = [];
    }

    addValues(a: number, b: number, time: number) {
        this.data.push([a, b, time]);
    }

    clear() {
        this.data = [];
    }

    getAt(index: number): { a: number; b: number; time: number } {
        return {
            a: this.data[index][0],
            b: this.data[index][1],
            time: this.data[index][2],
        };
    }

    size() {
        return this.data.length;
    }

    static fromSeries(series: DataFrame[]): Data {
        if (!series[0] || !series[1]) {
            throw Error('Set at least 2 query before');
        }

        const time = series[0].fields[1].values.toArray();
        const s: number[][] = []; // [ [valA, valA ...] [valB, valB ...] ]
        series.forEach(serie => {
            s.push(serie.fields[0].values.toArray());
        });
        let data = new Data();
        for (const i of time.keys()) {
            data.addValues(s[0][i], s[1][i], time[i]);
        }
        return data;
    }
}

export class DataIterator {
    private index = 0;
    private data: Data;

    constructor(data: Data) {
        this.data = data;
    }

    next() {
        return this.index < this.data.size() ? this.data.getAt(this.index++) : null;
    }
}
