import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppLogoImage from './AppLogo.svg';
// Styles
import styles from './AppLogo.styles';

const AppLogo = (props) => (
    <Link 
        className={`${props.className || ''} ${props.classes.root}`} 
        to="/image/resize"
    >
        <img 
            className={props.classes.image} 
            src={AppLogoImage} 
            alt="ImageResize Logo" 
        />
    </Link>
);
 
AppLogo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppLogo);