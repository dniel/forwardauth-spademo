import React from 'react';
import AppMenu from './components/AppMenu';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Logout from './pages/Logout';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import {UserProvider} from './components/UserContextProvider';
import {makeStyles} from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import {Client} from 'ketting';
import {KettingProvider} from 'react-ketting';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  }
}));

const client = new Client('https://spademo.prod.nordlab.io/auth');

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <KettingProvider client={client}>
      <UserProvider>
        <Router>
          <div className={classes.root}>
            <CssBaseline/>
            <AppMenu/>
            <Container component="main" className={classes.main} maxWidth="md">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/logout" component={Logout}/>
                <Route exact path="/home" component={Home}/>
              </Switch>
            </Container>
            <Footer/>
          </div>
        </Router>
      </UserProvider>
    </KettingProvider>
  );
};

export default App;
