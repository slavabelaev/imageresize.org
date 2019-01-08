import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import CopyField from '../CopyField/CopyField';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './Processing.styles';

class Processing extends React.Component {
    state = {}

    render() {
        const { props, state } = this;
        const { className, classes } = props;

        return (
            <div className={classNames(className, classes.root)}>
                <Typography variant="h1">Has ImageConverter help you? You can help us too!</Typography>
                <CopyField 
                    label="Or link to us" 
                    value={'<a href="https//imageconverter.org/pdf-for-download.pdf"></a>'} 
                />
            </div>
        );
    }
}

Processing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Processing);