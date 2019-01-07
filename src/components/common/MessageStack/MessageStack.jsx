import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton'
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import ClearIcon from '@material-ui/icons/Clear';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './MessageStack.styles';

class MessageStack extends React.Component {
    state = {
        messages: this.props.messages || []
    };

    handleRemoveMessage = (index) => {
        let messages = this.state.messages;
        messages.splice(index, 1);
        this.setState({ messages });
    }

    render() {
        const { props, state } = this;
        const { className, classes } = props;

        return (
            <div className={classNames(className, classes.root)}>
                {state.messages.map((message, index) =>
                <Snackbar
                    className={classes.Snackbar}
                    open={true}
                    key={index}
                >
                    <SnackbarContent
                        className={classNames(classes.SnackbarContent, 
                            (message.variant === 'error') ? classes.SnackbarContent_error :
                            (message.variant === 'warning') ? classes.SnackbarContent_warning :
                            classes.SnackbarContent_info
                        )}
                        message={
                            <div className={classes.messageContent}>
                                {message.variant === 'error' ? (
                                    <ErrorIcon className={classes.Icon} />
                                ) : (message.variant === 'warning') ? (
                                    <WarningIcon className={classes.Icon} />
                                ) : (
                                    <InfoIcon className={classes.Icon} />
                                )}
                                <span>{message.text}</span>
                                <IconButton 
                                    className={classes.IconButton_removeMessage}
                                    onClick={() => this.handleRemoveMessage(index)}
                                >
                                    <ClearIcon fontSize="small" />
                                </IconButton>
                            </div>
                        }>
                    </SnackbarContent>
                </Snackbar>
                )}
            </div>
        );
    }
}

MessageStack.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MessageStack);