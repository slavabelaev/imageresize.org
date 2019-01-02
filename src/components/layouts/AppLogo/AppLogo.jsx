import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppLogoImage from './AppLogo.svg';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './AppLogo.styles';

const AppLogo = (props) => (
    <Link 
        className={`${props.className || ''} ${props.classes.root}`} 
        to="/"
    >
        <img 
            className={props.classes.image} 
            src={AppLogoImage} 
            alt="ImageResize.org Logo" 
        />
    </Link>
);
 
AppLogo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppLogo);