import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import RotateRightIcon from '@material-ui/icons/RotateRight';

import Processing from '../../common/Processing/Processing';
import MessageStack from '../../common/MessageStack/MessageStack';
import FileUploadManager from '../FileUploadManager/FileUploadManager';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './PdfMergeTool.styles';

class PdfMergeTool extends React.Component {
    state = {
        activeStep: 0,
        files: []
    };

    handleFileSelect = (selectedFiles) => {
        this.setState({ files: selectedFiles });
    }

    handleFileRemove = (fileIndex) => {
        const files = this.state.files;
        files.splice(fileIndex, 1);
        this.setState({ files });
    }

    handleUpdateRotationAngle = (fileIndex) => {
        const files = this.state.files;
        const fileRotationAngle = files[fileIndex].rotationAngle || 0;
        files[fileIndex].rotationAngle = fileRotationAngle < 270 ? fileRotationAngle + 90 : 0;
        this.setState({ files });
    }

    handleNext = () => { 
        this.setState({ activeStep: this.state.activeStep + 1 });
    }

    handleBack = () => { 
        this.setState({ activeStep: this.state.activeStep - 1 });
    }

    render() {
        const { props, state } = this;
        const { className, classes } = props;

        return (
            <div className={classNames(className, classes.root)}>
                {state.activeStep === 0 ? (
                <div>
                    {state.files.length === 1 ? (
                    <MessageStack
                        className={classes.MessageStack} 
                        messages={[
                            { variant: 'info', text: 'Please, select more PDF files'}
                        ]}
                    />
                    ) : null}

                    <FileUploadManager
                        files={state.files}
                        accept="application/pdf"
                        maxFiles={20}
                        labels={{
                            selectFiles: 'Select PDF files',
                            dropFiles: 'or, drop PDF files here'
                        }}
                        onChange={this.handleFileSelect}
                    />
                </div>
                ) : state.activeStep === 1 ? (
                <div className={classes.documentsContainer}>
                    <Grid container className={classes.Grid}>
                        {state.files.map((file, index) => 
                        <Grid item xs={6} className={classes.Grid_item} key={index}>
                            <Card className={classes.Card}>
                                <div className={classes.coverContainer}>
                                    <div className={classes.coverWrapper}>
                                        <img 
                                            className={classes.cover} 
                                            src={require('./PdfMergeTool.cover.svg')} 
                                            alt="" 
                                            style={{transform: `rotate(${file.rotationAngle}deg)`}}
                                        />
                                    </div>
                                </div>
                                <CardContent className={classes.CardContent}>
                                    <Typography component="h2" className={classes.Typography_documentName}>
                                        {file.name}
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.CardActions}>
                                    <IconButton 
                                        className={classNames(classes.IconButton, classes.IconButton_remove)}
                                        onClick={() => this.handleFileRemove(index)}
                                    >
                                        <ClearIcon fontSize="small" />
                                    </IconButton>
                                    <IconButton 
                                        className={classNames(classes.IconButton)}
                                        onClick={() => this.handleUpdateRotationAngle(index)}
                                    >
                                        <RotateRightIcon fontSize="small" />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                        )}
                    </Grid>
                </div>
                ) : state.activeStep === 2 ? (
                    <Processing  />
                ) : null}

                {state.activeStep < 2 ? (
                <div className={classes.actionsContainer}>
                    {state.activeStep > 0 ? (
                    <Button
                        className={classes.Button_action}
                        variant="contained" 
                        size="large"
                        onClick={this.handleBack}>Back</Button>
                    ) : null}
                    <Button 
                        className={classes.Button_action}
                        disabled={state.files.length < 2}
                        variant="contained" 
                        color="primary" 
                        size="large"
                        onClick={this.handleNext}>
                        {state.activeStep === 1 ? 'Merge PDF' : 'Next'}    
                    </Button>
                </div>
                ) : null}
            </div>
        );
    }
}

PdfMergeTool.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PdfMergeTool);