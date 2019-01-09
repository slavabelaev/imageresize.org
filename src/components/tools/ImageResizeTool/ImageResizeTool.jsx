import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import Processing from '../../common/Processing/Processing';
import FileUploadManager from '../FileUploadManager/FileUploadManager';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './ImageResizeTool.styles';

class ImageResizeTool extends React.Component {
    state = {
        activeStep: 0,
        files: []
    };

    handleFileSelect = (selectedFiles) => {
        this.setState({ files: selectedFiles });
        this.handleNext();
    }

    handleNext = () => { 
        this.setState({ activeStep: this.state.activeStep + 1 });
    }

    render() {
        const { props, state } = this;
        const { className, classes } = props;

        return (
            <div className={classNames(className, classes.root)}>
                {state.activeStep === 0 ? (
                    <FileUploadManager
                        files={state.files}
                        accept="image/*"
                        maxFiles={1}
                        labels={{
                            selectFiles: 'Select Images',
                            dropFiles: 'or, drop Images here'
                        }}
                        onChange={this.handleFileSelect}
                    />
                ) : state.activeStep === 1 ? (
                    <Typography>Place for Image Resize Editor</Typography>
                ) : state.activeStep === 2 ? (
                    <Processing className={classes.Processing}  />
                ) : null}
            </div>
        );
    }
}

ImageResizeTool.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageResizeTool);