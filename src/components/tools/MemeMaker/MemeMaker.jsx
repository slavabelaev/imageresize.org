import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ImageManager from '../ImageManager/ImageManager';
import MemeEditor from '../MemeEditor/MemeEditor';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './MemeMaker.styles';

class MemeMaker extends React.Component {
    state = {};
    
    render() {
        const { className, classes } = this.props;

        return (
            <Typography component="div" className={`${className || ''} ${classes.root}`}>
                {/* <ImageManager
                    labels={{
                        chooseTab: 'Choose Meme',
                        uploadTab: 'Upload Image',
                        search: 'Search memes',
                        selectButton: 'Add Caption'
                    }}
                /> */}
                <MemeEditor />
            </Typography>
        );
    }
}

MemeMaker.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MemeMaker);