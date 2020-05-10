import { DataPoint } from 'regression';
import Data from '../Data';

export default class DataRegression implements Data {
    private points: DataPoint[] = [];

    setValue(dataset: number[][]): void {
        this.points = [];
        dataset.forEach(p => {
            let point: DataPoint = [0, 0];
            point[0] = p[0];
            point[1] = p[1];
            this.points.push(point);
        });
    }

    getPoints(): DataPoint[] {
        return this.points;
    }
}
