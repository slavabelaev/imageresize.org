import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppLogoImage from './AppLogo.svg';

const styles = theme => ({
    root: {
        display: 'inline-flex',
        transition: theme.transitions.create(),
        '&:hover': {
            opacity: .64
        }
    },
    image: {
        width: '100%'
    }
});

class AppLogo extends React.Component {
    render() {
        const props = this.props;
        const { classes } = this.props;

        return (
            <Router>
                <Link to="/" className={`${props.className || ''} ${classes.root}`}>
                    <img src={AppLogoImage} alt="ImageResize Logo" className={classes.image} />
                </Link>
            </Router>
        );
    }
}
 
AppLogo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppLogo);