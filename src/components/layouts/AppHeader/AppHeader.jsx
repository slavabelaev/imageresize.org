import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import AppLogo from '../AppLogo/AppLogo';
import AppIcon from '../AppIcon/AppIcon';

const styles = theme => ({
    Toolbar: {
        marginBottom: -1,
        paddingRight: 0
    },
    MenuList: {
        display: 'flex',
        marginLeft: 'auto'
    },
    MenuItem: {
        borderStyle: 'solid',
        borderLeftWidth: 1,
        borderColor: theme.palette.divider,
        color: theme.palette.grey[600],
        textTransform: 'uppercase',
        '&>i': {
            opacity: .36
        },
        '&:hover>i': {
            opacity: .64
        },
        '&:hover': {
            color: theme.palette.action.active,
            backgroundColor: 'initial'
        },
        [theme.breakpoints.up('lg')]: {
            padding: theme.spacing.unit * 3
        }
    },
    MenuItem_selected: {
        backgroundColor: theme.palette.grey[50],
        color: theme.palette.action.active,
        marginBottom: -1,
        '&>i': {
            opacity: .64
        },
        '&:hover': {
            backgroundColor: theme.palette.grey[50]
        }
    },
    AppIcon: {
        marginRight: 12
    },
    AppBar: {
        borderColor: theme.palette.divider,
        backgroundColor: theme.palette.grey[50],
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0
    },
    Tab: {
        textTransform: 'initial',
        fontSize: theme.typography.fontSize,
        fontSize: '1rem',
        fontWeight: 'initial',
        [theme.breakpoints.up('lg')]: {
            minHeight: 70
        }
    }
});

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
                        <MenuList component="nav" disablePadding className={classes.MenuList}>
                            <MenuItem 
                                className={classes.MenuItem}
                                component={NavLink} 
                                activeClassName={classes.MenuItem_selected} 
                                exact={true}
                                to="/">
                                <AppIcon icon="image" className={classes.AppIcon}></AppIcon>
                                Image Tools
                            </MenuItem>
                            <MenuItem 
                                className={classes.MenuItem}
                                component={NavLink} 
                                activeClassName={classes.MenuItem_selected} 
                                to="/pdf-tools">
                                <AppIcon icon="pdf" className={classes.AppIcon}></AppIcon>
                                PDF Tools
                            </MenuItem>
                            <MenuItem 
                                className={classes.MenuItem}
                                component={NavLink} 
                                activeClassName={classes.MenuItem_selected} 
                                to="/convert-tools">
                                <AppIcon icon="converter" className={classes.AppIcon}></AppIcon>
                                Convert Tools
                            </MenuItem>
                            <MenuItem 
                                className={classes.MenuItem}
                                component={NavLink} 
                                activeClassName={classes.MenuItem_selected} 
                                to="/features">
                                <AppIcon icon="features" className={classes.AppIcon}></AppIcon>
                                Features
                            </MenuItem>
                        </MenuList>
                    </Toolbar>
                    <AppBar 
                        className={classes.AppBar} 
                        elevation={0} 
                        position="static" 
                        color="default">
                        <Tabs
                            className={classes.Tabs}
                            value={this.state.activeTabIndex}
                            onChange={this.handleTabChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered>
                            <Tab className={classes.Tab} component={NavLink} to="/image-resize" label="Image Resize" />
                            <Tab className={classes.Tab} component={NavLink} to="/bulk-resize" label="Bulk Resize" />
                            <Tab className={classes.Tab} component={NavLink} to="/compress-images" label="Compress Images" />
                            <Tab className={classes.Tab} component={NavLink} to="/features" label="Features" />
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