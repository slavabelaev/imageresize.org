import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppHeader from './components/layouts/AppHeader/AppHeader';
import AppFooter from './components/layouts/AppFooter/AppFooter';
// Theme
import theme from './App.theme';
// Styles
import styles from './App.styles';
// Routes
import routes from './App.routes';

class App extends React.Component {
  render() {
    const classes = this.props.classes;

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root}>
          <AppHeader />
          <main className={classes.main}>
            {routes.map((route, index) =>
              <React.Fragment key={index}>
                {route.redirectTo ? 
                  <Redirect 
                    from={route.path} 
                    to={route.redirectTo} 
                  /> :
                  <Route  
                    key={index}
                    path={route.path} 
                    exact={route.exact} 
                    component={route.component} 
                  />
                }
                {route.children ? route.children.map((routeChild, index) => 
                  <Route 
                    key={index} 
                    path={`${route.path}/${routeChild.path}`}
                    exact={route.exact}
                    component={routeChild.component} 
                  />
                ) : null}
              </React.Fragment>
            )}
          </main>
          <AppFooter />
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
