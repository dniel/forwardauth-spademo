import React, { useCallback, useEffect, useState, useContext } from 'react';
import styles from "./Userinfo.module.css";
import AuthService from '../../api/auth';
import UserinfoContext from '../userinfo-context';
import ConfigContext from '../config-context';
import axios from 'axios'

interface Props {
}

const Userinfo: React.FC<Props> = (props) => {
  const configContext = useContext(ConfigContext);
  const userinfoContext = useContext(UserinfoContext);
  const [authenticated, setAuthenticated] = useState(userinfoContext.sub!==undefined);

  const authService = new AuthService(configContext.authBaseUrl);
  const loginUrl = authService.loginUrl;
  const logoutUrl = authService.logoutUrl;
  
  // handle user click for logout.
  const logoutClickHandler = useCallback(() => {
    window.location.assign(logoutUrl);
  }, []);


  // return login link if not authenticated.
  if (!authenticated) {
    return <a href={loginUrl}>Login</a>;
  }

  // return userinfo if authenticated and also a logout link
  return (
    <UserinfoContext.Consumer>
      { userinfo => ( 
        <div className={styles.container}>
          <div>
            Welcome <span className={styles.highlight}>{userinfo.email}</span>
          </div>
          <div>
              <button onClick={logoutClickHandler}>Logout</button>
            </div>
        </div>
    )}    
    </UserinfoContext.Consumer>
  );
};

export default Userinfo;
