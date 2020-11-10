import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Userinfo from '../components/Userinfo';

const useStyles = makeStyles((theme) => ({
}));


const Profile: React.FC = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h2">
                Profile
            </Typography>
            <Typography paragraph variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Userinfo/>
        </div>
    );
};

export default Profile;
