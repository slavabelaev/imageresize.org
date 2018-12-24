import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Link } from 'react-router-dom';

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
    menuList: {
        display: 'flex',
        marginLeft: 'auto'
    },
    appIcon: {
        marginRight: 12
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
        const { classes } = this.props;

        return (
            <Router>
                <React.Fragment>
                    <Toolbar>
                        <AppLogo></AppLogo>
                        <MenuList component="nav" disablePadding className={classes.menuList}>
                            <MenuItem component={Link} to="/">
                                <AppIcon icon="image" className={classes.appIcon}></AppIcon>
                                <Typography variant="button">Image Tools</Typography>
                            </MenuItem>
                            <MenuItem component={Link} to="/pdf-tools">
                                <AppIcon icon="pdf" className={classes.appIcon}></AppIcon>
                                <Typography variant="button">PDF Tools</Typography>
                            </MenuItem>
                            <MenuItem component={Link} to="/convert-tools">
                                <AppIcon icon="converter" className={classes.appIcon}></AppIcon>
                                <Typography variant="button">Convert Tools</Typography>
                            </MenuItem>
                            <MenuItem component={Link} to="/features">
                                <AppIcon icon="features" className={classes.appIcon}></AppIcon>
                                <Typography variant="button">Features</Typography>
                            </MenuItem>
                        </MenuList>
                    </Toolbar>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={this.state.activeTabIndex}
                            onChange={this.handleTabChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered>
                            <Tab component={Link} to="/image-resize" label="Image Resize" />
                            <Tab component={Link} to="/bulk-resize" label="Bulk Resize" />
                            <Tab component={Link} to="/compress-images" label="Compress Images" />
                            <Tab component={Link} to="/features" label="Features" />
                        </Tabs>
                    </AppBar>
                </React.Fragment>
            </Router>
        );
    }
}

AppHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);