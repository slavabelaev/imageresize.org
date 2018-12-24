import './AppHeader.scss';

import React, { Component } from 'react';
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

class AppHeader extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        return (
            <Router>
                <React.Fragment>
                    <Toolbar className="AppHeader__Toolbar">
                        <AppLogo className="AppHeader__AppLogo"></AppLogo>
                        <MenuList component="nav" disablePadding className="AppHeader__MenuList">
                            <MenuItem component={Link} 
                                      to="/"
                                      className="AppHeader__MenuItem">
                                <AppIcon icon="image" 
                                         className="AppHeader__AppIcon"></AppIcon>
                                <Typography variant="span">Image Tools</Typography>
                            </MenuItem>
                            <MenuItem component={Link}
                                      to="/pdf-tools" 
                                      className="AppHeader__MenuItem">
                                <AppIcon icon="pdf" 
                                         className="AppHeader__AppIcon"></AppIcon>
                                <Typography variant="span">PDF Tools</Typography>
                            </MenuItem>
                            <MenuItem component={Link} 
                                      to="/convert-tools" 
                                      className="AppHeader__MenuItem">
                                <AppIcon icon="pdf" 
                                         className="AppHeader__AppIcon"></AppIcon>
                                <Typography variant="span">Convert Tools</Typography>
                            </MenuItem>
                            <MenuItem component={Link} 
                                      to="/features" 
                                      className="AppHeader__MenuItem">
                                <AppIcon icon="pdf" 
                                         className="AppHeader__AppIcon"></AppIcon>
                                <Typography variant="span">Features</Typography>
                            </MenuItem>
                        </MenuList>
                    </Toolbar>
                    <AppBar position="static" 
                            color="default" 
                            className="AppHeader">
                        <Tabs className="AppHeader__Tabs"
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered>
                            <Tab component={Link} 
                                to="/image-resize" 
                                label="Image Resize" />
                            <Tab component={Link} 
                                to="/bulk-resize" 
                                label="Bulk Resize" />
                            <Tab component={Link} 
                                to="/compress-images" 
                                label="Compress Images" />
                            <Tab component={Link} 
                                to="/features" 
                                label="Features" />
                        </Tabs>
                    </AppBar>
                </React.Fragment>
            </Router>
        );
    }
}
 
export default AppHeader;