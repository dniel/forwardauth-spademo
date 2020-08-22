import * as React from "react";
import { useState, useEffect } from 'react';
import { getConfig } from "../../utils/config-utils";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
}

const useStyles = makeStyles((theme) => ({
  highlight: {
  },
}));


const WelcomeMessage: React.FC<Props> = (props) => {
  const appName = __BUILD_INFO__.appName;

  return (
    <Typography paragraph variant="h2">
    Welcome to {appName}
    </Typography>
  );
};

export default WelcomeMessage;
