import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import LinearProgress from '@material-ui/core/LinearProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import AppIcon from '../../common/AppIcon/AppIcon';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './SplitManager.styles';

const TabContainer = ({ className, children }) => (
    <Typography className={className || ''} component="div">
        {children}
    </Typography>
);
  
TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class SplitManager extends React.Component {
    state = {
        labels: this.props.labels || {},
        activeTabIndex: 0,
        searchQuery: ''
    };
    
    handleTabChange = (event, activeTabIndex) => {
        this.setState({ activeTabIndex });
    };

    handleTabSwipe = activeTabIndex => {
        this.setState({ activeTabIndex });
    };

    handleSelect = () => {}

    handleSelectFromDevice = () => {}

    handleSelectFromUrl = () => {}

    handleUpload = () => {}
    
    handleUploadCancel = () => {}

    handleSearchQueryChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    }

    handleSearchQueryClear = () => {
        this.setState({ searchQuery: '' });
    }

    render() {
        const { props, state } = this;
        const { className, classes } = props;
        const { labels, activeTabIndex, searchQuery } = state;

        return (
            <div className={`${className || ''} ${classes.root}`}>
                <Tabs
                    className={classes.Tabs}
                    value={activeTabIndex}
                    onChange={this.handleTabChange}
                    indicatorColor="primary">
                    <Tab 
                        className={classes.Tab}
                        label={labels.chooseTab || 'Split PDF by Range'} />
                    <Tab 
                        className={classes.Tab} 
                        label={labels.uploadTab || 'Extract all pages'} />
                </Tabs>
                <SwipeableViews
                    animateHeight
                    className={classes.SwipeableViews} 
                    index={activeTabIndex}
                    onChangeIndex={this.handleTabSwipe}>
                    <TabContainer className={classes.TabContainer}>
                        <div className={classes.uploadFileContainer}>
                            11111111
                       </div> 
                    </TabContainer>
                    <TabContainer className={classes.TabContainer}>
                        <div className={classes.uploadFileContainer}>
                            2222
                        </div>
                    </TabContainer>
                </SwipeableViews>

                <div className={classes.uploadingContainer}>
                    <LinearProgress 
                        className={classes.LinearProgress}
                        color="secondary" 
                        variant="determinate" 
                        value={80} />
                    <IconButton
                        aria-label="Remove uploading"
                        onClick={this.handleUploadCancel}>
                        <ClearIcon fontSize="small" />
                    </IconButton>
                </div>
            </div>
        );
    }
}

SplitManager.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SplitManager);