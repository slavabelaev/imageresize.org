import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import AppContainer from '../../layouts/AppContainer/AppContainer';
import PdfMergeTool from '../../tools/PdfMergeTool/PdfMergeTool';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './PdfMergePage.styles';

const PdfMergePage = ({ className, classes }) => (
    <div className={classNames(className, classes.root)}>
        <AppContainer maxWidth="md">
            <header className={classes.header}>
                <Typography variant="h1" gutterBottom>PDF Merge</Typography>
                <Typography variant="body1">Combine PDFs in the order you want with the easiest PDF merger available.</Typography>
            </header>
            <PdfMergeTool />
        </AppContainer>
    </div>
);
 
PdfMergePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PdfMergePage);