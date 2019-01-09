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
import SplitManager from '../SplitManager/SplitManager';
import FileUploadManager from '../FileUploadManager/FileUploadManager';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './PdfSplitTool.styles';

class PdfSplitTool extends React.Component {
    state = {
        activeStep: 0,
        files: []
    };

    handleFileUpload = (selectedFiles) => {
        this.setState({ files: selectedFiles });
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
                    <FileUploadManager
                        files={state.files}
                        accept="application/pdf"
                        maxFiles={1}
                        labels={{
                            selectFiles: 'Select PDF files',
                            dropFiles: 'or, drop PDF files here'
                        }}
                        onChange={this.handleFileUpload}
                    />
                ) : state.activeStep === 1 ? (
                    <SplitManager className={classes.SplitManager} />
                ) : state.activeStep === 2 ? (
                    <Processing className={classes.Processing}  />
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
                        disabled={state.files.length < 1}
                        variant="contained" 
                        color="primary" 
                        size="large"
                        onClick={this.handleNext}>
                        {state.activeStep === 1 ? 'Split PDF' : 'Next'}    
                    </Button>
                </div>
                ) : null}
            </div>
        );
    }
}

PdfSplitTool.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PdfSplitTool);