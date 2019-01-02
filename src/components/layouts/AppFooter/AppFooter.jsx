import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import List  from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import AppLogo from '../AppLogo/AppLogo';
import AppIcon from '../../common/AppIcon/AppIcon';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './AppFooter.styles';

const AppFooter = ({ className, classes }) => (
    <footer className={`${className || ''} ${classes.root}`}>
        <Divider />
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={4}>
                    <AppLogo className={classes.AppLogo}></AppLogo>
                    <Grid className={classes.Grid_socials} container>
                        <Grid item xs={4}>
                            <IconButton 
                                component="a" 
                                target="_blank" 
                                href="https://twitter.com/"
                            >
                                <AppIcon icon="twitter" size="small"></AppIcon>
                            </IconButton>
                        </Grid>
                        <Grid item xs={4}>
                            <IconButton 
                                component="a" 
                                target="_blank" 
                                href="https://www.facebook.com/"
                            >
                                <AppIcon icon="facebook" size="small"></AppIcon>
                            </IconButton>
                        </Grid>
                        <Grid item xs={4}>
                            <IconButton 
                                component="a" 
                                target="_blank" 
                                href="https://plus.google.com/"
                            >
                                <AppIcon icon="google-plus" size="small"></AppIcon>
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Typography component="div">© 2013 - 2018 Imageresize.org</Typography>
                </Grid>
                <Grid item xs={2}>
                    <List disablePadding component="nav">
                        <ListItem dense={true}>
                            <ListItemText className={classes.ListItemText_title} primary="Image Tools" />
                        </ListItem>
                        <ListItem button dense={true} component={Link} to="/image/resize">
                            <ListItemText className={classes.ListItemText} primary="Image Resize" />
                        </ListItem>
                        <ListItem button dense={true} component={Link} to="/image/bulk-resize">
                            <ListItemText className={classes.ListItemText} primary="Bulk Image Resize" />
                        </ListItem>
                        <ListItem button dense={true} component={Link} to="/image/compress">
                            <ListItemText className={classes.ListItemText} primary="Image Compressor" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={2}>
                    <List disablePadding component="nav">
                        <ListItem dense={true}>
                            <ListItemText className={classes.ListItemText_title} primary="Features" />
                        </ListItem>
                        <ListItem button dense={true} component={Link} to="/feature/cropping">
                            <ListItemText className={classes.ListItemText} primary="Crop Images" />
                        </ListItem>
                        <ListItem button dense={true} component={Link} to="/feature/editing">
                            <ListItemText className={classes.ListItemText} primary="Photo Filters" />
                        </ListItem>
                        <ListItem button dense={true} component={Link} to="/feature/compressing">
                            <ListItemText className={classes.ListItemText} primary="Photo Adjust" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={2}>
                    <List disablePadding component="nav">
                        <ListItem dense={true}>
                            <ListItemText className={classes.ListItemText_title} primary="About" />
                        </ListItem>
                        <ListItem button dense={true} component={Link} to="/contact">
                            <ListItemText className={classes.ListItemText} primary="Contact" />
                        </ListItem>
                        <ListItem button dense={true} component={Link} to="/help">
                            <ListItemText className={classes.ListItemText} primary="Help" />
                        </ListItem>
                        <ListItem button dense={true} component={Link} to="/feedback">
                            <ListItemText className={classes.ListItemText} primary="Feedback" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={2}>
                    <List disablePadding component="nav">
                        <ListItem dense={true}>
                            <ListItemText className={classes.ListItemText_title} primary="Legal" />
                        </ListItem>
                        <ListItem button dense={true} component={Link} to="/privacy">
                            <ListItemText className={classes.ListItemText} primary="Privacy" />
                        </ListItem>
                        <ListItem button dense={true} component={Link} to="/terms-of-service">
                            <ListItemText className={classes.ListItemText} primary="Terms of Service" />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </div>
    </footer>
);

AppFooter.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppFooter);