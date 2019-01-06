import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './PdfMergeTool.styles';

class PdfMergeTool extends React.Component {
    state = {
    };

    render() {
        const { props, state } = this;
        const { className, classes } = props;

        return (
            <div className={`${className || ''} ${classes.root}`}>
                <Grid container>
                    <Grid item>1</Grid>
                    <Grid item>2</Grid>
                </Grid>

                <Button variant="contained" size="large">Merge PDF</Button>
            </div>
        );
    }
}

PdfMergeTool.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PdfMergeTool);