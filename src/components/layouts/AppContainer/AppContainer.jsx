import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './AppContainer.styles';

const AppContainer = ({ className, classes, children, maxWidth }) => (
    <div 
        className={classNames(className, classes.root)} 
        style={{
            maxWidth: (maxWidth === 'sm') ? 600 : (maxWidth === 'md') ? 870 : 1170
        }}>
        {children}
    </div>
);

AppContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppContainer);