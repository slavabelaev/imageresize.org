import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './AppContainer.styles';

class AppContainer extends React.Component {
    disablePaddingStyles = () => {
        let disablePaddingStyles = {};
        const disablePadding = this.props.disablePadding;
        if (!disablePadding) return;
        if (disablePadding.indexOf('top') > -1) disablePaddingStyles.paddingTop = 0;
        if (disablePadding.indexOf('bottom') > -1) disablePaddingStyles.paddingBottom = 0;
        if (disablePadding.indexOf('left') > -1) disablePaddingStyles.paddingLeft = 0;
        if (disablePadding.indexOf('right') > -1) disablePaddingStyles.paddingRight = 0;

        return disablePaddingStyles;
    }

    render() {
        const { props } = this;
        const { className, classes, children, maxWidth } = props;

        return (
            <div 
                className={classNames(className, classes.root)} 
                style={{
                    maxWidth: (maxWidth === 'sm') ? 640 : (maxWidth === 'md') ? 870 : 1170,
                    ...this.disablePaddingStyles()
                }}>
                {children}
            </div>
        )
    }
};

AppContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppContainer);