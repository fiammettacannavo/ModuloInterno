import React, { PureComponent } from 'react';

interface Props {
    algorithm: string;
    coefficients: any[];
    opt: any;
}

export class PanelView extends PureComponent<Props> {
    render() {
        const { algorithm, coefficients, opt } = this.props;

        return (
            <div>
                <pre>
                    Log {'\n'}
                    --Predictor {'\n'}
                    ----Algorithm: {algorithm + '\n'}
                    ----Coefficients: {coefficients + '\n'}
                    {opt != null ? '----options: ' + JSON.stringify(opt) + '\n' : ''}
                </pre>
            </div>
        );
    }
}
