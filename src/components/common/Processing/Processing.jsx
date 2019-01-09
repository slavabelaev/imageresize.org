import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import ShareLink from '../ShareLink/ShareLink';
import CopyField from '../CopyField/CopyField';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './Processing.styles';

class Processing extends React.Component {
    state = {
        isLoading: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 2000)
    }

    render() {
        const { props, state } = this;
        const { className, classes } = props;

        return (
            <div className={classNames(className, classes.root)}>
                <div className={classes.progressContainer}>
                    {state.isLoading ? (
                        <CircularProgress className={classes.CircularProgress} />
                    ) : (
                        <CheckCircleIcon fontSize="large" className={classes.Icon_check} />
                    )}
                </div>
                <Button 
                    className={classes.Button_download}
                    variant="contained" 
                    color="primary"
                    size="large"
                >
                    <SaveAltIcon className={classes.Icon} />
                    Download PDF File
                </Button>
                <Typography component="p" variant="h1" className={classes.Typography_message}>Has ImageResize helped you? You can help us too!</Typography>
                <ShareLink 
                    className={classes.ShareLink}
                    url="https://imageresize.org/" 
                />
                <CopyField 
                    label="Or link to us" 
                    value={'<a href="https://imageresize.org/pdf-for-download.pdf"></a>'} 
                />
            </div>
        );
    }
}

Processing.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Processing);