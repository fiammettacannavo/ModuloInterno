import { DataFrame } from '@grafana/data';

// Data representation as array (both measured and predicted)
export class Data {
    /** series format:
     *
     * [ [valA, valB, time] [valA, valB, time] ... ]
     *
     */
    series!: number[][];
    predicted?: number[][];

    static fromSeries(series: DataFrame[]): Data {
        if (!series[0] || !series[1]) {
            throw Error('Set at least 2 query before');
        }

        const time = series[0].fields[1].values.toArray();
        const values: number[][] = []; // [ [valA, valA ...] [valB, valB ...] ]
        series.forEach(serie => {
            values.push(serie.fields[0].values.toArray());
        });
        const _series = [];

        for (const i of time.keys()) {
            const _measure = []; // [ valA, valB, time ]
            values.forEach(value => {
                _measure.push(value[i]);
            });
            _measure.push(time[i]);
            _series.push(_measure);
        }
        const data = new Data();
        data.series = _series;
        return data;
    }
}

// Description of predictor and related utilities
export class Predictor {
    algorithm!: string;
    coefficients!: number[];
    predFun?: string[];
    opt?: any;

    static fromJSON(str: string | undefined): Predictor {
        if (!str) {
            throw Error('No file selected');
        }
        let predictor: Predictor = new Predictor();
        predictor = JSON.parse(str);
        if (!predictor.algorithm || !predictor.coefficients) {
            throw Error('Error reading file');
        }
        return predictor;
    }
}
