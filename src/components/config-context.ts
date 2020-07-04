import React from 'react';
import getConfig from "../utils/config-utils";

const ConfigContext = React.createContext(getConfig());
export default ConfigContext;