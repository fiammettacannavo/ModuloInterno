import { StrategyRL } from './strategyRL';
import { StrategySVM } from './strategySVM';
import { Strategy } from './strategy';

export const strategies: { [index: string]: Strategy } = {
  RL: new StrategyRL(),
  SVM: new StrategySVM(),
};
