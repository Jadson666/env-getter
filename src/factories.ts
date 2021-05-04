export class EnvFactory {
  envCopy: {
    [key: string]: any;
  };
  useDefault: boolean;
  defaultValues: {
    [key: string]: any;
  };

  constructor(config: any) {
    let { envsForDefault: ef, defaultValues } = config;
    if (!Array.isArray(ef)) ef = undefined;
    this.envCopy = { ...process.env };
    this.useDefault =
      ef === undefined || ef.includes(this.envCopy.NODE_ENV as string);
    this.defaultValues = defaultValues;
  }

  getEnv(useDefault: boolean = false) {
    const envCopy = { ...process.env };
    if (useDefault) {
      for (const key in this.defaultValues) {
        if (Object.prototype.hasOwnProperty.call(this.defaultValues, key)) {
          const ele = this.defaultValues[key];
          if (envCopy[key] === undefined) envCopy[key] = ele;
        }
      }
    }
    return envCopy;
  }
}
