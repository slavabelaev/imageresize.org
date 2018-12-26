import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppLogoImage from './AppLogo.svg';
// Styles
import styles from './AppLogo.styles';

class AppLogo extends React.Component {
    render() {
        const props = this.props;
        const { classes } = this.props;

        return (
            <Router>
                <Link className={`${props.className || ''} ${classes.root}`} to="/">
                    <img className={classes.image} src={AppLogoImage} alt="ImageResize Logo" />
                </Link>
            </Router>
        );
    }
}
 
AppLogo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppLogo);