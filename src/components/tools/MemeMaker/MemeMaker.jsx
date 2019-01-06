import React from 'react';
import classNames from 'classnames';

import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import ImageManager from '../ImageManager/ImageManager';
import MemeEditor from '../MemeEditor/MemeEditor';
import ShareImage from '../../tools/ShareImage/ShareImage';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './MemeMaker.styles';

const MemeImageManager = ({ classes }) => (
    <div>
        <header className={classes.header}>
            <Typography variant="h1" gutterBottom>Meme Maker</Typography>
            <Typography variant="body1">Select or Upload image below to make Meme</Typography>
        </header>
        <ImageManager
            labels={{
                chooseTab: 'Choose Meme',
                uploadTab: 'Upload Image',
                search: 'Search memes',
                selectButton: 'Add Caption'
            }}
        />
    </div>
)

class MemeMaker extends React.Component {
    state = {
        imageUrl: 'https://picsum.photos/750/570/?',
        activeStep: 0
    };

    scrollToTop() {
        if (!document.body.scrollIntoView) return;
        this.refs.root.scrollIntoView();
    }

    handleGoNext = () => {
        const { activeStep } = this.state;
        this.setState({ activeStep: activeStep + 1 });
        this.scrollToTop();
    };

    handleGoBack = () => {
        this.setState(state => ({ activeStep: state.activeStep - 1 }));
        this.scrollToTop();
    };

    handleReset = () => {
        this.setState({ activeStep: 0 });
        this.scrollToTop();
    };
    
    render() {
        const { className, classes } = this.props;
        const { activeStep, imageUrl } = this.state;
        const steps = [
            { 
                label: 'Select Image',
                content: (<MemeImageManager classes={classes} />)
            },
            { 
                label: 'Make Meme',
                content: (<MemeEditor imageUrl={imageUrl} />)
            },
            { 
                label: 'Download or Share',
                content: (<ShareImage imageUrl={imageUrl} onCreateNew={this.handleReset} />)
            }
        ];
        const lastStep = (steps.length - 1);
        const getStepContent = (index) => steps[index].content;

        return (
            <div className={classNames(className, classes.root)} ref="root">
                <Stepper activeStep={activeStep}>
                    {steps.map((step, index) => (
                        <Step key={index}>
                            <StepLabel>{step.label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div className={classes.content}>
                    {getStepContent(activeStep)}
                </div>
                {activeStep < lastStep ? (
                    <div className={classes.actions}>
                        {activeStep > 0 ? (
                        <Button
                            size="large"
                            hidden={activeStep === 0}
                            onClick={this.handleGoBack}
                            className={classes.button}
                        >
                            Back
                        </Button>
                        ) : null}
                        <Button
                            variant="contained"
                            color={activeStep === 1 ? 'secondary' : 'primary'}
                            size="large"
                            disabled={activeStep === lastStep}
                            onClick={this.handleGoNext}
                            className={classes.button}
                        >
                            {(activeStep === 0) ? 'Make It' : null}
                            {(activeStep === 1) ? 'Save and Download' : null}
                        </Button>
                    </div>
                ) : null}
            </div>
        );
    }
}

MemeMaker.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MemeMaker);