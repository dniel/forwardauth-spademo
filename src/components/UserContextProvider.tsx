import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

const UserContext = createContext({} as Record<string, string>);
const UserProvider: React.FC = (props) => {
  const {
    children,
  } = props;

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
        console.error(error);
      })
  }, []);

  return (
    <UserContext.Provider value={userinfo}>
      {children}
    </UserContext.Provider>
  );
}; 

export { UserContext, UserProvider };