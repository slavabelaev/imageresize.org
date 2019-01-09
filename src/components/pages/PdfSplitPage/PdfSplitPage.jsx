import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PdfSplitTool from '../../tools/PdfSplitTool/PdfSplitTool';
// Styles
import styles from './PdfSplitPage.styles';

const PdfSplitPage = ({ className, classes }) => (
    <div className={classNames(className, classes.root)}>
        <header className={classes.header}>
            <Typography variant="h1" gutterBottom>PDF Split</Typography>
            <Typography variant="body1">Separate one page or a whole set for easy conversion into independent PDF files.</Typography>
        </header>
        <div className={classes.contentContainer}>
            <PdfSplitTool className={classes.PdfSplitTool} />
        </div>
    </div>
);
 
PdfSplitPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PdfSplitPage);