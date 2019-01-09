import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import AppContainer from '../../layouts/AppContainer/AppContainer';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './NotFoundPage.styles';

const NotFoundPage = ({ className, classes }) => (
    <div className={classNames(className, classes.root)}>
        <AppContainer>
            <Typography variant="h1">404 Not Found</Typography>
            <Typography component="p" variant="subtitle1">The page you are looking for does not exist.</Typography>
        </AppContainer>
    </div>
);
 
NotFoundPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFoundPage);