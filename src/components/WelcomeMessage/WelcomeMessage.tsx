import * as React from "react";
import { useState, useEffect } from 'react';
import { getConfig } from "../../utils/config-utils";
import styles from "./WelcomeMessage.module.css";

interface Props {
}

const WelcomeMessage: React.FC<Props> = (props) => {
  const config = getConfig();
  const appName = __BUILD_INFO__.appName;
  const appBuildTime = __BUILD_INFO__.appBuildTime;
  const commitHash = __BUILD_INFO__.commitHash;

  useEffect(() => {
    document.title = `--==##> Welcome to ${appName} <##==--`;  
  });

  return (
    <div className={styles.container}>
      <div>
      Welcome <span className={styles.highlight}>{appName}</span>
      </div>
      <div>Built {appBuildTime}</div>
      <div>Commit hash: {commitHash}</div>
      <div>Current environment {config.environment}</div>
    </div>
  );
};

export default WelcomeMessage;
