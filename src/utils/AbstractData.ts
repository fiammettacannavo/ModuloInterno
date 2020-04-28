/**
 * Project: Predire in Grafana
 * File: AbstractData.ts
 * Author: Federico Carboni
 * Created: 2020-04-27
 * Version: 0.1
 * -----------------------------------------------------------------------------------------
 * Copyright 2020 ProApesGroup.
 * Licensed under the MIT License. See LICENSE in the project root for license informations.
 * -----------------------------------------------------------------------------------------
 * Changelog:
 * 0.1 - Abstract class for Data and Predicted.
 */

export abstract class AbstractData<T> {
    protected data: number[][];

    constructor() {
        this.data = [];
    }

    clear() {
        this.data = [];
    }

    size() {
        return this.data.length;
    }

    abstract addValues(val: T): void;
    abstract getAt(index: number): T;
}

export abstract class Iterator<T> {
    private index = 0;
    private data: AbstractData<T>;

    constructor(data: AbstractData<T>) {
        this.data = data;
    }

    next() {
        return this.index < this.data.size() ? this.data.getAt(this.index++) : null;
    }
}
