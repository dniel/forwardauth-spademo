import React, { createContext, useState, useEffect, useContext } from "react";
import AuthService from '../api/auth';
import ConfigContext from './config-context';
import axios from 'axios';

const UserContext = createContext({
  userinfo: {} as Record<string, string>,
  isAuthenticated: false,
  loginUrl: "na",
  logoutUrl: "na"
});

const UserProvider: React.FC = (props) => {
  const {
    children,
  } = props;

  const configContext = useContext(ConfigContext);
  const authService = new AuthService(configContext.authBaseUrl);

  let [loginUrl, setLoginUrl] = useState<string>(authService.loginUrl);
  let [logoutUrl, setLogoutUrl] = useState<string>(authService.logoutUrl);
  let [userinfo, setUserinfo] = useState<Record<string, string>>({});
  let [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  // load userinfo for current user.
  useEffect(() => {
    axios.get('/auth/userinfo')
      .then(function (response) {
        setAuthenticated(true)
        setUserinfo(response.data.properties);
      })
      .catch(function (error) {
        setAuthenticated(false)
        console.error(error);
      })
  }, []);

  return (
    <UserContext.Provider value={{ userinfo, isAuthenticated, loginUrl, logoutUrl }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };