import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './App.theme.js';
import AppHeader from './components/layouts/AppHeader/AppHeader';
import AppFooter from './components/layouts/AppFooter/AppFooter';
import ImageResizePage from './components/pages/ImageResizePage/ImageResizePage';

const styles = theme => ({
  root: {
    backgroundImage: 
      `url(${require('./assets/images/background-left.jpg')}),
       url(${require('./assets/images/background-right.jpg')})`,
    backgroundPosition: 
      `top 200px left,
       center right`,
    backgroundRepeat: 'no-repeat'
  }
});

class App extends React.Component {
  render() {
    const props = this.props;
    const classes = this.props.classes;

    return (
      <div className={`${props.className || ''} ${classes.root}`}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <AppHeader className="App__AppHeader"></AppHeader>
          <Router>
            <Route path='/' component={ImageResizePage} />
          </Router>
          <AppFooter className="App__AppFooter"></AppFooter>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
