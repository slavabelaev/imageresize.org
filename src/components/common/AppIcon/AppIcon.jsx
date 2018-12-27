import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Styles
import styles from './AppIcon.styles';

class AppIcon extends React.Component {
    state = {
        size: 
            this.props.size === 'large' ? 32 : 
            this.props.size === 'small' ? 20 : 24
    };

    render() {
        const props = this.props;
        const { classes } = this.props;
        const { size } = this.state;
        const styles = this.props.icon ? {
            backgroundImage: 'url(' + require(`../../../assets/icons/${this.props.icon}.svg`) + ')',
            width: size,
            height: size,
            minWidth: size,
            minHeight: size
        } : null;

        return (
            <i className={`${props.className || ''} ${classes.root}`} style={styles}></i>
        );
    }
}

AppIcon.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppIcon);