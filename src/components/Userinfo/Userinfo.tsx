import React, { useCallback, useEffect, useState, useContext } from 'react';
import styles from "./Userinfo.module.css";
import { UserContext } from '../../components/UserContextProvider';
import ConfigContext from '../config-context';
import axios from 'axios'

interface Props {
}

const Userinfo: React.FC<Props> = (props) => {
  const { userinfo, isAuthenticated, loginUrl, logoutUrl } = useContext(UserContext);

  // handle user click for logout.
  const logoutClickHandler = useCallback(() => {
    window.location.assign(logoutUrl);
  }, []);


  // Return userinfo panel or login link, depending on
  // if user is authenticated or not.
  return (
    isAuthenticated ?
      <div className={styles.container}>
        <div>
          Welcome <span className={styles.highlight}>{userinfo.nickname}</span>
        </div>
        <div>
          <a href={logoutUrl}>Logout</a>
        </div>
      </div>
      : <a href={loginUrl}>Login</a>
  );
};

export default Userinfo;
