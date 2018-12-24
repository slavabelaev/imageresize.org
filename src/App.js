import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

import AppHeader from './components/layouts/AppHeader/AppHeader';
import AppFooter from './components/layouts/AppFooter/AppFooter';
import ImageResizePage from './components/pages/ImageResizePage/ImageResizePage';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <AppHeader className="App__AppHeader"></AppHeader>
          <Router>
            <Route path='/' component={ImageResizePage} />
          </Router>
          <AppFooter className="App__AppFooter"></AppFooter>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
