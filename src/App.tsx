import WelcomeMessage from "./components/WelcomeMessage";
import Userinfo from "./components/Userinfo";
import React, { useCallback, useEffect, useState, useContext } from 'react';
import UserinfoContext from './components/userinfo-context';
import ConfigContext from './components/config-context';
import AuthService from './api/auth';

const App: React.FC = () =>  {
  const configContext = useContext(ConfigContext);

  const userinfo = {
    "sub": "google-oauth2|115877927226929985701",
    "name": "Daniel Ellensen",
    "picture": "https://lh3.googleusercontent.com/a-/AOh14Gg_JprojIDZZNvUWuMi-0lP6Z5yjJEdjN59aJ7SaQ",
    "email": "daniel@engfeldt.net"
  };

  const authService = new AuthService(configContext .authBaseUrl);
  const loginUrl = authService.loginUrl;
  const logoutUrl = authService.logoutUrl;
  
  return (
    <UserinfoContext.Provider value={userinfo}>
      <WelcomeMessage/>
      <Userinfo/>
    </UserinfoContext.Provider>
  );
};

export default App;
