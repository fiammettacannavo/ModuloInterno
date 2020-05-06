import React from 'react';
import OptionRL from '../../../common/OptionsRL';

interface Actions {
	options: OptionRL
}

export default class AlgorithmViewRL extends React.Component<Actions> {

	state = {
		prec: 2
	}

	render() {
		const { options } = this.props;
		return (
			<div className="graph-container">
				<p>Choose the algorithm options (if you want)</p>

				<div id="RLopt">
					<div className="form">
						<span className="form-label"><strong>Precision</strong>: </span>
						<select value={options.getPrecision()} onChange={(event) => { options.setPrecision(Number(event.target.value)); this.setState({ prec: options.getPrecision() }) }} >
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
						</select><br></br>
					</div>

				</div>

			</div>
		);
	}
}