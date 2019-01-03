import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import FileUploadManager from '../../tools/FileUploadManager/FileUploadManager';
// Styles
import styles from './ImageBulkResizePage.styles';

const ImageBulkResizePage = ({ className, classes }) => (
    <div className={`${className || ''} ${classes.root}`}>
        <header className={classes.header}>
            <Typography variant="h4" component="h1" gutterBottom>Bulk Resize</Typography>
            <Typography variant="body1">Resize, compress, or convert multiple images at once</Typography>
        </header>
        <div className={classes.contentContainer}>
            <FileUploadManager className={classes.FileUploadManager} />
        </div>
        <Divider />
        <Grid className={classes.Grid_container} container spacing={40}>
            <Grid className={classes.Grid_item} item xs={12}>
                <Typography variant="h5" component="h2" gutterBottom>What is Batch Image Resize Tool?</Typography>
                <Typography variant="body1">Imageresize.org provides a bulk/batch resizing tool to easily Resize, compress, or convert multiple images at once. It is an online tool, so there is no software to download or install. You can upload up to 20 images at once using the upload box above.</Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h5" component="h2" gutterBottom>Batch image resize</Typography>
                <Typography variant="body1">Upload multiple photos from the upload box above to start resizing them. You can resize all your photos as a percentage of the original size or specify exact width and height.</Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h5" component="h2" gutterBottom>Bulk image compressor</Typography>
                <Typography variant="body1">Upload multiple images and compress them all at once using our image editor. You can choose a compression level or simply specify the maximum file size you want.</Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h5" component="h2" gutterBottom>What is different in Bulk Tool?</Typography>
                <Typography variant="body1">Batch resize tool is designed to process multiple images at once. At this time, the bulk tool does not allow single image editing (crop, flip, rotate, and image filters).</Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h5" component="h2" gutterBottom>Bulk image converter</Typography>
                <Typography variant="body1">Need to convert multiple images? Our image editor allows you to convert your images to any of the following file types; jpg, png, gif, and bmp.</Typography>
            </Grid>
        </Grid>
    </div>
);
 
ImageBulkResizePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageBulkResizePage);