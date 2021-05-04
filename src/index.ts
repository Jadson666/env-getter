import { Usages } from './enums';
import { EnvFactory } from './factories';
import { IConfig, IEnv } from './interfaces';

const env: IEnv = (keyOrConfig, defaultValue?) => {
  const usage = getWhichUsage(keyOrConfig);
  switch (usage) {
    case Usages.PASS_OBJECT: {
      const envWorker = new EnvFactory(keyOrConfig);
      return envWorker.getEnv(envWorker.useDefault);
    }
    case Usages.PASS_STRING: {
      return envUtil(keyOrConfig as string, defaultValue);
    }
    default:
      throw new Error('first paramter must be string or object');
  }
};

function getWhichUsage(keyOrConfig: string | IConfig): number | undefined {
  if (typeof keyOrConfig === 'object' && typeof keyOrConfig !== null) return Usages.PASS_OBJECT;
  if (typeof keyOrConfig === 'string') return Usages.PASS_STRING;
  return Usages.UNKNOWN;
}

function envUtil(keyOrConfig: string, defaultValue: any): any {
  return process.env[keyOrConfig] !== undefined
    ? process.env[keyOrConfig]
    : defaultValue;
}

export default env;
