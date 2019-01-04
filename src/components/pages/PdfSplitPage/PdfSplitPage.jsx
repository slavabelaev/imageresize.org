import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import SplitManager from '../../tools/SplitManager/SplitManager';
// Styles
import styles from './PdfSplitPage.styles';

const PdfSplitPage = ({ className, classes }) => (
    <div className={`${className || ''} ${classes.root}`}>
        <header className={classes.header}>
            <Typography variant="h1" gutterBottom>PDF Merge</Typography>
            <Typography variant="body1"></Typography>
        </header>
        <div className={classes.contentContainer}>
            <SplitManager className={classes.SplitManager} />
        </div>
    </div>
);
 
PdfSplitPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PdfSplitPage);