import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import FileUploadManager from '../../tools/FileUploadManager/FileUploadManager';
// Styles
import styles from './PdfResizePage.styles';

const PdfResizePage = ({ className, classes }) => (
    <div className={`${className || ''} ${classes.root}`}>
        <header className={classes.header}>
            <Typography variant="h4" component="h1" gutterBottom>PDF Resize</Typography>
            <Typography variant="body1">Resize your PDF files to a new paper size by uploading them below.</Typography>
        </header>
        <div className={classes.contentContainer}>
            <FileUploadManager className={classes.FileUploadManager} />
        </div>
        <Divider />
        <Grid className={classes.Grid_container} container spacing={40}>
            <Grid className={classes.Grid_item} item xs={12}>
                <Typography variant="h5" component="h2" gutterBottom>How to Resize PDF?</Typography>
                <Typography component="div" variant="body1">
                    <ol>
                        <li>Click the "Choose PDF" button in the upload box (you can also drag and drop multiple PDF files for batch resizing).</li>
                        <li>Click on the "Proceed to PDF Resize" button.</li>
                        <li>In "Select Paper Size" section, select a paper size or enter custom width and height.(you can enter a custom size in millimeters, points, inches, or pixels)</li>
                        <li>Choose "Scale to fit"if you want to scale PDF content to fit the new paper size</li>
                        <li>Choose "Keep aspect ratio" if you want to keep the aspect ratio of the original PDF while scaling.</li>
                        <li>Click the "Resize PDF" button</li>
                        <li>Click "Download All" button to download the resized PDF(s)</li>
                    </ol>
                </Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={12}>
                <Typography variant="h5" component="h2" gutterBottom>Resize PDF Online</Typography>
                <Typography variant="body1">This PDF resizer is an online tool. That means no software to install. It will work on your windows, mac, or mobile devices. This tool is 100% free, has no file limits, and does not require registration.</Typography>
            </Grid>
        </Grid>
    </div>
);
 
PdfResizePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PdfResizePage);