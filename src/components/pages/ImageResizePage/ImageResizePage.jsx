import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import AppContainer from '../../layouts/AppContainer/AppContainer';
import ImageResizeTool from '../../tools/ImageResizeTool/ImageResizeTool';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './ImageResizePage.styles';

const ImageResizePage = ({ className, classes }) => (
    <div className={classNames(className, classes.root)}>
        <AppContainer maxWidth="md">
            <header className={classes.header}>
                <Typography variant="h1" gutterBottom>Image Resize</Typography>
                <Typography variant="body1">Crop, resize, flip, or rotate an image by uploading it below.</Typography>
            </header>
            <ImageResizeTool className={classes.ImageResizeTool} />
        </AppContainer>
        <Divider className={classes.Divider} />
        <AppContainer>
            <Grid className={classes.Grid_container} container spacing={40}>
                <Grid className={classes.Grid_item} item xs={12}>
                    <Typography variant="h2" gutterBottom>What is ImageResize.org?</Typography>
                    <Typography variant="body1">Imageresize.org is a simple online image resizer. This tool allows you to resize your photos to an exact dimension in pixels or as a percentage of your original photo. To start, simply upload an image using the upload box above. We currently support the following image editing functions: Image resize, crop, rotate, and flip.</Typography>
                </Grid>
                <Grid className={classes.Grid_item} item md={6}>
                    <Typography variant="h2" gutterBottom>Resize Image</Typography>
                    <Typography variant="body1">Simply upload an image to our image resizer and specify exact pixel dimensions you want to resize your image to. You can also resize images to a percentage of the original size. This resize tool is useful if you want to use your images in forums, blogs, social media or profile photos. You can resize images in following units pixels, inches, cm, or mm.</Typography>
                </Grid>
                <Grid className={classes.Grid_item} item md={6}>
                    <Typography variant="h2" gutterBottom>Crop Image</Typography>
                    <Typography variant="body1">ImageResize.org also allows you to crop images. When cropping a photo, you can choose to keep the original aspect ratio by locking aspect ratio. Alternatively, you can select different aspect ratios such as 1:1 or 16:9 for your crop. You can also flip images (horizontally or vertically) or rotate them.</Typography>
                </Grid>
                <Grid className={classes.Grid_item} item md={6}>
                    <Typography variant="h2" gutterBottom>Reduce Image Size</Typography>
                    <Typography variant="body1">Our image resizer allows you to limit image file size in Kb or Mb. Simply select “Custom File Size” option under “Optimize” settings. Then enter your target file size in Kilobytes or Megabytes. This feature is useful if you are emailing your photos or if you have some file size restrictions when uploading images (blogs, forums). While our image resizer allows basic optimizations, you may want to use our advanced image compressor for png and jpg compressions.</Typography>
                </Grid>
                <Grid className={classes.Grid_item} item md={6}>
                    <Typography variant="h2" gutterBottom>Change Aspect Ratio</Typography>
                    <Typography variant="body1">When resizing images, you can choose to keep original aspect ratio or change it as you wish. Note: changing an image’s aspect ratio may distort (stretch) the image. If you wish to change the aspect ratio without stretching the image, you may wish to use our “background color fill” option. If this option is selected, we will resize your image and fill it with your choice of background color to avoid stretching.</Typography>
                </Grid>
                <Grid className={classes.Grid_item} item md={6}>
                    <Typography variant="h2" gutterBottom>Simple and Fast</Typography>
                    <Typography variant="body1">ImageResize.org is hosted in a scalable cloud computing environment. As a result, we can quickly resize images regardless of server load. This means you do not have to wait for a queue. This image resizer is simple and intuitive to use with live resize calculations for your final image size.</Typography>
                </Grid>
                <Grid className={classes.Grid_item} item md={6}>
                    <Typography variant="h2" gutterBottom>Free & Secure</Typography>
                    <Typography variant="body1">ImageResize.org also allows you to crop images. When cropping a photo, you can choose to keep the original aspect ratio by locking aspect ratio. Alternatively, you can select different aspect ratios such as 1:1 or 16:9 for your crop. You can also flip images (horizontally or vertically) or rotate them.</Typography>
                </Grid>
                <Grid className={classes.Grid_item} item xs={12}>
                    <Typography variant="h2" gutterBottom>FAQ:</Typography>
                    <section>
                        <Typography variant="h3" gutterBottom>Question: How to resize an image in pixels?</Typography>
                        <Stepper activeStep="null" orientation="vertical">
                            <Step><StepLabel><Typography variant="body1">Upload your image</Typography></StepLabel></Step>
                            <Step><StepLabel><Typography variant="body1">Select "Custom Size" from the drop-down box in "Resize your Image" section</Typography></StepLabel></Step>
                            <Step><StepLabel><Typography variant="body1">Enter a new custom size for the image in pixels</Typography></StepLabel></Step>
                        </Stepper>
                    </section>
                    <section>
                        <Typography variant="h3" gutterBottom>Question: How to reduce image size in kb?</Typography>
                        <Stepper activeStep="null" orientation="vertical">
                            <Step><StepLabel><Typography variant="body1">Upload your image</Typography></StepLabel></Step>
                            <Step><StepLabel><Typography variant="body1">Select "Custom File Size" from the "Quality and Format" section Enter a new target file size for your images in Kb or Mb</Typography></StepLabel></Step>
                        </Stepper>
                    </section>
                    <section>
                        <Typography variant="h3" gutterBottom>Question: How to crop a photo?</Typography>
                        <Stepper activeStep="null" orientation="vertical">
                            <Step><StepLabel><Typography variant="body1">Upload your photo</Typography></StepLabel></Step>
                            <Step><StepLabel><Typography variant="body1">Click on the "Crop" icon under "Adjust Image" section</Typography></StepLabel></Step>
                            <Step><StepLabel><Typography variant="body1">Optionally, select an aspect ratio or lock the original aspect ratio from the crop tool panel</Typography></StepLabel></Step>
                            <Step><StepLabel><Typography variant="body1">Draw your crop rectangle on top of the image using your mouse</Typography></StepLabel></Step>
                            <Step><StepLabel><Typography variant="body1">Click "Apply" to crop photo</Typography></StepLabel></Step>
                        </Stepper>
                    </section>
                </Grid>
            </Grid>
        </AppContainer>
    </div>
);
 
ImageResizePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageResizePage);