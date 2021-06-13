export enum Environment {
  LOCAL = "LOCAL",
  DEV = "DEV",
  TEST = "TEST",
  STAGING = "STAGING",
  PROD = "PROD",
}

export interface IAppConfiguration {
  apiUrl: string;
  environment: Environment;
  authBaseUrl: string;
}

type IEnvToConfigMap = {
  [key in Environment]: IAppConfiguration;
};

const envToConfigMap: IEnvToConfigMap = {
  [Environment.LOCAL]: {
    apiUrl: "https://spademo.example.test/auth",
    environment: Environment.LOCAL,
    authBaseUrl: "https://spademo.example.test/auth",
  },
  [Environment.DEV]: {
    apiUrl: "https://spademo.dev.nordlab.io/auth",
    environment: Environment.DEV,
    authBaseUrl: "https://spademo.dev.nordlab.io/auth",
  },
  [Environment.TEST]: {
    apiUrl: "https://spademo.test.nordlab.io/auth",
    environment: Environment.TEST,
    authBaseUrl: "https://spademo.test.nordlab.io/auth",
  },
  [Environment.STAGING]: {
    apiUrl: "https://spademo.stage.nordlab.io/auth",
    environment: Environment.STAGING,
    authBaseUrl: "https://spademo.stage.nordlab.io/auth",
  },
  [Environment.PROD]: {
    apiUrl: "https://spademo.nordlab.io/auth",
    environment: Environment.PROD,
    authBaseUrl: "https://spademo.nordlab.io/auth",
  },
};

export const getEnvironment = (origin: string): Environment => {
  if (/^https:\/\/(.*\.){0,1}dev/.test(origin)) {
    return Environment.DEV;
  } else if (/^https:\/\/(.*\.){0,1}test/.test(origin)) {
    return Environment.TEST;
  } else if (/^https:\/\/(.*\.){0,1}stage/.test(origin)) {
    return Environment.STAGING;
  } else if (/^https:\/\//.test(origin)) {
    return Environment.PROD;
  } else {
    return Environment.LOCAL;
  }
};

export const getConfig = (
  origin: string = window.origin,
): IAppConfiguration => {
  const environment = getEnvironment(origin);
  return envToConfigMap[environment];
};

export default getConfig;
