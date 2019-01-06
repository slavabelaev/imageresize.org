import React from 'react';
import classNames from 'classnames';

import PropTypes from 'prop-types';
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
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './ImageManager.styles';
// DEMO DATA
import DEMO_IMAGES_DATA from '../../../assets/demo/data/images.json';

const TabContainer = ({ className, children }) => (
    <Typography className={className || ''} component="div">
        {children}
    </Typography>
);
  
TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class ImageManager extends React.Component {
    state = {
        labels: this.props.labels || {},
        images: DEMO_IMAGES_DATA || [],
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
        const { className, classes } = this.props;
        const { labels, activeTabIndex, searchQuery } = this.state;

        return (
            <div className={classNames(className, classes.root)}>
                <Tabs
                    className={classes.Tabs}
                    value={activeTabIndex}
                    onChange={this.handleTabChange}
                    indicatorColor="primary">
                    <Tab 
                        className={classes.Tab}
                        label={labels.chooseTab || 'Choose Image'} />
                    <Tab 
                        className={classes.Tab} 
                        label={labels.uploadTab || 'Upload Image'} />
                </Tabs>
                <SwipeableViews
                    animateHeight
                    className={classes.SwipeableViews} 
                    index={activeTabIndex}
                    onChangeIndex={this.handleTabSwipe}>
                    <TabContainer className={classes.TabContainer}>
                        <Toolbar className={classes.Toolbar}>
                            <TextField
                                id="search"
                                placeholder={labels.search || 'Search'}
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
                                                onClick={this.handleSearchQueryClear}>
                                                <ClearIcon fontSize="small" />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                value={searchQuery}
                                onChange={this.handleSearchQueryChange}
                            />
                        </Toolbar>
                        <div className={classes.gridContainer}>
                            <Grid container spacing={24}>
                                {this.state.images.map((image, index) => 
                                    <Grid item xs={2} key={index}>
                                        <Card className={classes.Card} elevation={0}>
                                            <CardHeader 
                                                className={classes.CardHeader}
                                                title={
                                                    <Typography component="h3" className={classes.CardHeader_title}>{image.title}</Typography>
                                                } />
                                            <CardMedia image={image.url} className={classes.CardMedia} />
                                            <CardActions>
                                                <Button 
                                                    className={classes.Button_addCaption} 
                                                    variant="outlined" 
                                                    fullWidth 
                                                    size="small"
                                                    onClick={this.handleSelect}
                                                >{labels.selectButton || 'Select'}</Button>
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
                        <div className={classes.tabContent}>
                            <input
                                accept="image/*"
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
                                    <AddPhotoAlternateIcon className={classes.Icon} /> 
                                    Choose Image
                                </Button>
                            </label>
                            <Typography className={classes.Typography_uploadFile} variant="body1">or, drop Image here</Typography>
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
                                }} />
                            <Typography className={classes.uploadingContainer} component="div">
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
                            </Typography>
                        </div>
                    </TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

ImageManager.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageManager);