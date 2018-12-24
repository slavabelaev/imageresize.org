import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import AppHeader from './components/layouts/AppHeader/AppHeader';
import AppFooter from './components/layouts/AppFooter/AppFooter';
import ImageResizePage from './components/pages/ImageResizePage/ImageResizePage';

import './App.scss';

const theme = createMuiTheme({
  palette: {
    primary: {
    // light: will be calculated from palette.primary.main,
    main: '#ff4400',
    // dark: will be calculated from palette.primary.main,
    // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
    light: '#0066ff',
    main: '#0044ff',
    // dark: will be calculated from palette.secondary.main,
    contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppHeader className="App__AppHeader"></AppHeader>
        <Router>
          <Route path='/' component={ImageResizePage} />
        </Router>
        <AppFooter className="App__AppFooter"></AppFooter>
      </MuiThemeProvider>
    );
  }
}

export default App;
