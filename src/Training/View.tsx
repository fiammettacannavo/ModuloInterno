import React, { ChangeEvent } from 'react';
import './App.css';

interface Actions {
    selectAlg: (event: any) => void,
    buttonSelectAlg: () => void,
    buttonInputData: (event: ChangeEvent<HTMLInputElement>) => void,
    buttonInputOpt: (event: ChangeEvent<HTMLInputElement>) => void,
    buttonTrain: () => void,
    predictor: string,
    buttonDownload: () => void,
    AlgView?: typeof React.Component,
    options: any,
    graphPt: any
}

export default class View extends React.Component<Actions> {

    renderAlgorithmView() {
        if (this.props.AlgView)
            return (<this.props.AlgView
                options={this.props.options}
                graphPt={this.props.graphPt}
            />);
        else
            return (<div></div>);
    }

    render() {
        const { buttonSelectAlg, selectAlg, buttonInputData, buttonInputOpt,
            buttonTrain, predictor, buttonDownload } = this.props;
        return (
            <div className="main">
                <h1>Training Module</h1>
                <div>
                    <span>Choose the algorithm to use for the training: </span>
                    <select disabled={false} id="alg" onChange={selectAlg}>
                        <option>Regressione Lineare (RL)</option>
                        <option>Support Vector Machine (SVM)</option>
                    </select><br></br>
                    <button onClick={buttonSelectAlg}>Confirm</button>
                </div>

                <div id='import' style={{ display: 'none' }}>
                    <div>
                        <h3 id="options" >Editor</h3>

                        <label className="button">
                            Import data (.csv)
                            <input
                                className="form-input"
                                type="file"
                                name="data"
                                id="data"
                                onChange={buttonInputData}
                                accept=".csv,.txt"
                            />
                        </label>
                        <label className="button">
                            Import previous options (.json)
                            <input
                                className="form-input"
                                type="file"
                                name="opt"
                                id="opt"
                                onChange={buttonInputOpt}
                                accept=".json"
                            />
                        </label>

                        <input
                            className="button"
                            id='train'
                            type="button"
                            value="Train 🚂"
                            onClick={() => { buttonTrain() }}
                            style={{ display: 'none' }}
                        />

                        <p className='function' style={{ display: 'none' }}>Function: {predictor}</p>

                        <div>
                            <input
                                className="button"
                                type="button"
                                value="Download Predictor"
                                id="download"
                                onClick={buttonDownload}
                                style={{ display: 'none' }}
                            />

                            <input
                                className="button"
                                id='reset'
                                type="button"
                                value="Reset"
                                onClick={() => { window.location.reload(false) }}
                                style={{ display: 'none' }}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="graph">
                        {this.renderAlgorithmView()}
                    </div>
                </div>
            </div >
        );
    }
}
