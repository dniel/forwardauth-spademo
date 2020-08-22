import * as React from "react";
import Typography from '@material-ui/core/Typography';
import { getConfig } from "../../utils/config-utils";

interface Props {
}

const WelcomeMessage: React.FC<Props> = (props) => {

  const config = getConfig();
  const appBuildTime = __BUILD_INFO__.appBuildTime;
  const commitHash = __BUILD_INFO__.commitHash;

  return (
    <Typography variant="body2" color="textSecondary">
      <div>Built {appBuildTime}</div>
      <div>Commit hash: {commitHash}</div>
      <div>Current environment {config.environment}</div>
    </Typography>
  );
};

export default WelcomeMessage;
