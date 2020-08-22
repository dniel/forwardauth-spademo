export enum Environment {
  LOCAL = "LOCAL",
  DEV = "DEV",
  STAGING = "STAGING",
  PROD = "PROD",
}

export interface IAppConfiguration {
  apiUrl: string;
  environment: Environment;
  authBaseUrl: string
}

type IEnvToConfigMap = {
  [key in Environment]: IAppConfiguration;
};

const envToConfigMap: IEnvToConfigMap = {
  [Environment.LOCAL]: {
    apiUrl: "https://demo.example.test",
    environment: Environment.LOCAL,
    authBaseUrl: "https://auth.example.test"
  },
  [Environment.DEV]: {
    apiUrl: "",
    environment: Environment.DEV,
    authBaseUrl: "https://auth.example.test",
  },
  [Environment.STAGING]: {
    apiUrl: "",
    environment: Environment.STAGING,
    authBaseUrl: "https://auth.dniel.in",
  },
  [Environment.PROD]: {
    apiUrl: "",
    environment: Environment.PROD,
    authBaseUrl: "https://auth.dniel.se",
  },
};

export const getEnvironment = (origin: string): Environment => {
  if (/^https:\/\/example.test/.test(origin)) {
    return Environment.DEV;
  } else if (/^https:\/\/dniel.in/.test(origin)) {
    return Environment.STAGING;
  } else if (/^https:\/\/dniel.se/.test(origin)) {
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