import Data from "../Data";

export default class DataSVM implements Data {
    private points: number[][] = [];
    private labels: number[] = [];

    public setValue(dataset: number[][]): void{
        dataset.forEach((triple) => {
            this.points.push([triple[0],triple[1]]);
            this.labels.push(triple[2]);
        });
    }

    public getPoints(): number[][] {
        return this.points;
    }

    public getLabels(): number[] {
        return this.labels;
    }

};