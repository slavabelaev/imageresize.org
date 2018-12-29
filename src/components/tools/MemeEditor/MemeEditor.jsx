import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
// Styles
import styles from './MemeEditor.styles';
// DEMO DATA
import DEMO_DATA from '../../../demo/data/images.json';

const TabContainer = ({ className, children }) => (
    <Typography className={className || ''} component="div">
        {children}
    </Typography>
);
  
TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const EditCaptionDialog = ({ open, onClose }) => (
    <Dialog
        onClose={onClose}
        aria-labelledby="Edit Caption Dialog"
        open={open}
    >
        <DialogTitle 
            id="edit-caption-dialog-title" 
            onClose={onClose}>
            Edit Text
        </DialogTitle>
        <DialogContent>
            <Typography gutterBottom>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                at eros.
            </Typography>
            <Typography gutterBottom>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                lacus vel augue laoreet rutrum faucibus dolor auctor.
            </Typography>
            <Typography gutterBottom>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                auctor fringilla.
            </Typography>
        </DialogContent>
        <DialogActions>
            <Button 
                onClick={onClose} 
                color="primary">
                Save changes
            </Button>
        </DialogActions>
    </Dialog>
)

class MemeEditor extends React.Component {
    state = {
        activeTabIndex: 0,
        uploadingProgressCompleted: 0,
        uploadingProgressBuffer: 80,
        isEditCaptionDialogOpen: false, 
        images: DEMO_DATA.images
    };
    
    changeActiveTabIndexOnClick = (event, activeTabIndex) => {
        this.setState({ activeTabIndex });
    };

    changeActiveTabIndex = activeTabIndex => {
        this.setState({ activeTabIndex });
    };

    cancelUpload = () => {};

    editCaptionDialogOpen = () => {
        this.setState({ isEditCaptionDialogOpen: true });
    };

    editCaptionDialogClose = () => {
        this.setState({ isEditCaptionDialogOpen: false });
    };

    render() {
        const { className, classes } = this.props;
        const { activeTabIndex, isEditCaptionDialogOpen } = this.state;

        return (
            <Typography component="div" className={`${className || ''} ${classes.root}`}>
                <EditCaptionDialog 
                    open={isEditCaptionDialogOpen} 
                    onClose={this.editCaptionDialogClose} 
                />
                <Tabs
                    className={classes.Tabs}
                    value={activeTabIndex}
                    onChange={this.changeActiveTabIndexOnClick}
                    indicatorColor="primary">
                    <Tab 
                        className={classes.Tab}
                        label="Choose Meme" />
                    <Tab 
                        className={classes.Tab} 
                        label="Upload Image" />
                </Tabs>
                <SwipeableViews
                    animateHeight
                    className={classes.SwipeableViews} 
                    index={activeTabIndex}
                    onChangeIndex={this.changeActiveTabIndex}>
                    <TabContainer className={classes.TabContainer}>
                        <Toolbar className={classes.Toolbar}>
                            <TextField
                                id="search"
                                placeholder="Search memes"
                                type="text"
                                margin="normal"
                                fullWidth
                                variant="outlined"
                                className={classes.TextField}
                                InputProps={{
                                    startAdornment: <SearchIcon className={classes.Icon} />,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="Clear Search String"
                                                onClick={this.handleClearSearch}>
                                                <ClearIcon fontSize="small" />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }} />
                        </Toolbar>
                        <div className={classes.gridContainer}>
                            <Grid container spacing={24}>
                                {this.state.images.map((image, index) => 
                                    <Grid item xs={2} key={index}>
                                        <Card className={classes.Card} elevation={0}>
                                            <CardHeader 
                                                className={classes.CardHeader}
                                                title={
                                                    <Typography className={classes.CardHeader_title}>{image.title}</Typography>
                                                } />
                                            <CardMedia image={image.image} className={classes.CardMedia} />
                                            <CardActions>
                                                <Button 
                                                    className={classes.Button_addCaption} 
                                                    variant="outlined" 
                                                    fullWidth 
                                                    size="small"
                                                    onClick={this.editCaptionDialogOpen}
                                                >Add Caption</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )}
                            </Grid>
                            <div className={classes.progressContainer}>
                                <CircularProgress />
                            </div>
                        </div>
                    </TabContainer>
                    <TabContainer className={classes.TabContainer}>
                        <Typography className={classes.uploadFileContainer} component="div">
                            <input
                                accept="image/*"
                                className={classes.input_uploadFile}
                                id="upload-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="upload-file">
                                <Button 
                                    variant="contained"
                                    size="large" 
                                    color="secondary" 
                                    component="span" 
                                    className={classes.Button}>
                                    <AddPhotoAlternateIcon className={classes.Icon} /> 
                                    Choose Image
                                </Button>
                            </label>
                            <Typography className={classes.Typography_uploadFile} variant="subtitle1">or, drop Image here</Typography>
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
                                                color="secondary">Go</Button>
                                        </InputAdornment>
                                    )
                                }} />
                            <Typography className={classes.uploadingContainer} component="div">
                                <LinearProgress 
                                    className={classes.LinearProgress}
                                    color="secondary" 
                                    variant="buffer" 
                                    value={this.state.uploadingProgressCompleted} 
                                    valueBuffer={this.state.uploadingProgressBuffer} />
                                <IconButton
                                    aria-label="Remove uploading"
                                    onClick={this.cancelUpload}>
                                    <ClearIcon fontSize="small" />
                                </IconButton>
                            </Typography>
                        </Typography>
                    </TabContainer>
                </SwipeableViews>
            </Typography>
        );
    }
}

MemeEditor.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MemeEditor);