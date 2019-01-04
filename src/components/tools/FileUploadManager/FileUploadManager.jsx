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
import styles from './FileUploadManager.styles';

const TabContainer = ({ className, children }) => (
    <Typography className={className || ''} component="div">
        {children}
    </Typography>
);
  
TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class FileUploadManager extends React.Component {
    state = {
        maxFiles: this.props.maxFiles || 1,
        maxFileSize: this.props.maxFileSize || 5120,
        accept: this.props.accept || 'image/*',

        labels: this.props.labels || {},
        activeTabIndex: 0
    };
    
    handleTabChange = (event, activeTabIndex) => {
        this.setState({ activeTabIndex });
    };

    handleTabSwipe = activeTabIndex => {
        this.setState({ activeTabIndex });
    };

    handleSelectFromDevice = () => {}

    handleSelectFromUrl = () => {}

    handleUpload = () => {}
    
    handleUploadCancel = () => {}

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
                        label={labels.chooseTab || 'Computer'} />
                    <Tab 
                        className={classes.Tab} 
                        label={labels.uploadTab || 'URL'} />
                    <Typography component="div" className={classes.uploadInfo}>
                        {state.maxFiles > 1 ? 'Up to 20 files, ' : null} 
                        {`Max ${state.maxFileSize / 1024}MB`}
                        {state.maxFiles > 1 ? ' each' : null}
                    </Typography>
                </Tabs>
                <SwipeableViews
                    animateHeight
                    className={classes.SwipeableViews} 
                    index={activeTabIndex}
                    onChangeIndex={this.handleTabSwipe}>
                    <TabContainer className={classes.TabContainer}>
                        <div className={classes.tabContent}>
                            <input
                                accept={state.accept}
                                className={classes.input_uploadFile}
                                id="upload-file"
                                multiple
                                type="file"
                                onChange={this.handleSelectFromDevice}
                            />
                            <label htmlFor="upload-file">
                                <Button 
                                    variant="contained"
                                    size="large" 
                                    color="secondary" 
                                    component="span" 
                                    className={classes.Button}
                                >
                                    <AttachFileIcon className={classes.Icon} /> 
                                    Choose Files
                                </Button>
                            </label>
                            <Typography className={classes.Typography_uploadFile} variant="body1">or, drop Files here</Typography>
                       </div> 
                    </TabContainer>
                    <TabContainer className={classes.TabContainer}>
                        <div className={classes.tabContent}>
                            <TextField
                                className={classes.TextField}
                                id="file-url"
                                variant="outlined"
                                fullWidth
                                placeholder="http://"
                                type="url"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Button
                                                variant="contained"
                                                size="large"
                                                color="secondary"
                                                onClick={this.handleSelectFromUrl}
                                            >Go</Button>
                                        </InputAdornment>
                                    )
                                }} 
                            />
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

                <List>
                    <ListItem className={classes.ListItem_file}>
                        <ListItemIcon>
                            <AppIcon icon="pdf" />
                        </ListItemIcon>
                        <ListItemText
                            primary="ITRE_conference-A4-format.pdf"
                        />
                        <ListItemSecondaryAction className={classes.ListItemSecondaryAction_file}>
                            <IconButton aria-label="Delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem className={classes.ListItem_file}>
                        <ListItemIcon>
                            <AppIcon icon="pdf" />
                        </ListItemIcon>
                        <ListItemText
                            primary="ITRE_conference-A4-format.pdf"
                        />
                        <ListItemSecondaryAction className={classes.ListItemSecondaryAction_file}>
                            <LinearProgress 
                                className={classes.LinearProgress_file}
                                color="secondary" 
                                variant="determinate" 
                                value={80} />
                            <IconButton
                                aria-label="Remove uploading"
                                onClick={this.handleUploadCancel}>
                                <ClearIcon fontSize="small" />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem className={classes.ListItem_file}>
                        <ListItemIcon>
                            <AppIcon icon="pdf" />
                        </ListItemIcon>
                        <ListItemText
                            primary="ITRE_conference-A4-format.pdf"
                        />
                        <ListItemSecondaryAction className={classes.ListItemSecondaryAction_file}>
                            <LinearProgress 
                                className={classes.LinearProgress_file}
                                color="secondary" 
                                variant="determinate" 
                                value={0} />
                            <IconButton
                                aria-label="Remove uploading"
                                onClick={this.handleUploadCancel}>
                                <ClearIcon fontSize="small" />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </div>
        );
    }
}

FileUploadManager.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FileUploadManager);