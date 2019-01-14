import React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Processing from '../../common/Processing/Processing';
import FileUploadManager from '../FileUploadManager/FileUploadManager';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './ImageBulkResizeTool.styles';

class ImageBulkResizeTool extends React.Component {
    state = {
        activeStep: 0,
        files: []
    };

    handleFileSelect = (selectedFiles) => {
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

        if (state.activeStep > 0 && props.location.search !== '?edit') {
            props.history.push({ search: '?edit' });
        } else if (state.activeStep === 0 && props.location.search !== '') {
            props.history.push({ search: '' });
        }

        return (
            <div className={classNames(className, classes.root)}>
                {state.activeStep === 0 ? (
                    <FileUploadManager
                        files={state.files}
                        accept="image/*"
                        maxFiles={20}
                        labels={{
                            selectFiles: 'Select Images',
                            dropFiles: 'or, drop Images here'
                        }}
                        onChange={this.handleFileSelect}
                    />
                ) : state.activeStep === 1 ? (
                    <Typography>Place for Image Bulk Resize</Typography>
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
                        Proceed to Bulk Resize   
                    </Button>
                </div>
                ) : null}
            </div>
        );
    }
}

ImageBulkResizeTool.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(ImageBulkResizeTool));