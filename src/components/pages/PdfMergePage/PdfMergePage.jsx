import React from 'react';
import classNames from 'classnames';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FileUploadManager from '../../tools/FileUploadManager/FileUploadManager';
// Styles
import styles from './PdfMergePage.styles';

const PdfMergePage = ({ className, classes }) => (
    <div className={classNames(className, classes.root)}>
        <header className={classes.header}>
            <Typography variant="h1" gutterBottom>PDF Merge</Typography>
            <Typography variant="body1"></Typography>
        </header>
        <div className={classes.contentContainer}>
            <FileUploadManager className={classes.FileUploadManager} />
        </div>
    </div>
);
 
PdfMergePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PdfMergePage);