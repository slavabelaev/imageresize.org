import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

import AppHeader from './components/layouts/AppHeader/AppHeader';
import AppFooter from './components/layouts/AppFooter/AppFooter';
import ImageResizePage from './components/pages/ImageResizePage/ImageResizePage';

// Main color
blue.main = "#6EC3FA";
green.main = "#A3D86D";
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
    background: {
      default: '#fff'
    },
    grey: {
      50: '#FBFCFD',
      600: 'rgba(0,0,0,.54)'
    },
    divider: '#E9E9E9',
    text: {
      primary: 'rgba(0,0,0,.64)',
      secondary: 'rgba(0,0,0,.54)'
    },
    action: {
      active: 'rgba(0,0,0,.64)',
      selectedBackground: 'rgba(0,0,0,.024)'
    }
  },
  typography: {
    useNextVariants: true,
    color: 'rgba(0,0,0,.64)',
    headline: {
      color: 'rgba(0,0,0,.64)'
    },
    title: {
      color: 'rgba(0,0,0,.64)'
    },
    subheading: {
      color: 'rgba(0,0,0,.54)'
    },
    body2: {
      color: 'rgba(0,0,0,.54)'
    },
    body1: {
      color: 'rgba(0,0,0,.54)',
    },
    button: {
      color: 'rgba(0,0,0,.64)',
      fontWeight: 400,
      fontSize: 14,
      textTransform: 'initial'
    },
    h1: {
      color: 'rgba(0,0,0,.64)',
      marginBottom: 8
    },
    h2: {
      color: 'rgba(0,0,0,.64)',
      marginBottom: 8
    },
    h3: {
      color: 'rgba(0,0,0,.64)',
      marginBottom: 8
    },
    h4: {
      color: 'rgba(0,0,0,.64)',
      marginBottom: 8
    },
    h5: {
      color: 'rgba(0,0,0,.64)',
      marginBottom: 8
    },
    h6: {
      color: 'rgba(0,0,0,.64)',
      marginBottom: 8
    },
    subtitle1: {
      color: 'rgba(0,0,0,.54)',
      fontSize: '1.125rem'
    },
    subtitle2: {
      color: 'rgba(0,0,0,.54)'
    },
    body1Next: {
      color: 'rgba(0,0,0,.54)'
    },
    body2Next: {
      color: 'rgba(0,0,0,.54)'
    },
    buttonNext: {
      color: 'rgba(0,0,0,.64)'
    },
    captionNext: {
      color: 'rgba(0,0,0,.64)'
    },
    overline: {
      color: 'rgba(0,0,0,.64)'
    }
  }
});

console.log('theme', theme);

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
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
