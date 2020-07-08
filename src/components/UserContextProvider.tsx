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

  const [loginUrl, setLoginUrl] = useState<string>(authService.loginUrl);
  const [logoutUrl, setLogoutUrl] = useState<string>(authService.logoutUrl);
  const [userinfo, setUserinfo] = useState<Record<string, string>>({});
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  // load userinfo for current user.
  useEffect(() => {
    const fetchUserinfo = async () => {
      await axios.get('/auth/userinfo')
      .then(function (response) {
        console.debug("Loaded userinfo")
        setUserinfo(response.data.properties);
        setAuthenticated(true)
      })
      .catch(function (error) {
        setAuthenticated(false)
        console.error("failed to load userinfo", error);
      })
    };
 
    fetchUserinfo();
  }, []);

  return (
    <UserContext.Provider value={{ userinfo, isAuthenticated, loginUrl, logoutUrl }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };