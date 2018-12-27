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
// Routes
import routes from '../../../App.routes';

class AppHeader extends React.Component {
    
    getActiveTabValue = (location, route) => (
        (location.pathname === route.path) ? 
            (route.children && route.children[0]) ? 
            (route.path + '/' + route.children[0].path) : 
            location.pathname : 
        location.pathname
    );

    render() {
        const props = this.props;
        const { classes } = this.props;

        return (
            <header className={`${props.className || ''} ${classes.root}`}>
                <Toolbar className={classes.Toolbar}>
                    <AppLogo />
                    <MenuList 
                        className={classes.MenuList}
                        component="nav" 
                        disablePadding
                    >
                        {routes.map((route, index) => !route.showInMenu ? null :
                            <MenuItem 
                                key={index}
                                className={classes.MenuItem}
                                activeClassName={classes.MenuItem_selected}
                                component={NavLink}
                                to={route.path}
                            >
                                <AppIcon 
                                    className={classes.AppIcon} 
                                    icon={route.icon} 
                                />
                                {route.title}
                            </MenuItem>
                        )}
                    </MenuList>
                </Toolbar>

                {routes.map((route, index) => !route.showInMenu ? null :
                    <Route 
                        key={index}
                        path={route.path}
                        render={(props) =>
                            <AppBar 
                                className={classes.AppBar} 
                                component="div"
                                elevation={0} 
                                position="static" 
                                color="default"
                            >
                                <Tabs
                                    className={classes.Tabs}
                                    value={this.getActiveTabValue(props.location, route)}
                                    onChange={this.handleTabChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    centered
                                >
                                    {route.children.map((routeChild, index) => 
                                        <Tab 
                                            key={index}
                                            className={classes.Tab} 
                                            component={NavLink} 
                                            to={route.path + '/' + routeChild.path}
                                            value={route.path + '/' + routeChild.path}
                                            label={routeChild.title}
                                        />
                                    )}
                                </Tabs>
                            </AppBar>
                        }
                    />
                )}
            </header>
        );
    }
}

AppHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);