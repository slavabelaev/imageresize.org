import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import FileUploadManager from '../../tools/FileUploadManager/FileUploadManager';
// Styles
import styles from './ImageCompressPage.styles';

const ImageCompressPage = ({ className, classes }) => (
    <div className={`${className || ''} ${classes.root}`}>
        <header className={classes.header}>
            <Typography variant="h4" component="h1" gutterBottom>Compress Images</Typography>
            <Typography variant="body1">Advanced PNG and JPEG compressor for reducing file size without quality loss</Typography>
        </header>
        <div className={classes.contentContainer}>
            <FileUploadManager className={classes.FileUploadManager} />
        </div>
        <Divider />
        <Grid className={classes.Grid_container} container spacing={40}>
            <Grid className={classes.Grid_item} item xs={12}>
                <Typography variant="h5" component="h2" gutterBottom>What is an Image Compressor?</Typography>
                <Typography variant="body1">It is a free online tool provided by ImageResize.org for compressing images without losing image quality. We use the latest image compression methods and intelligent algorithms to lower your image file size. This image compressor can compress JPG and PNG images. If you have a GIF file to optimize, we recommend GIF Compressor by GIFmaker.net</Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h5" component="h2" gutterBottom>JPEG compressor</Typography>
                <Typography variant="body1">JPEG is a popular file/compression format used for storing digital images. Most JPEG files can be optimized further without losing any visual image quality. Upload and compress JPEG files above to improve page load times and save your bandwidth costs.</Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h5" component="h2" gutterBottom>PNG compressor</Typography>
                <Typography variant="body1">PNG compresses images while keeping original data (lossless). As a result, file size can be bigger. Our compressor applies lossy algorithms, strip unwanted data, converts 24-bit color index to 8-bit. The Result is a drastically lower PNG image size with the same image quality.</Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h5" component="h2" gutterBottom>Image optimization for webmasters</Typography>
                <Typography variant="body1">If you are a webmaster, you want your pages to load faster to provide the best user experience. Optimizing your images will lead to faster page loading, save bandwidth, and help your website rank higher in search results.</Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h5" component="h2" gutterBottom>Images optimization for consumers</Typography>
                <Typography variant="body1">If you are a consumer or a photographer, you may want to compress your images to upload them faster. Optimized images also help to stay within file size restrictions on many consumer websites.</Typography>
            </Grid>
        </Grid>
    </div>
);
 
ImageCompressPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageCompressPage);