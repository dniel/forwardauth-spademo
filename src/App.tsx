import React from 'react';
import WelcomeMessage from "./components/WelcomeMessage";
import Userinfo from "./components/Userinfo";
import { UserProvider } from './components/UserContextProvider';

const App: React.FC = () => {
  return (
    <UserProvider>
      <WelcomeMessage />
      <Userinfo />
    </UserProvider>
  );
};

export default App;
