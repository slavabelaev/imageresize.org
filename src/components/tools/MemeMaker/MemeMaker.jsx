import React from 'react';
import PropTypes from 'prop-types';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import ImageManager from '../ImageManager/ImageManager';
import MemeEditor from '../MemeEditor/MemeEditor';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './MemeMaker.styles';

const MemeImageManager = () => (
    <ImageManager
        labels={{
            chooseTab: 'Choose Meme',
            uploadTab: 'Upload Image',
            search: 'Search memes',
            selectButton: 'Add Caption'
        }}
    />
)

const steps = [
    { 
        label: 'Select Image',
        content: (<MemeImageManager />)
    },
    { 
        label: 'Make Meme',
        content: (<MemeEditor />)
    },
    { 
        label: 'Download or Share',
        content: (<MemeEditor />)
    }
];

class MemeMaker extends React.Component {
    state = {
        activeStep: 0
    };

    goNext = () => {
        const { activeStep } = this.state;
        this.setState({ activeStep: activeStep + 1 });
    };

    goBack = () => {
        this.setState(state => ({ activeStep: state.activeStep - 1 }));
    };

    reset = () => {
        this.setState({ activeStep: 0 });
    };

    getStepContent = (index) => steps[index].content;
    
    render() {
        const { className, classes } = this.props;
        const { activeStep } = this.state;
        const lastStep = (steps.length - 1);

        return (
            <div className={`${className || ''} ${classes.root}`}>
                <Stepper activeStep={activeStep}>
                    {steps.map((step, index) => (
                        <Step key={index}>
                            <StepLabel>{step.label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div className={classes.content}>
                    {this.getStepContent(activeStep)}
                </div>
                <div className={classes.actions}>
                    <Button
                        size="large"
                        disabled={activeStep === 0}
                        onClick={this.goBack}
                        className={classes.button}
                    >
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        disabled={activeStep === lastStep}
                        onClick={this.goNext}
                        className={classes.button}
                    >
                        Next
                    </Button>
                </div>
            </div>
        );
    }
}

MemeMaker.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MemeMaker);