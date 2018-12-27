import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Route, NavLink } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import AppLogo from '../AppLogo/AppLogo';
import AppIcon from '../../common/AppIcon/AppIcon';
// Styles
import styles from './AppHeader.styles';

class AppHeader extends React.Component {
    render() {
        const props = this.props;
        const { classes } = this.props;

        const ImageToolsBar = ({ match, location }) => (
            <AppBar 
                className={classes.AppBar} 
                component="div"
                position="static" 
                color="default"
            >
                <Tabs
                    className={classes.Tabs}
                    value={location.pathname}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab
                        className={classes.Tab} 
                        component={NavLink} 
                        to={`${match.path}/resize`}
                        value={`${match.path}/resize`}
                        label="Image Resize"
                    />
                    <Tab
                        className={classes.Tab} 
                        component={NavLink} 
                        to={`${match.path}/bulk-resize`}
                        value={`${match.path}/bulk-resize`}
                        label="Bulk Resize"
                    />
                    <Tab
                        className={classes.Tab} 
                        component={NavLink} 
                        to={`${match.path}/compress`}
                        value={`${match.path}/compress`}
                        label="Compress Images"
                    />
                    <Tab
                        className={classes.Tab} 
                        component={NavLink} 
                        to={`${match.path}/features`}
                        value={`${match.path}/features`}
                        label="Features"
                    />
                </Tabs>
            </AppBar>
        );
        const PdfToolsBar = ({ match, location }) => (
            <AppBar 
                className={classes.AppBar} 
                component="div"
                position="static" 
                color="default"
            >
                <Tabs
                    className={classes.Tabs}
                    value={location.pathname}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab
                        className={classes.Tab} 
                        component={NavLink} 
                        to={`${match.path}/resize`}
                        value={`${match.path}/resize`}
                        label="PDF Resize"
                    />
                    <Tab
                        className={classes.Tab} 
                        component={NavLink} 
                        to={`${match.path}/compress`}
                        value={`${match.path}/compress`}
                        label="PDF Compress"
                    />
                    <Tab
                        className={classes.Tab} 
                        component={NavLink} 
                        to={`${match.path}/merge`}
                        value={`${match.path}/merge`}
                        label="PDF Merge"
                    />
                </Tabs>
            </AppBar>
        );
        const ConvertToolsBar = ({ match, location }) => (
            <AppBar 
                className={classes.AppBar} 
                component="div"
                position="static" 
                color="default"
            >
                <Tabs
                    className={classes.Tabs}
                    value={location.pathname}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab
                        className={classes.Tab} 
                        component={NavLink} 
                        to={`${match.path}/jpg-to-pdf`}
                        value={`${match.path}/jpg-to-pdf`}
                        label="JPG to PDF"
                    />
                    <Tab
                        className={classes.Tab} 
                        component={NavLink} 
                        to={`${match.path}/jpg-to-png`}
                        value={`${match.path}/jpg-to-png`}
                        label="JPG to PNG"
                    />
                    <Tab
                        className={classes.Tab} 
                        component={NavLink} 
                        to={`${match.path}/pdf-to-jpg`}
                        value={`${match.path}/pdf-to-jpg`}
                        label="PDF to JPG"
                    />
                    <Tab
                        className={classes.Tab} 
                        component={NavLink} 
                        to={`${match.path}/pdf-to-png`}
                        value={`${match.path}/pdf-to-png`}
                        label="PDF to PNG"
                    />
                    <Tab
                        className={classes.Tab} 
                        component={NavLink} 
                        to={`${match.path}/png-to-jpg`}
                        value={`${match.path}/png-to-jpg`}
                        label="PNG to JPG"
                    />
                    <Tab
                        className={classes.Tab} 
                        component={NavLink} 
                        to={`${match.path}/png-to-pdf`}
                        value={`${match.path}/png-to-pdf`}
                        label="PNG to PDF"
                    />
                </Tabs>
            </AppBar>
        );
        const FeaturesBar = ({ match, location }) => (
            <AppBar 
                className={classes.AppBar} 
                component="div"
                position="static" 
                color="default"
            >
                <Tabs
                    className={classes.Tabs}
                    value={location.pathname}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab
                        className={classes.Tab} 
                        component={NavLink} 
                        to={`${match.path}/cropping`}
                        value={`${match.path}/cropping`}
                        label="Photo Cropping"
                    />
                    <Tab
                        className={classes.Tab} 
                        component={NavLink} 
                        to={`${match.path}/editing`}
                        value={`${match.path}/editing`}
                        label="Photo Editing"
                    />
                    <Tab
                        className={classes.Tab} 
                        component={NavLink} 
                        to={`${match.path}/compressing`}
                        value={`${match.path}/compressing`}
                        label="Photo Compressing"
                    />
                </Tabs>
            </AppBar>
        );

        return (
            <header className={`${props.className || ''} ${classes.root}`}>
                <Toolbar className={classes.Toolbar}>
                    <AppLogo />
                    <MenuList 
                        className={classes.MenuList}
                        component="nav" 
                        disablePadding
                    >
                        <MenuItem 
                            className={classes.MenuItem}
                            activeClassName={classes.MenuItem_selected}
                            component={NavLink}
                            to="/image"
                        >
                            <AppIcon className={classes.AppIcon} icon="image" />
                            Image Tools
                        </MenuItem>
                        <MenuItem 
                            className={classes.MenuItem}
                            activeClassName={classes.MenuItem_selected}
                            component={NavLink}
                            to="/pdf"
                        >
                            <AppIcon className={classes.AppIcon} icon="pdf" />
                            PDF Tools
                        </MenuItem>
                        <MenuItem 
                            className={classes.MenuItem}
                            activeClassName={classes.MenuItem_selected}
                            component={NavLink}
                            to="/convert"
                        >
                            <AppIcon className={classes.AppIcon} icon="converter" />
                            Convert Tools
                        </MenuItem>
                        <MenuItem 
                            className={classes.MenuItem}
                            activeClassName={classes.MenuItem_selected}
                            component={NavLink}
                            to="/feature"
                        >
                            <AppIcon className={classes.AppIcon} icon="features" />
                            Features
                        </MenuItem>
                    </MenuList>
                </Toolbar>

                <Route path="/image" render={ImageToolsBar} />
                <Route path="/pdf" render={PdfToolsBar} />
                <Route path="/convert" render={ConvertToolsBar} />
                <Route path="/feature" render={FeaturesBar} />
            </header>
        );
    }
}

AppHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);