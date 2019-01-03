import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import FileUploadManager from '../../tools/FileUploadManager/FileUploadManager';
// Styles
import styles from './PdfMergePage.styles';

const PdfMergePage = ({ className, classes }) => (
    <div className={`${className || ''} ${classes.root}`}>
        <header className={classes.header}>
            <Typography variant="h4" component="h1" gutterBottom>PDF Merge</Typography>
            <Typography variant="body1"></Typography>
        </header>
        <div className={classes.contentContainer}>
            <FileUploadManager className={classes.FileUploadManager} />
        </div>
        <Divider />
        <Grid className={classes.Grid_container} container spacing={40}>
            <Grid className={classes.Grid_item} item xs={12}>
                <Typography variant="h5" component="h2" gutterBottom></Typography>
                <Typography variant="body1"></Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h5" component="h2" gutterBottom></Typography>
                <Typography variant="body1"></Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h5" component="h2" gutterBottom></Typography>
                <Typography variant="body1"></Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h5" component="h2" gutterBottom></Typography>
                <Typography variant="body1"></Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h5" component="h2" gutterBottom></Typography>
                <Typography variant="body1"></Typography>
            </Grid>
        </Grid>
    </div>
);
 
PdfMergePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PdfMergePage);