import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import List  from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton';
import AppLogo from '../AppLogo/AppLogo';
import AppIcon from '../AppIcon/AppIcon';

const styles = theme => ({
    footer: {
        maxWidth: 1170,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    gridContainer: {
        padding: '80px 40px'
    },
    appLogo: {
        marginBottom: 60
    }
});

class AppFooter extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Router>
                <footer className={classes.footer}>
                    <Divider />
                    <div className={classes.gridContainer}>
                        <Grid container className={classes.grid}>
                            <Grid item xs={2}>
                                <AppLogo className={classes.appLogo}></AppLogo>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <IconButton component="a" target="_blank" href="https://twitter.com/">
                                            <AppIcon icon="twitter" size={16}></AppIcon>
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <IconButton component="a" target="_blank" href="https://www.facebook.com/">
                                            <AppIcon icon="facebook" size={16}></AppIcon>
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <IconButton component="a" target="_blank" href="https://plus.google.com/">
                                            <AppIcon icon="google-plus" size={16}></AppIcon>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={2}></Grid>
                            <Grid item xs={2}>
                                <List component="nav">
                                    <ListItem dense={true} component={Link} to="/image-tools">
                                        <ListItemText primary="Image Tools" />
                                    </ListItem>
                                    <ListItem button dense={true} component={Link} to="/image-resize">
                                        <ListItemText primary="Image Resize" />
                                    </ListItem>
                                    <ListItem button dense={true} component={Link} to="/bulk-image-resize">
                                        <ListItemText primary="Bulk Image Resize" />
                                    </ListItem>
                                    <ListItem button dense={true} component={Link} to="/image-compressor">
                                        <ListItemText primary="Image Compressor" />
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={2}>
                                <List component="nav">
                                    <ListItem dense={true} component={Link} to="/features">
                                        <ListItemText primary="Features" />
                                    </ListItem>
                                    <ListItem button dense={true} component={Link} to="/crop-images">
                                        <ListItemText primary="Crop Images" />
                                    </ListItem>
                                    <ListItem button dense={true} component={Link} to="/photo-filters">
                                        <ListItemText primary="Photo Filters" />
                                    </ListItem>
                                    <ListItem button dense={true} component={Link} to="/photo-adjust">
                                        <ListItemText primary="Photo Adjust" />
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={2}>
                                <List component="nav">
                                    <ListItem dense={true} component={Link} to="/about">
                                        <ListItemText primary="About" />
                                    </ListItem>
                                    <ListItem button dense={true} component={Link} to="/contact">
                                        <ListItemText primary="Contact" />
                                    </ListItem>
                                    <ListItem button dense={true} component={Link} to="/help">
                                        <ListItemText primary="Help" />
                                    </ListItem>
                                    <ListItem button dense={true} component={Link} to="/feedback">
                                        <ListItemText primary="Feedback" />
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={2}>
                                <List component="nav">
                                    <ListItem dense={true} component={Link} to="/legal">
                                        <ListItemText primary="Legal" />
                                    </ListItem>
                                    <ListItem button dense={true} component={Link} to="/privacy">
                                        <ListItemText primary="Privacy" />
                                    </ListItem>
                                    <ListItem button dense={true} component={Link} to="/terms-of-services">
                                        <ListItemText primary="Terms of services" />
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </div>
                </footer>
            </Router>
        )
    }
};

AppFooter.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppFooter);