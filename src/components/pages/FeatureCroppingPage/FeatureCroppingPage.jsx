import React from 'react';
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
import styles from './FeatureCroppingPage.styles';

const FeatureCroppingPage = ({ className, classes }) => (
    <div className={`${className || ''} ${classes.root}`}>
        <header className={classes.header}>
            <Typography variant="h4" component="h1" gutterBottom>Crop Photos Using Our Image Editor</Typography>
            <Typography variant="body1">Create better compositions, remove unwanted parts, or get the aspect ratio right</Typography>
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
                <Typography variant="h5" component="h2" gutterBottom>Create better compositions</Typography>
                <Typography variant="body1">ImageResize.org’s online photo cropper lets you crop your images to fit the perfect composition and get rid of unwanted areas from your photo.</Typography>
                <Typography variant="body1">Sometimes it is important to capture the moment than to worry about composition. The photographic moments happens so fast and you probably don’t have time to decide what to include in the frame. Need not worry, our photo cropper lets you crop your images using a specific aspect ratio, exact dimensions, or simply drag and crop.</Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <img src="https://cdn.imageresize.org/static/media/crop-page-1.fe46b434.jpg" width="100%" alt="" />
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <img src="https://cdn.imageresize.org/static/media/crop-page-2.a771039c.jpg" width="100%" alt="" />
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h5" component="h2" gutterBottom>Crop freestyle or use an aspect ratio</Typography>
                <Typography variant="body1">Sometimes your photos need to be cropped to a certain aspect ratio to be able to properly displayed. Most social media sites such as Pinterest and Facebook or even smart TVs would stretch and distort your images if they are not properly cropped to fit the aspect ratio best practices set by those sources.</Typography>
                <Typography variant="body1">Our image cropper has built-in aspect ratio button to help you easily apply an aspect ratio to your crop. You can also crop it freestyle if you choose to do so.</Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={12}>
                <Typography variant="h5" component="h2" gutterBottom>How to crop a photo</Typography>
                <Typography variant="body1">Follow these simple 4 step process to start cropping your photo</Typography>

                <Stepper activeStep="null" orientation="vertical">
                    <Step><StepLabel><Typography variant="body1">Upload your photo to the single image editor</Typography></StepLabel></Step>
                    <Step><StepLabel><Typography variant="body1">Select the crop option under "Image Adjust" step</Typography></StepLabel></Step>
                    <Step><StepLabel><Typography variant="body1">Select a crop area or a pre-configured aspect ratio and click "Apply”</Typography></StepLabel></Step>
                    <Step><StepLabel><Typography variant="body1">Click "Resize Image" to generate the cropped version of your image</Typography></StepLabel></Step>
                </Stepper>
            </Grid>
        </Grid>
    </div>
);
 
FeatureCroppingPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeatureCroppingPage);