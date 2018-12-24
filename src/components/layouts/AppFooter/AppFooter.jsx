import './AppFooter.scss';

import React from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import List  from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import AppLogo from '../AppLogo/AppLogo';
import AppIcon from '../AppIcon/AppIcon';

const AppFooter = () => (
<Router>
    <footer className="AppFooter _has_max-width">
        <Grid container className="AppFooter__Grid">
            <Grid item xs={2}>
                <AppLogo className="AppFooter__AppLogo"></AppLogo>
                <Grid container 
                      className="AppFooter__Grid">
                    <Grid item xs={4}>
                        <IconButton component="a" 
                                    target="_blank"
                                    href="https://twitter.com/" 
                                    className="AppFooter__IconButton">
                            <AppIcon icon="twitter" 
                                     size={16}
                                     className="AppFooter__AppIcon"></AppIcon>
                        </IconButton>
                    </Grid>
                    <Grid item xs={4}>
                        <IconButton component="a" 
                                    target="_blank"
                                    href="https://www.facebook.com/" 
                                    className="AppFooter__IconButton">
                            <AppIcon icon="facebook" 
                                     size={16}
                                     className="AppFooter__AppIcon"></AppIcon>
                        </IconButton>
                    </Grid>
                    <Grid item xs={4}>
                        <IconButton component="a" 
                                    target="_blank"
                                    href="https://plus.google.com/" 
                                    className="AppFooter__IconButton">
                            <AppIcon icon="google-plus" 
                                     size={16}
                                     className="AppFooter__AppIcon"></AppIcon>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}>
                <List component="nav" className="AppFooter__List">
                    <ListItem button dense={true} component={Link} to="/image-tools" className="AppFooter__ListItem">
                        <ListItemText class="AppFooter__ListItemText" primary="Image Tools" />
                    </ListItem>
                    <ListItem button dense={true} component={Link} to="/image-resize" className="AppFooter__ListItem">
                        <ListItemText class="AppFooter__ListItemText" primary="Image Resize" />
                    </ListItem>
                    <ListItem button dense={true} component={Link} to="/bulk-image-resize" className="AppFooter__ListItem">
                        <ListItemText class="AppFooter__ListItemText" primary="Bulk Image Resize" />
                    </ListItem>
                    <ListItem button dense={true} component={Link} to="/image-compressor" className="AppFooter__ListItem">
                        <ListItemText class="AppFooter__ListItemText" primary="Image Compressor" />
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={2}>
                <List component="nav" className="AppFooter__List">
                    <ListItem button dense={true} component={Link} to="/features" className="AppFooter__ListItem">
                        <ListItemText class="AppFooter__ListItemText" primary="Features" />
                    </ListItem>
                    <ListItem button dense={true} component={Link} to="/crop-images" className="AppFooter__ListItem">
                        <ListItemText class="AppFooter__ListItemText" primary="Crop Images" />
                    </ListItem>
                    <ListItem button dense={true} component={Link} to="/photo-filters" className="AppFooter__ListItem">
                        <ListItemText class="AppFooter__ListItemText" primary="Photo Filters" />
                    </ListItem>
                    <ListItem button dense={true} component={Link} to="/photo-adjust" className="AppFooter__ListItem">
                        <ListItemText class="AppFooter__ListItemText" primary="Photo Adjust" />
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={2}>
                <List component="nav" className="AppFooter__List">
                    <ListItem button dense={true} component={Link} to="/about" className="AppFooter__ListItem">
                        <ListItemText class="AppFooter__ListItemText" primary="About" />
                    </ListItem>
                    <ListItem button dense={true} component={Link} to="/contact" className="AppFooter__ListItem">
                        <ListItemText class="AppFooter__ListItemText" primary="Contact" />
                    </ListItem>
                    <ListItem button dense={true} component={Link} to="/help" className="AppFooter__ListItem">
                        <ListItemText class="AppFooter__ListItemText" primary="Help" />
                    </ListItem>
                    <ListItem button dense={true} component={Link} to="/feedback" className="AppFooter__ListItem">
                        <ListItemText class="AppFooter__ListItemText" primary="Feedback" />
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={2}>
                <List component="nav" className="AppFooter__List">
                    <ListItem button dense={true} component={Link} to="/legal" className="AppFooter__ListItem">
                        <ListItemText class="AppFooter__ListItemText" primary="Legal" />
                    </ListItem>
                    <ListItem button dense={true} component={Link} to="/privacy" className="AppFooter__ListItem">
                        <ListItemText class="AppFooter__ListItemText" primary="Privacy" />
                    </ListItem>
                    <ListItem button dense={true} component={Link} to="/terms-of-services" className="AppFooter__ListItem">
                        <ListItemText class="AppFooter__ListItemText" primary="Terms of services" />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    </footer>
</Router>
)
 
export default AppFooter;