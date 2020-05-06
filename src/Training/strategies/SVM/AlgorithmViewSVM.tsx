import React from 'react';
import OptionSVM from '../../../common/OptionsSVM';

interface Actions {
    options: OptionSVM
}

export default class AlgrithmViewSVM extends React.Component<Actions> {
    
    /** Options:
    {
        C = 1.0; For C, Higher = you trust your data more. Lower = more regularization. Should be in range of around 1e-2 ... 1e5 at most.
        tol = 1e-4; // do not touch this unless you're pro
        alphatol = 1e-7; // used for pruning non-support vectors. do not touch unless you're pro
        maxiter // if you have a larger problem, you may need to increase this
        kernel // kernel type
        numpasses = 10; // increase this for higher precision of the result. (but slower)
    }
    */
    state = {
        opt: 0
    }

    render() {
        const { options } = this.props;        
        return (
            <div className="graph-container">
                
				<div className="text-center">
					<h3 id="options" >Choose the algorithm options (if you want)</h3>
				</div>
				
                <label className="form-label form-label-2 mb-2"><strong>Kernel type</strong>: linear</label>
                <label className="form-label form-label-2 mb-2"><strong>Alpha Tollerance</strong>: 1e-7</label>
                <label className="form-label form-label-2 mb-10"><strong>Tollerance</strong>: 1e-4</label>
				
                <div id="SVMopt">
				
					<div className="form">
						<label className="form-label"><strong>C</strong>:</label>
						<input type="number" id="C" value={options.getC()} onChange={(event) => {options.setC(Number(event.target.value)); this.setState({opt: options.getC()})}} /> 
                    </div>
					
					<div className="form">
						<label className="form-label"><strong>Max iterations</strong>:</label>
						<input type="number" id="maxiter" value={options.getMaxIter()} onChange={(event) => {options.setMaxIter(Number(event.target.value)); this.setState({opt: options.getMaxIter()})}} />
                    </div>
					
					<div className="form">
						<label className="form-label"><strong>Number passes</strong>:</label>
						<input type="number" id="numpas" value={options.getNumPass()} onChange={(event) => {options.setNumPass(Number(event.target.value)); this.setState({opt: options.getNumPass()})}} />
                    </div>
					
                </div>
				
            </div>
        );
    }
}