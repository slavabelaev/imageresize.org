import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// Styles
import styles from './TermsOfServicePage.styles';
import TermsOfService from './terms-of-service.md';

class TermsOfServicePage extends React.Component {
    state = {  }
    render() {
        const props = this.props;
        const { classes } = this.props;

        return (
            <div className={`${props.className || ''} ${classes.root}`}>
                <ReactMarkdown className='section' source={TermsOfService} />
            </div>
        );
    }
}
 
TermsOfServicePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TermsOfServicePage);