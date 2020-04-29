import { PureComponent } from 'react';
import { StrategyRL } from './RL/StrategyRL';
import { StrategySVM } from './SVM/StrategySVM';
import { Strategy } from './Strategy';
import { ConfigRL } from './RL/ConfigRL';
import { ConfigSVM } from './SVM/ConfigSVM';
import { Option } from './Options';
import { OptionRL } from './RL/OptionsRL';
import { OptionSVM } from './SVM/OptionsSVM';

export const strategies: { [index: string]: Strategy } = {
    RL: new StrategyRL(),
    SVM: new StrategySVM(),
};

export const configs: { [index: string]: typeof PureComponent } = {
    RL: ConfigRL,
    SVM: ConfigSVM,
};

export const options: { [index: string]: Option } = {
    RL: new OptionRL(),
    SVM: new OptionSVM(),
};
