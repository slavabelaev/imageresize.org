import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import List  from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import AppLogo from '../AppLogo/AppLogo';
import AppIcon from '../AppIcon/AppIcon';

const styles = theme => ({
    root: {
        maxWidth: 1170,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    container: {
        padding: 60
    },
    AppLogo: {
        maxWidth: 175,
        marginBottom: 60
    },
    ListItemText_title: {
        color: theme.typography.title.color
    },
    Grid_socials: {
        textAlign: 'center'
    }
});

class AppFooter extends React.Component {
    render() {
        const props = this.props;
        const { classes } = this.props;

        return (
            <Router>
                <footer className={`${props.className || ''} ${classes.root}`}>
                    <Divider />
                    <div className={classes.container}>
                        <Grid container>
                            <Grid item xs={2}>
                                <AppLogo className={classes.AppLogo}></AppLogo>
                                <Grid className={classes.Grid_socials} container>
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
                                    <ListItem button dense={true} component={Link} to="/image-tools">
                                        <ListItemText primary={<Typography className={classes.ListItemText_title}>Image Tools</Typography>} />
                                    </ListItem>
                                    <ListItem button dense={true} component={Link} to="/image-resize">
                                        <ListItemText primary={<Typography>Image Resize</Typography>} />
                                    </ListItem>
                                    <ListItem button dense={true} component={Link} to="/bulk-image-resize">
                                        <ListItemText primary={<Typography>Bulk Image Resize</Typography>} />
                                    </ListItem>
                                    <ListItem button dense={true} component={Link} to="/image-compressor">
                                        <ListItemText primary={<Typography>Image Compressor</Typography>} />
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={2}>
                                <List component="nav">
                                    <ListItem button dense={true} component={Link} to="/features">
                                        <ListItemText primary={<Typography className={classes.ListItemText_title}>Features</Typography>} />
                                    </ListItem>
                                    <ListItem button dense={true} component={Link} to="/crop-images">
                                        <ListItemText primary={<Typography>Crop Images</Typography>} />
                                    </ListItem>
                                    <ListItem button dense={true} component={Link} to="/photo-filters">
                                        <ListItemText primary={<Typography>Photo Filters</Typography>} />
                                    </ListItem>
                                    <ListItem button dense={true} component={Link} to="/photo-adjust">
                                        <ListItemText primary={<Typography>Photo Adjust</Typography>} />
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={2}>
                                <List component="nav">
                                    <ListItem button dense={true} component={Link} to="/about">
                                        <ListItemText primary={<Typography className={classes.ListItemText_title}>About</Typography>} />
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
                                        <ListItemText primary={<Typography className={classes.ListItemText_title}>Legal</Typography>} />
                                    </ListItem>
                                    <ListItem button dense={true} component={Link} to="/privacy">
                                        <ListItemText primary={<Typography>Privacy</Typography>} />
                                    </ListItem>
                                    <ListItem button dense={true} component={Link} to="/terms-of-services">
                                        <ListItemText primary={<Typography>Terms of services</Typography>} />
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