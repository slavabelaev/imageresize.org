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
import PdfResizeTool from '../../tools/PdfResizeTool/PdfResizeTool';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './PdfResizePage.styles';

const PdfResizePage = ({ className, classes }) => (
    <div className={classNames(className, classes.root)}>
        <AppContainer maxWidth="md">
            <header className={classes.header}>
                <Typography variant="h1" gutterBottom>PDF Resize</Typography>
                <Typography variant="body1">Resize your PDF files to a new paper size by uploading them below.</Typography>
            </header>
            <PdfResizeTool />
        </AppContainer>
        <Divider className={classes.Divider} />
        <AppContainer>
            <Grid container>
                <Grid className={classes.Grid_item} item xs={12}>
                    <Typography variant="h2" gutterBottom>How to Resize PDF?</Typography>
                    <Stepper activeStep={-1} orientation="vertical">
                        <Step><StepLabel><Typography variant="body1">Click the "Choose PDF" button in the upload box (you can also drag and drop multiple PDF files for batch resizing).</Typography></StepLabel></Step>
                        <Step><StepLabel><Typography variant="body1">Click on the "Proceed to PDF Resize" button.</Typography></StepLabel></Step>
                        <Step><StepLabel><Typography variant="body1">In "Select Paper Size" section, select a paper size or enter custom width and height.(you can enter a custom size in millimeters, points, inches, or pixels)</Typography></StepLabel></Step>
                        <Step><StepLabel><Typography variant="body1">Choose "Scale to fit"if you want to scale PDF content to fit the new paper size</Typography></StepLabel></Step>
                        <Step><StepLabel><Typography variant="body1">Choose "Keep aspect ratio" if you want to keep the aspect ratio of the original PDF while scaling.</Typography></StepLabel></Step>
                        <Step><StepLabel><Typography variant="body1">Click the "Resize PDF" button</Typography></StepLabel></Step>
                        <Step><StepLabel><Typography variant="body1">Click "Download All" button to download the resized PDF(s)</Typography></StepLabel></Step>
                    </Stepper>
                </Grid>
                <Grid className={classes.Grid_item} item xs={12}>
                    <Typography variant="h2" gutterBottom>Resize PDF Online</Typography>
                    <Typography variant="body1">This PDF resizer is an online tool. That means no software to install. It will work on your windows, mac, or mobile devices. This tool is 100% free, has no file limits, and does not require registration.</Typography>
                </Grid>
            </Grid>
        </AppContainer>
    </div>
);
 
PdfResizePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PdfResizePage);