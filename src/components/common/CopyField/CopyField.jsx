import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './CopyField.styles';

const copyToClipboard = copyString => {
    const element = document.createElement('textarea');
    element.value = copyString;
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);
};

class CopyField extends React.Component {
    state = {
        isCopiedMessageShow: false
    }

    handleCopy = (copyString) => {
        copyToClipboard(copyString);
        this.setState({ isCopiedMessageShow: true });
    }

    handleCopiedMessageHide = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ isCopiedMessageShow: false });
    };

    render() {
        const { props, state } = this;
        const { className, classes } = props;

        return (
            <div className={classNames(className, classes.root)}>
                <Grid container>
                    <Grid item xs={12} md={3} className={classes.Grid_label}>
                        <Typography className={classes.Typography_label}>{props.label || ''}</Typography>
                    </Grid>
                    <Grid item xs={12} md={9}>                    
                        <TextField
                            value={props.value || ''}
                            className={classes.TextField}
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                readOnly: true,
                                endAdornment: (
                                    <Button 
                                        className={classes.Button_copy}
                                        variant="outlined" 
                                        size="large"
                                        onClick={() => this.handleCopy(props.value || '')}
                                    >Copy</Button>
                                )
                            }}
                        />
                    </Grid>
                </Grid>

                <Snackbar
                    open={state.isCopiedMessageShow}
                    onClose={this.handleCopiedMessageHide}
                    autoHideDuration={1200}
                    message="Copied!"
                />
            </div>
        );
    }
}

CopyField.propTypes = {
    classes: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default withStyles(styles)(CopyField);