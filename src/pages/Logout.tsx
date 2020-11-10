import React, { useCallback, useEffect, useState, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../components/UserContextProvider';
import { Link } from '@material-ui/core';
import { Link as RouterLink } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
}));

const Logout: React.FC = () => {
    const classes = useStyles();
    const { userinfo, isAuthenticated, loginUrl, logoutUrl } = useContext(UserContext);

    return (
        <div>
            <Typography variant="h2">
                Logout
            </Typography>
            <Typography paragraph variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Paper elevation={4}>
            <List>
                <Link href={loginUrl} color="inherit"><ListItem>Login again</ListItem></Link>
                <RouterLink to="/">Back Home</RouterLink>
                </List>
            </Paper>            

        </div>
    );
};

export default Logout;
