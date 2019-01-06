import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
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
import ErrorIcon from '@material-ui/icons/Error';
import AppIcon from '../../common/AppIcon/AppIcon';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './FileUploadManager.styles';

const getIconNameByFileType = (type) => {
    return (type.indexOf('image') > -1) ? 'image' : (type.indexOf('pdf') > -1) ? 'pdf' : 'file';
}

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
        activeTabIndex: 0,
        acceptedFiles: [],
        rejectedFiles: [],

        messages: []
    };
    
    handleTabChange = (event, activeTabIndex) => {
        this.setState({ activeTabIndex });
    };

    handleTabSwipe = activeTabIndex => {
        this.setState({ activeTabIndex });
    };

    handleSelectFromUrl = () => {}

    handleUpload = () => {}
    
    handleUploadCancel = () => {}

    handleDrop = (selectedAcceptedFiles, selectedRejectedFiles) => {
        const acceptedFiles = [...selectedAcceptedFiles, ...this.state.acceptedFiles];
        const rejectedFiles = [...selectedRejectedFiles, ...this.state.rejectedFiles];
        this.setState({ acceptedFiles });
        this.setState({ rejectedFiles });

        // Add Error Messages
        if (rejectedFiles.length > 0) {
            const messages = this.state.messages;
            rejectedFiles.map((rejectedFile, index) => {
                messages.push({ 
                    variant: 'error',
                    isOpen: true, 
                    text: rejectedFile.name + ' — This file is not allowed.' 
                });
            });
        }
    }

    handleCloseMessage = (index) => {
        const messages = this.state.messages;
        messages[index].isOpen = false;
        this.setState({ messages });
    }

    render() {
        const { props, state } = this;
        const { className, classes } = props;
        const { labels, activeTabIndex } = state;

        return (
            <div className={`${className || ''} ${classes.root}`}>

                {state.messages.map((message, index) =>
                <Snackbar
                    className={classes.Snackbar_error}
                    open={message.isOpen}
                    key={index}
                >
                    <SnackbarContent
                        className={classes.SnackbarContent_error}
                        message={
                            <div className={classes.messageContent_error}>
                                <ErrorIcon className={classes.Icon_error} />
                                <span>{message.text}</span>
                                <IconButton 
                                    className={classes.IconButton_removeMessage}
                                    onClick={() => this.handleCloseMessage(index)}
                                >
                                    <ClearIcon fontSize="small" />
                                </IconButton>
                            </div>
                        }>
                    </SnackbarContent>
                </Snackbar>
                )}


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
                <Dropzone 
                    accept={state.accept} 
                    disableClick
                    onDrop={this.handleDrop}
                >
                {({getRootProps, getInputProps, isDragActive}) => 
                    <SwipeableViews
                        {...getRootProps()}
                        animateHeight
                        className={classes.SwipeableViews + ' ' + (isDragActive ? classes.dropzone_isActive : null)} 
                        index={activeTabIndex}
                        onChangeIndex={this.handleTabSwipe}>
                        <TabContainer className={classes.TabContainer}>
                            <div className={classes.tabContent}>
                                <input
                                    {...getInputProps()}
                                    className={classes.input_uploadFile}
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
                }
                </Dropzone>
                
                {state.acceptedFiles.length ? (
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
                ) : null}

                {/* Example List */}
                <List className={classes.List_file}>
                    <ListItem className={classes.ListItem_file}>
                        <ListItemIcon>
                            <AppIcon icon="pdf" />
                        </ListItemIcon>
                        <ListItemText
                            primary="example_file_state_loaded.pdf"
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
                            primary="example_file_state_loading.pdf"
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
                            primary="example_file_state_selected.pdf"
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
                {/* /Example List */}

                <List className={classes.List_file}>
                    {state.acceptedFiles.map((acceptedFile, index) => 
                    <ListItem className={classes.ListItem_file} key={index}>
                        <ListItemIcon>
                            <AppIcon icon={getIconNameByFileType(acceptedFile.type)} />
                        </ListItemIcon>
                        <ListItemText
                            primary={acceptedFile.name}
                        />
                        <ListItemSecondaryAction className={classes.ListItemSecondaryAction_file}>
                            <LinearProgress 
                                className={classes.LinearProgress_file}
                                color="secondary" 
                                variant="determinate" 
                                value={0}
                            />
                            <IconButton
                                aria-label="Remove uploading"
                                onClick={this.handleUploadCancel}>
                                <ClearIcon fontSize="small" />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    )}
                </List>
            </div>
        );
    }
}

FileUploadManager.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FileUploadManager);