import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Home from './pages/home';
import Login from './pages/login';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Inter',
    ].join(','),
  },
  palette: {
    primary: {
      light: '#0062FF',
      main: '#0062FF',
      dark: '#0062FF',
      contrastText: '#fff',
    },
  }
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
