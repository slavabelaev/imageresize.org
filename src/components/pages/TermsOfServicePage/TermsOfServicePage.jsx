import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { withStyles } from '@material-ui/core/styles';
// Styles
import styles from './TermsOfServicePage.styles';
import TermsOfService from './terms-of-service.md';

const TermsOfServicePage = ({ className, classes }) => (
    <div className={`${className || ''} ${classes.root}`}>
        <ReactMarkdown className='section' source={TermsOfService} />
    </div>
);
 
TermsOfServicePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TermsOfServicePage);