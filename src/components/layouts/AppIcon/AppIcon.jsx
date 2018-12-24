import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    icon: {
        display: 'inline-flex',
        backgroundSize: 'cover',
    }
});

class AppIcon extends React.Component {
    state = {
        size: this.props.size ? this.props.size : 24
    };

    render() {
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
            <i className={classes.icon} style={styles}></i>
        );
    }
}

AppIcon.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppIcon);