import React, { useCallback, useEffect, useState, useContext } from 'react';
import styles from "./Userinfo.module.css";
import { UserContext } from '../../components/UserContextProvider';
import ConfigContext from '../config-context';
import axios from 'axios'

interface Props {
}

const Userinfo: React.FC<Props> = (props) => {
  const configContext = useContext(ConfigContext);
  const { userinfo, isAuthenticated, loginUrl, logoutUrl } = useContext(UserContext);

  console.log("logout url", logoutUrl)
  console.log("login url", loginUrl)
  console.log("userinfo.sub", userinfo.sub)
  console.log("isAuthenticated", isAuthenticated)

  // handle user click for logout.
  const logoutClickHandler = useCallback(() => {
    window.location.assign(logoutUrl);
  }, []);


  // return login link if not authenticated.
  if (!isAuthenticated) {
    return <a href={loginUrl}>Login</a>;
  }

  // return userinfo if authenticated and also a logout link
  return (
    <UserContext.Consumer>
      { userinfo => ( 
        <div className={styles.container}>
          <div>
            Welcome <span className={styles.highlight}>{userinfo.sub}</span>
          </div>
          <div>
              <button onClick={logoutClickHandler}>Logout</button>
            </div>
        </div>
    )}    
    </UserContext.Consumer>
  );
};

export default Userinfo;
