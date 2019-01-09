import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import AppContainer from '../../layouts/AppContainer/AppContainer';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './HelpPage.styles';

const HelpPage = ({ className, classes }) => (
    <article className={classNames(className, classes.root)}>
        <AppContainer>
            <Typography variant="h1" gutterBottom>Help</Typography>
            <section className={classes.section}>
                <Typography variant="h2" gutterBottom>How do I resize a single image?</Typography>
                <Typography variant="body1" gutterBottom>To resize a JPG or a PNG image, simply upload it to our single image editor here. Once the file is uploaded, you will be taken to our editor where you can select a new size for your image.</Typography>
            </section>
            <section className={classes.section}>
                <Typography variant="h2" gutterBottom>How do I resize multiple images at once?</Typography>
                <Typography variant="body1" gutterBottom>To resize multiple images at once, you can upload or drag and drop your image files to our bulk resize page. Once your files are uploaded, you can select a new size for your files. New size can be specified as a percentage of original file or as an exact pixel amount.</Typography>
            </section>
        </AppContainer>
    </article>
);
 
HelpPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HelpPage);