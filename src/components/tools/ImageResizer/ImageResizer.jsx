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
import Clear from '@material-ui/icons/Clear';
import Search from '@material-ui/icons/Search';

import LinearProgress from '@material-ui/core/LinearProgress';

import EXAMPLE_DATA from './ImageResizer.data.json';

const styles = theme => ({
    root: {
        backgroundColor: '#f5f5f5',
    },
    media: {
        height: 120
    },
    button: {
        margin: theme.spacing.unit,
    },
    inputUpload: {
        display: 'none',
    },
    tabContainer: {
        padding: 12
    }
});

class ImageResizer extends React.Component {
    state = {
        activeTabIndex: 0,
        completed: 0,
        buffer: 80,
        images: EXAMPLE_DATA.images
    };
    
    handleTabChange = (event, activeTabIndex) => {
        this.setState({ activeTabIndex });
    };

    handleTabChangeIndex = index => {
        this.setState({ activeTabIndex: index });
    };

    render() {
        const { classes } = this.props;
        const { activeTabIndex } = this.state;
        
        return (
            <div className={classes.root}>
                <Tabs
                    value={activeTabIndex}
                    onChange={this.handleTabChange}
                    indicatorColor="primary"
                    textColor="primary">
                    <Tab label="Choose Meme" />
                    <Tab label="Upload Image" />
                </Tabs>
                <SwipeableViews index={activeTabIndex}
                                onChangeIndex={this.handleTabChangeIndex}>
                    <div className={classes.tabContainer}>
                        <Toolbar>
                            <Grid container>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={8}>
                                    <TextField
                                        id="outlined-search"
                                        label="Search memes"
                                        type="text"
                                        margin="normal"
                                        fullWidth
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: <Search />,
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="Toggle password visibility"
                                                        onClick={this.handleClickShowPassword}>
                                                        <Clear />
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }} />
                                </Grid>
                            </Grid>
                        </Toolbar>
                        <Grid container spacing={24}>
                            {this.state.images.map((image, index) => 
                                <Grid item xs={2} key={index}>
                                    <Card>
                                        <CardHeader title={image.title} />
                                        <CardMedia image={image.image} />
                                        <CardActions>
                                            <Button variant="outlined" fullWidth size="small">Add Caption</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )}
                        </Grid>
                    </div>
                    <div className={classes.tabContainer}>
                        <input
                            accept="image/*"
                            className={classes.inputUpload}
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <Button 
                                variant="contained"
                                size="large" 
                                color="secondary" 
                                component="span" 
                                className={classes.button}>
                            Choose Image
                            </Button>
                        </label>
                        <Typography variant="subtitle1">or, drop PDF files here</Typography>
                        <TextField
                            id="outlined-simple-start-adornment"
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
                        <LinearProgress 
                            color="secondary" 
                            variant="buffer" 
                            value={this.state.completed} 
                            valueBuffer={this.state.buffer} />
                    </div>
                </SwipeableViews>
            </div>
        );
    }
}

ImageResizer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageResizer);