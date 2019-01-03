import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
// Styles
import styles from './ImageFeaturesPage.styles';

const ImageFeaturesPage = ({ className, classes }) => (
    <div className={`${className || ''} ${classes.root}`}>
        <header className={classes.header}>
            <Typography variant="h4" component="h1" gutterBottom>Features</Typography>
        </header>
        <Grid className={classes.Grid_container} container spacing={40}>
            <Grid className={classes.Grid_item} item xs={12}>
                <Typography variant="h5" component="h2" gutterBottom>What is ImageResize.org?</Typography>
                <Typography variant="body1">Imageresize.org is a simple online image resizer. This tool allows you to resize your photos to an exact dimension in pixels or as a percentage of your original photo. To start, simply upload an image using the upload box above. We currently support the following image editing functions: Image resize, crop, rotate, and flip.</Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h5" component="h2" gutterBottom>Resize Image</Typography>
                <Typography variant="body1">Simply upload an image to our image resizer and specify exact pixel dimensions you want to resize your image to. You can also resize images to a percentage of the original size. This resize tool is useful if you want to use your images in forums, blogs, social media or profile photos. You can resize images in following units pixels, inches, cm, or mm.</Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h5" component="h2" gutterBottom>Crop Image</Typography>
                <Typography variant="body1">ImageResize.org also allows you to crop images. When cropping a photo, you can choose to keep the original aspect ratio by locking aspect ratio. Alternatively, you can select different aspect ratios such as 1:1 or 16:9 for your crop. You can also flip images (horizontally or vertically) or rotate them.</Typography>
            </Grid>
        </Grid>
    </div>
);
 
ImageFeaturesPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageFeaturesPage);