import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// Styles
import styles from './NotFoundPage.styles';

const NotFoundPage = ({ className, classes }) => (
    <div className={`${className || ''} ${classes.root}`}>
        <Typography variant="h1">404 Not Found</Typography>
        <Typography component="p" variant="subtitle1">The page you are looking for does not exist.</Typography>
    </div>
);
 
NotFoundPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFoundPage);