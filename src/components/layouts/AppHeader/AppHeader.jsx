import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import AppLogo from '../AppLogo/AppLogo';
import AppIcon from '../AppIcon/AppIcon';
//Styles
import styles from './AppHeader.styles';

class AppHeader extends React.Component {
    state = {
        activeTabIndex: 0,
    };

    handleTabChange = (event, activeTabIndex) => {
        this.setState({ activeTabIndex });
    };

    render() {
        const props = this.props;
        const { classes } = this.props;

        return (
            <Router>
                <div className={`${props.className || ''} ${classes.root}`}>
                    <Toolbar className={classes.Toolbar}>
                        <AppLogo></AppLogo>
                        <MenuList 
                            className={classes.MenuList}
                            component="nav" 
                            disablePadding
                        >
                            <MenuItem 
                                className={classes.MenuItem}
                                activeClassName={classes.MenuItem_selected}
                                component={NavLink}  
                                exact={true}
                                to="/image/"
                            >
                                <AppIcon className={classes.AppIcon} icon="image"></AppIcon>
                                Image Tools
                            </MenuItem>
                            <MenuItem 
                                className={classes.MenuItem}
                                activeClassName={classes.MenuItem_selected} 
                                component={NavLink} 
                                to="/pdf/"
                            >
                                <AppIcon className={classes.AppIcon} icon="pdf"></AppIcon>
                                PDF Tools
                            </MenuItem>
                            <MenuItem 
                                className={classes.MenuItem}
                                activeClassName={classes.MenuItem_selected} 
                                component={NavLink} 
                                to="/convert/"
                            >
                                <AppIcon className={classes.AppIcon} icon="converter"></AppIcon>
                                Convert Tools
                            </MenuItem>
                            <MenuItem 
                                className={classes.MenuItem}
                                activeClassName={classes.MenuItem_selected} 
                                component={NavLink} 
                                to="/features/"
                            >
                                <AppIcon className={classes.AppIcon} icon="features"></AppIcon>
                                Features
                            </MenuItem>
                        </MenuList>
                    </Toolbar>
                    <AppBar 
                        className={classes.AppBar} 
                        elevation={0} 
                        position="static" 
                        color="default"
                    >
                        <Tabs
                            className={classes.Tabs}
                            value={this.state.activeTabIndex}
                            onChange={this.handleTabChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab 
                                className={classes.Tab} 
                                component={NavLink} 
                                to="/image/resize" 
                                label="Image Resize" 
                            />
                            <Tab 
                                className={classes.Tab} 
                                component={NavLink} 
                                to="/image/bulk-resize" 
                                label="Bulk Resize" 
                            />
                            <Tab 
                                className={classes.Tab} 
                                component={NavLink} 
                                to="/image/compress" 
                                label="Compress Images" 
                            />
                            <Tab 
                                className={classes.Tab} 
                                component={NavLink} 
                                to="/image/features" 
                                label="Features" 
                            />
                        </Tabs>
                    </AppBar>
                </div>
            </Router>
        );
    }
}

AppHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);