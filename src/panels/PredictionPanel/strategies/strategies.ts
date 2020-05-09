import { PureComponent } from 'react';
import { StrategyRL } from './RL/StrategyRL';
import { StrategyREXP } from './REXP/StrategyREXP';
import { StrategyRLOG } from './RLOG/StrategyRLOG';
import { StrategySVM } from './SVM/StrategySVM';
import { Strategy } from './Strategy';
import { ConfigRL } from './RL/ConfigRL';
import { ConfigREXP } from './REXP/ConfigREXP';
import { ConfigRLOG } from './RLOG/ConfigRLOG';
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
    RL: ConfigRL,
    SVM: ConfigSVM,
    REXP: ConfigREXP,
    RLOG: ConfigRLOG,
};

export const options: { [index: string]: Option } = {
    RL: new OptionRL(),
    SVM: new OptionSVM(),
    REXP: new OptionRL(),
    RLOG: new OptionRL(),
};
