import React from 'react';
import classNames from 'classnames';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './FeatureEditingPage.styles';

const FeatureEditingPage = ({ className, classes }) => (
    <div className={classNames(className, classes.root)}>
        <header className={classes.header}>
            <Typography variant="h1" gutterBottom>A Simple Image Editor Without Complexity</Typography>
            <Typography variant="body1">Add filters, crop, resize, or flip & rotate your images with ease</Typography>
            <Button  
                component={NavLink}
                to="/image/resize"
                className={classes.Button_getStarted}
                variant="contained" 
                color="secondary"
                size="large"
            >Get Started</Button>
        </header>
        <Divider />
        <Grid className={classes.Grid_container} container spacing={40}>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h2" gutterBottom>Apply photo filters with ease</Typography>
                <Typography variant="body1">Sometimes your photos need an extra boost to bring out the colors and add that wow factor. Our photo editor allows you to add a variety of preconfigured filters to bring out the best in your photos.</Typography>
                <Typography variant="body1">Whether you are looking to give your photo a Retro or a Light leak look, we have got your covered with more than 15 photo filters.</Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <img src="https://cdn.imageresize.org/static/media/photo-editor-page-1.1b38d2b7.jpg" width="100%" alt="" />
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <img src="https://cdn.imageresize.org/static/media/photo-editor-page-2.b31f344d.jpg" width="100%" alt="" />
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h2" gutterBottom>Adjust your photo parameters</Typography>
                <Typography variant="body1">No matter how advanced your camera is, sometimes your photos still need a post-processing boost to bring out the details of the photo. You can use the Image Editor to adjust things like Brightness, Contrast, and saturation of your photos.</Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h2" gutterBottom>Crop, flip, or rotate images</Typography>
                <Typography variant="body1">Sometimes your photo compositions don’t come out the way you want them. Our Image Editor let you get rid of unwanted areas in your photos using the Photo Cropper.</Typography>
                <Typography variant="body1">Whether you are looking to give your photo a Retro or a Light leak look, we have got your covered with more than 15 photo filters.</Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <img src="https://cdn.imageresize.org/static/media/photo-editor-page-3.03d84329.jpg" width="100%" alt="" />
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <img src="https://cdn.imageresize.org/static/media/photo-editor-page-4.0e0f2236.jpg" width="100%" alt="" />
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h2" gutterBottom>It is super simple to use</Typography>
                <Typography variant="body1">Image editing doesn’t have to be a rocket science. We built our editor with ease of use in mind. Editing a photo for the correct style and adjusting it to your artistic needs shouldn’t take more than 10 seconds!</Typography>
                <Typography variant="body1">Give it a try and you will love the simplicity of our Image editor. We support both mobile and Desktop users, so give it a try regardless of your device.</Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={12}>
                <Typography variant="h2" gutterBottom>How to edit a photo</Typography>
                <Typography variant="body1">Follow these simple 4 step process to edit your photos</Typography>

                <Stepper activeStep="null" orientation="vertical">
                    <Step><StepLabel><Typography variant="body1">Upload your photo to the image editor</Typography></StepLabel></Step>
                    <Step><StepLabel><Typography variant="body1">Select the editing functions from the "Image Adjust"section of our editor</Typography></StepLabel></Step>
                    <Step><StepLabel><Typography variant="body1">Optimize or resize the image is desired</Typography></StepLabel></Step>
                    <Step><StepLabel><Typography variant="body1">Click "Resize Image"to download the edited version of your image</Typography></StepLabel></Step>
                </Stepper>
            </Grid>
        </Grid>
    </div>
);
 
FeatureEditingPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeatureEditingPage);