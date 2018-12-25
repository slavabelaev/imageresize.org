import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'inline-flex',
        backgroundSize: 'cover',
        opacity: .54,
        transition: theme.transitions.create()
    }
});

class AppIcon extends React.Component {
    state = {
        size: this.props.size ? this.props.size : 24
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