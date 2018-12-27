import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
import styles from './AppFooter.styles';

const AppFooter = ({ className, classes }) => (
    <footer className={`${className || ''} ${classes.root}`}>
        <Divider />
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={2}>
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
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}>
                    <List component="nav">
                        <ListItem button dense={true} component={Link} to="/image">
                            <ListItemText primary={
                                <Typography className={classes.ListItemText_title}>Image Tools</Typography>} 
                            />
                        </ListItem>
                        <ListItem button dense={true} component={Link} to="/image/resize">
                            <ListItemText primary={<Typography>Image Resize</Typography>} />
                        </ListItem>
                        <ListItem button dense={true} component={Link} to="/image/bulk-resize">
                            <ListItemText primary={<Typography>Bulk Image Resize</Typography>} />
                        </ListItem>
                        <ListItem button dense={true} component={Link} to="/image/compress">
                            <ListItemText primary={<Typography>Image Compressor</Typography>} />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={2}>
                    <List component="nav">
                        <ListItem button dense={true} component={Link} to="/feature">
                            <ListItemText primary={
                                <Typography className={classes.ListItemText_title}>Features</Typography>} 
                            />
                        </ListItem>
                        <ListItem button dense={true} component={Link} to="/feature/cropping">
                            <ListItemText primary={<Typography>Crop Images</Typography>} />
                        </ListItem>
                        <ListItem button dense={true} component={Link} to="/feature/editing">
                            <ListItemText primary={<Typography>Photo Filters</Typography>} />
                        </ListItem>
                        <ListItem button dense={true} component={Link} to="/feature/compressing">
                            <ListItemText primary={<Typography>Photo Adjust</Typography>} />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={2}>
                    <List component="nav">
                        <ListItem button dense={true} component={Link} to="/about">
                            <ListItemText primary={
                                <Typography className={classes.ListItemText_title}>About</Typography>} 
                            />
                        </ListItem>
                        <ListItem button dense={true} component={Link} to="/contact">
                            <ListItemText primary={<Typography>Contact</Typography>} />
                        </ListItem>
                        <ListItem button dense={true} component={Link} to="/help">
                            <ListItemText primary={<Typography>Help</Typography>} />
                        </ListItem>
                        <ListItem button dense={true} component={Link} to="/feedback">
                            <ListItemText primary={<Typography>Feedback</Typography>} />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={2}>
                    <List component="nav">
                        <ListItem button dense={true} component={Link} to="/legal">
                            <ListItemText primary={
                                <Typography className={classes.ListItemText_title}>Legal</Typography>} 
                            />
                        </ListItem>
                        <ListItem button dense={true} component={Link} to="/privacy">
                            <ListItemText primary={<Typography>Privacy</Typography>} />
                        </ListItem>
                        <ListItem button dense={true} component={Link} to="/terms-of-service">
                            <ListItemText primary={<Typography>Terms of Service</Typography>} />
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