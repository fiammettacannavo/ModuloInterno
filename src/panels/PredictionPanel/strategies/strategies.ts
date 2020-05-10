import { PureComponent } from 'react';
import { StrategyRL } from './Regression/RL/StrategyRL';
import { StrategyREXP } from './Regression/REXP/StrategyREXP';
import { StrategyRLOG } from './Regression/RLOG/StrategyRLOG';
import { StrategySVM } from './SVM/StrategySVM';
import { Strategy } from './Strategy';
import { ConfigRegression } from './Regression/ConfigRegression';
import { ConfigSVM } from './SVM/ConfigSVM';
import Option from '../../../common/Options';
import OptionRL from '../../../common/OptionsRegression';
import OptionSVM from '../../../common/OptionsSVM';

export const strategies: { [index: string]: Strategy } = {
    RL: new StrategyRL(),
    SVM: new StrategySVM(),
    REXP: new StrategyREXP(),
    RLOG: new StrategyRLOG(),
};

export const configs: { [index: string]: typeof PureComponent } = {
    RL: ConfigRegression,
    SVM: ConfigSVM,
    REXP: ConfigRegression,
    RLOG: ConfigRegression,
};

export const options: { [index: string]: Option } = {
    RL: new OptionRL(),
    SVM: new OptionSVM(),
    REXP: new OptionRL(),
    RLOG: new OptionRL(),
};
