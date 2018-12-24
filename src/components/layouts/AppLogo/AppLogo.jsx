import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import AppLogoImage from './AppLogo.svg';

const styles = theme => ({
    logo: {
        display: 'inline-flex'
    }
});

class AppLogo extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Router>
                <Link to="/" className={classes.logo}>
                    <img src={AppLogoImage} alt="ImageResize Logo" />
                </Link>
            </Router>
        );
    }
}
 
AppLogo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppLogo);