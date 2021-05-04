export interface IConfig {
  envsForDefault: string[] | undefined;
  defaultValues: {
    [key: string]: any;
  };
}

export type IReturn = string & {
  [key: string]: any;
};

export interface IEnv {
  (keyOrConfig: string | IConfig, defaultValue?: any): IReturn;
}
