import React, { PureComponent } from 'react';

interface Props {
    algorithm: string;
    coefficients: any[];
    opt: any;
    lastValue?: number;
    pause: () => void;
    start: () => void;
}

export class PanelView extends PureComponent<Props> {
    btn_stop: any;
    btn_start: any;

    componentDidMount() {
        this.btn_stop = document.getElementById('btn_stop');
        this.btn_start = document.getElementById('btn_start');
    }

    private pause = () => {
        this.props.pause();
        if (this.btn_stop) {
            this.btn_stop.hidden = true;
        }
        if (this.btn_start) {
            this.btn_start.hidden = false;
        }
    };

    private start = () => {
        this.props.start();
        if (this.btn_stop) {
            this.btn_stop.hidden = false;
        }
        if (this.btn_start) {
            this.btn_start.hidden = true;
        }
    };

    render() {
        const { algorithm, coefficients, opt, lastValue } = this.props;

        return (
            <div>
                <pre>
                    Log {'\n'}- Algorithm: {algorithm + '\n'}- Coefficients: {coefficients + '\n'}
                    {opt != null ? '- Options: ' + JSON.stringify(opt) + '\n' : ''}
                </pre>
                <div style={{ textAlign: 'center' }}>
                    <h1>{lastValue}</h1>
                    <button id="btn_stop" className="btn btn-danger" onClick={this.pause}>
                        {'Stop'}
                    </button>
                    <button id="btn_start" className="btn btn-success" onClick={this.start} hidden>
                        {'Start'}
                    </button>
                </div>
            </div>
        );
    }
}
