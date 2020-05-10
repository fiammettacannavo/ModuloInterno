import React from 'react';
import OptionRL from '../../../common/OptionsRegression';

interface Actions {
    options: OptionRL;
}

export default class AlgorithmViewRegression extends React.Component<Actions> {
    state = {
        prec: 2,
    };

    render() {
        const { options } = this.props;
        return (
            <div className="container">
                <h1>Options</h1>

                <div id="RLopt" className="gf-form">
                    <label className="gf-form-label width-10">Precision:</label>
                    <div className="gf-form-select-wrapper max-width-15">
                        <select
                            className="input-small gf-form-input"
                            value={options.getPrecision()}
                            onChange={event => {
                                options.setPrecision(Number(event.target.value));
                                this.setState({ prec: options.getPrecision() });
                            }}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}
