import { PureComponent } from 'react';
import { StrategyRL } from './RL/strategyRL';
import { StrategySVM } from './SVM/strategySVM';
import { Strategy } from './interfaces/strategy';
import { ConfigRL } from './RL/configRL';
import { ConfigSVM } from './SVM/configSVM';

export const strategies: { [index: string]: Strategy } = {
    RL: new StrategyRL(),
    SVM: new StrategySVM(),
};

export const configs: { [index: string]: typeof PureComponent } = {
    RL: ConfigRL,
    SVM: ConfigSVM,
};
