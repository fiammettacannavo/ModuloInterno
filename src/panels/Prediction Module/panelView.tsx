import React, { PureComponent } from 'react';
import { Model } from './model';

interface Actions {
    setToPreditct: (n: any) => void;
}

interface Props {
    algorithm: string;
    coefficients: any[];
    opt: any;
}

export class PanelView extends PureComponent<Actions & Props> {
    model: Model = Model.getInstance();

    render() {
        const { algorithm, coefficients, opt } = this.props;

        return (
            <div>
                <pre>
                    Log {'\n'}
                    {opt != null ? '--Options: ' + JSON.stringify(opt) + '\n' : ''}
                    --Predictor {'\n'}
                    ----Algorithm: {algorithm + '\n'}
                    ----Coefficients: {coefficients + '\n'}
                </pre>
            </div>
        );
    }
}
