import WelcomeMessage from "./components/WelcomeMessage";
import React, { useCallback, useEffect, useState } from 'react';
import { getTokens, login, loginUrl, logout, logoutUrl } from './api/auth';

const params = (new URL(document.location.href)).searchParams;
const code: string | null = params.get('code'); 
const tokens = getTokens();

const App: React.FC = () =>  {
    const [authenticated, setAuthenticated] = useState(tokens !== null);
    const [authenticating, setAuthenticating] = useState(code !== null);
    useEffect(() => {
      const execute = async () => {
        window.history.replaceState({}, document.title, '/');
        try {
          await login(code!);
          setAuthenticated(true);
        } catch (err) {
          // DO NOTHING
        }
        setAuthenticating(false);
      };
      if (code !== null) {
        execute();
      }
    }, []);
    const handleClick = useCallback(() => {
      logout();
      window.location.assign(logoutUrl);
    }, []);
  
    if (authenticating) {
      return <div>authenticating...</div>;
    }
    if (!authenticated) {
      return <a href={loginUrl}>Login</a>;
    }
    return (
      <>
        <WelcomeMessage />;
        <div>
          <button onClick={handleClick}>Logout</button>
        </div>
      </>
    );
  }


export default App;
