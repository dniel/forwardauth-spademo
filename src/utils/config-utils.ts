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
    apiUrl: "https://demo.example.test",
    environment: Environment.LOCAL,
    authBaseUrl: "https://auth.example.test",
  },
  [Environment.DEV]: {
    apiUrl: "https://demo.example.test",
    environment: Environment.DEV,
    authBaseUrl: "https://auth.dev.dniel.in",
  },
  [Environment.TEST]: {
    apiUrl: "https://demo.example.test",
    environment: Environment.TEST,
    authBaseUrl: "https://auth.test.dniel.in",
  },
  [Environment.STAGING]: {
    apiUrl: "https://demo.example.test",
    environment: Environment.STAGING,
    authBaseUrl: "https://auth.stage.dniel.se",
  },
  [Environment.PROD]: {
    apiUrl: "https://demo.example.test",
    environment: Environment.PROD,
    authBaseUrl: "https://auth.prod.dniel.se",
  },
};

export const getEnvironment = (origin: string): Environment => {
  if (/^https?:\/\/(\w*)\.dev\.dniel\.[a-z]{2,3}/.test(origin)) {
    return Environment.DEV;
  } else if (/^https?:\/\/(\w*)\.test\.dniel\.[a-z]{2,3}/.test(origin)) {
    return Environment.TEST;
  } else if (/^https?:\/\/(\w*)\.stage\.dniel\.[a-z]{2,3}/.test(origin)) {
    return Environment.STAGING;
  } else if (/^https?:\/\/(\w*)\.prod\.dniel\.[a-z]{2,3}/.test(origin)) {
    return Environment.PROD;
  }

  return Environment.LOCAL;
};

export const getConfig = (
  origin: string = window.origin,
): IAppConfiguration => {
  const environment = getEnvironment(origin);
  return envToConfigMap[environment];
};

export default getConfig;
