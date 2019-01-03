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
import styles from './FeatureCompressingPage.styles';

const FeatureCompressingPage = ({ className, classes }) => (
    <div className={`${className || ''} ${classes.root}`}>
        <header className={classes.header}>
            <Typography variant="h4" component="h1" gutterBottom>Compress JPEG and PNG Images Without Losing Quality</Typography>
            <Typography variant="body1">Optimize your images to reduce file size while keeping image quality</Typography>
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
                <Typography variant="h5" component="h2" gutterBottom>Optimizing is no longer optional</Typography>
                <Typography variant="body1">If your pages load slow, it is probably caused by uncompressed images. The problem is grave enough for Google to use page load time as a ranking factor now.</Typography>
                <Typography variant="body1">Optimizing your images properly lower your load time, reduce bounce rate, and save both your and customer’s data costs. So there is really no reason to upload an image to your website without optimizing it!</Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}></Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <img src="https://cdn.imageresize.org/static/media/compress-page-2.8b253210.jpg" width="100%" alt="" />
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h5" component="h2" gutterBottom>State of the art JPEG compression</Typography>
                <Typography variant="body1">JPEG is the most used image format on the world wide web. This is because it uses a lossy (irreversible) compression algorithm. However, most of the JPEG images you produced by digital cameras or download from the web are not compressed to the full extent.</Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h5" component="h2" gutterBottom>State of the art PNG compression</Typography>
                <Typography variant="body1">PNG is another image format that is widely used. Compared to JPEG, PNG uses a lossless (reversible) compression algorithm. This means it stores extra data to be able to reverse the image to its original quality. Such extra data, however, bloat the file size.</Typography>
                <Typography variant="body1">Our PNG Compressor applies a lossy compression algorithm and removes extra metadata. The result is a drastically reduced PNG files size without losing image quality.</Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}></Grid>
            <Grid className={classes.Grid_item} item xs={6}>
            <img src="https://cdn.imageresize.org/static/media/compress-page-4.7099ce4c.jpg" width="100%" alt="" />
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h5" component="h2" gutterBottom>Bulk image compression</Typography>
                <Typography variant="body1">Want to compress all your images at once? No problem. Simply drag and drop or select your images to our bulk image compressor and it will automatically start compressing them.</Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={12}>
                <Typography variant="h5" component="h2" gutterBottom>How to compress a photo</Typography>
                <Typography variant="body1">Follow these two steps to compress single or bulk images</Typography>

                <Stepper activeStep="null" orientation="vertical">
                    <Step><StepLabel><Typography variant="body1">Upload your photos to the image compressor</Typography></StepLabel></Step>
                    <Step><StepLabel><Typography variant="body1">Click Download Images button to get a zip file with all your compressed images</Typography></StepLabel></Step>
                </Stepper>
            </Grid>
        </Grid>
    </div>
);
 
FeatureCompressingPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeatureCompressingPage);