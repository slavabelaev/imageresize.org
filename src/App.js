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
      600: 'rgba(0,0,0,.48)'
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    border: {
      light: 'rgba(0, 0, 0, 0.12)',
      dark: 'rgba(0, 0, 0, 0.36)'
    },
    text: {
      primary: 'rgba(0,0,0,.72)',
      secondary: 'rgba(0,0,0,.48)'
    },
    action: {
      selectedBackground: 'rgba(0,0,0,.024)'
    }
  },
  shape: {
    borderRadius: 3
  },
  typography: {
    useNextVariants: true,
    color: 'rgba(0,0,0,.72)',
    headline: {
      color: 'rgba(0,0,0,.72)'
    },
    title: {
      color: 'rgba(0,0,0,.72)'
    },
    subheading: {
      color: 'rgba(0,0,0,.48)'
    },
    body2: {
      color: 'rgba(0,0,0,.48)'
    },
    body1: {
      color: 'rgba(0,0,0,.48)',
    },
    button: {
      color: 'rgba(0,0,0,.72)',
      fontWeight: 400,
      fontSize: 14,
      textTransform: 'initial'
    },
    h1: {
      color: 'rgba(0,0,0,.72)',
      marginBottom: 8
    },
    h2: {
      color: 'rgba(0,0,0,.72)',
      marginBottom: 8
    },
    h3: {
      color: 'rgba(0,0,0,.72)',
      marginBottom: 8
    },
    h4: {
      color: 'rgba(0,0,0,.72)',
      marginBottom: 8
    },
    h5: {
      color: 'rgba(0,0,0,.72)',
      marginBottom: 8
    },
    h6: {
      color: 'rgba(0,0,0,.72)',
      marginBottom: 8
    },
    subtitle1: {
      color: 'rgba(0,0,0,.48)',
      fontSize: '1.125rem'
    },
    subtitle2: {
      color: 'rgba(0,0,0,.48)'
    },
    body1Next: {
      color: 'rgba(0,0,0,.48)'
    },
    body2Next: {
      color: 'rgba(0,0,0,.48)'
    },
    buttonNext: {
      color: 'rgba(0,0,0,.72)'
    },
    captionNext: {
      color: 'rgba(0,0,0,.72)'
    },
    overline: {
      color: 'rgba(0,0,0,.72)'
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
