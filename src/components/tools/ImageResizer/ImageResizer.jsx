import React, { Component } from 'react';
import './ImageResizer.scss';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

class ImageResizer extends Component {
    state = {
        value: 0,
        images: [
            { title: 'Business Travel With The Wife', image: 'https://picsum.photos/240/240/?random' },
            { title: 'Coventry City Guide Including Coventry Hotels', image: 'https://picsum.photos/240/240/?random' },
            { title: 'How To Fly A Private Jet On Your Next Trip', image: 'https://picsum.photos/240/240/?random' },
            { title: 'Get Around Easily With A New York Limousine Service', image: 'https://picsum.photos/240/240/?random' },
            { title: 'Tremblant In Canada', image: 'https://picsum.photos/240/240/?random' },
            { title: 'Cdc Issues Health Alert Notice For Travelers To Usa From Hon', image: 'https://picsum.photos/240/240/?random' },
            { title: 'Beautiful Kitechen decoration', image: 'https://picsum.photos/240/240/?random' },
            { title: 'The Amazing Hubble', image: 'https://picsum.photos/240/240/?random' },
            { title: 'Advertising Relationships Vs Business Decisions', image: 'https://picsum.photos/240/240/?random' },
            { title: 'Bed room decorations', image: 'https://picsum.photos/240/240/?random' },
            { title: 'Asteroids', image: 'https://picsum.photos/240/240/?random' },
            { title: 'The Amazing Hubble', image: 'https://picsum.photos/240/240/?random' },
            { title: 'Lost In Lagos Portugal', image: 'https://picsum.photos/240/240/?random' },
            { title: 'The Surprising Popularity Of Cigar Smoking', image: 'https://picsum.photos/240/240/?random' },
            { title: 'Lost In Lagos Portugal', image: 'https://picsum.photos/240/240/?random' },
            { title: 'Cruising Destination Ideas', image: 'https://picsum.photos/240/240/?random' },
            { title: 'From Wetlands To Canals And Dams Amsterdam Is Alive', image: 'https://picsum.photos/240/240/?random' },
            { title: 'Vacation Home Rental Success', image: 'https://picsum.photos/240/240/?random' }
        ]
    };
    
    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() { 
        const { classes, theme } = this.props;
        const images = this.state.images;

        return (
            <div className="ImageResizer">
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary">
                    <Tab label="Choose Meme" />
                    <Tab label="Upload Image" />
                </Tabs>
                <SwipeableViews component={Paper} index={this.state.value}
                                onChangeIndex={this.handleChangeIndex}>
                    <Paper elevation={1}>
                        <AppBar position="static" 
                                color="default">
                            <Grid container>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={8}>
                                    <TextField
                                        id="outlined-search"
                                        label="Search memes"
                                        type="search"
                                        margin="normal"
                                        fullWidth
                                        variant="outlined" />
                                </Grid>
                            </Grid>
                        </AppBar>
                        <Grid container spacing={24}>
                            {images.map((imageItem) => 
                                <Grid item xs={2}>
                                    <Card>
                                        <CardHeader title="Business Travel With The Wife"></CardHeader>
                                        <CardMedia
                                            image={imageItem.image}
                                            title={imageItem.title} />
                                        <CardActions>
                                            <Button variant="outlined" fullWidth size="small">Add Caption</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )}
                        </Grid>
                    </Paper>
                    <Paper elevation={1}>Upload Image</Paper>
                </SwipeableViews>
            </div>
        );
    }
}
 
export default ImageResizer;