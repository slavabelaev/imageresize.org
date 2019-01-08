import React from 'react';
import classNames from 'classnames';

import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
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

import MessageStack from '../../common/MessageStack/MessageStack';
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
        files: this.props.files || [],

        url: '',
        activeTabIndex: 0,
        errorMessages: []
    };
    
    handleTabChange = (event, activeTabIndex) => {
        this.setState({ activeTabIndex });
    };

    handleTabSwipe = activeTabIndex => {
        this.setState({ activeTabIndex });
    };

    handleFileDownload = (event) => {
        event.preventDefault();
        const url = this.state.url;
    }

    handleUrlChange = (event) => {
        this.setState({ url: event.target.value });
    }
    
    handleUploadCancel = () => {}

    handleDrop = (acceptedFiles, rejectedFiles) => {
        const files = [...acceptedFiles, ...this.state.files];
        this.setState({ files });

        // Add Error Messages
        if (rejectedFiles.length > 0) {
            const errorMessages = this.state.errorMessages;
            rejectedFiles.map((rejectedFile) => {
                errorMessages.push({
                    variant: 'error',
                    text: rejectedFile.name + ' — This file is not allowed.'
                });
            });
        }

        this.props.onChange(files);
    }

    render() {
        const { props, state } = this;
        const { className, classes } = props;
        const labels = props.labels || {};
        const { activeTabIndex } = state;

        return (
            <div className={classNames(className, classes.root)}>
                <MessageStack
                    className={classes.MessageStack} 
                    messages={state.errorMessages} 
                />

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
                    onDrop={this.handleDrop}
                >
                {({getRootProps, getInputProps, isDragActive}) => 
                    <SwipeableViews
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
                                        {...getRootProps()}
                                        variant="contained"
                                        size="large" 
                                        color="secondary" 
                                        component="span" 
                                        className={classes.Button}
                                    >
                                        <AttachFileIcon className={classes.Icon} /> 
                                        {labels.selectFiles || 'Select Files'}
                                    </Button>
                                </label>
                                <Typography 
                                    className={classes.Typography_uploadFile} 
                                    variant="body1">
                                {labels.dropFiles || 'or, drop Files here'}
                                </Typography>
                        </div> 
                        </TabContainer>
                        <TabContainer className={classes.TabContainer}>
                            <form 
                                className={classes.tabContent} 
                                onSubmit={this.handleFileDownload}>
                                <TextField
                                    className={classes.TextField}
                                    id="file-url"
                                    variant="outlined"
                                    fullWidth
                                    placeholder="http://"
                                    type="url"
                                    value={state.url}
                                    onChange={this.handleUrlChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Button
                                                    disabled={!state.url}
                                                    type="submit"
                                                    variant="contained"
                                                    size="large"
                                                    color="secondary"
                                                >Go</Button>
                                            </InputAdornment>
                                        )
                                    }} 
                                />
                            </form>
                        </TabContainer>
                    </SwipeableViews>
                }
                </Dropzone>

                <List className={classes.List_file}>
                    {state.files.map((file, index) => 
                    <ListItem className={classes.ListItem_file} key={index}>
                        <ListItemIcon>
                            <AppIcon icon={getIconNameByFileType(file.type)} />
                        </ListItemIcon>
                        <ListItemText
                            primary={file.name}
                        />
                        <ListItemSecondaryAction className={classes.ListItemSecondaryAction_file}>
                            {file.uploaded === true ? (
                                <IconButton aria-label="Delete">
                                    <DeleteIcon />
                                </IconButton>
                            ) : (
                                <React.Fragment>
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
                                </React.Fragment>
                            )}
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