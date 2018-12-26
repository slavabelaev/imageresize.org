import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppTheme from './App.theme';
import AppHeader from './components/layouts/AppHeader/AppHeader';
import AppContent from './components/layouts/AppContent/AppContent';
import AppFooter from './components/layouts/AppFooter/AppFooter';
// Styles
import styles from './App.styles';

class App extends React.Component {
  render() {
    const props = this.props;
    const classes = this.props.classes;

    return (
      <div className={`${props.className || ''} ${classes.root}`}>
        <MuiThemeProvider theme={AppTheme}>
          <CssBaseline />
          <AppHeader></AppHeader>
          <AppContent></AppContent>
          <AppFooter></AppFooter>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
