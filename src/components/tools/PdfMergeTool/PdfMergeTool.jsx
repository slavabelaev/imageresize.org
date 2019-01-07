import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import RotateRightIcon from '@material-ui/icons/RotateRight';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './PdfMergeTool.styles';

class PdfMergeTool extends React.Component {
    state = {
        files: [
            { name: 'Sample Name 1', rotationAngle: 0 },
            { name: 'Sample Name 2', rotationAngle: 0 },
            { name: 'Sample Name 2', rotationAngle: 0 },
            { name: 'Sample Name 2', rotationAngle: 0 },
        ]
    };

    render() {
        const { props, state } = this;
        const { className, classes } = props;

        return (
            <div className={classNames(className, classes.root)}>
                <div className={classes.documentsContainer}>
                    <Grid container className={classes.Grid}>

                        {state.files.map((file, index) => 
                        <Grid item xs={6} className={classes.Grid_item} key={index}>
                            <Card className={classes.Card}>
                                <div className={classes.canvasContainer}>
                                    <canvas className={classes.canvas} />
                                </div>
                                <CardContent className={classes.CardContent}>
                                    <Typography component="h2" className={classes.Typography_documentName}>
                                        {file.name}
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.CardActions}>
                                    <IconButton className={classNames(classes.IconButton, classes.IconButton_remove)}>
                                        <ClearIcon />
                                    </IconButton>
                                    <IconButton className={classNames(classes.IconButton)}>
                                        <RotateRightIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                        )}

                    </Grid>
                </div>

                <div className={classes.actionsContainer}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        size="large">Merge PDF</Button>
                </div>
            </div>
        );
    }
}

PdfMergeTool.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PdfMergeTool);