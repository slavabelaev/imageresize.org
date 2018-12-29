import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ImageManager from '../ImageManager/ImageManager';
// Styles
import styles from './MemeMaker.styles';
// DEMO DATA
import MEME_DATASOURCE from '../../../demo/data/images.json';

class MemeMaker extends React.Component {
    state = {};
    
    render() {
        const { className, classes } = this.props;

        return (
            <Typography component="div" className={`${className || ''} ${classes.root}`}>
                <ImageManager 
                    dataSource={MEME_DATASOURCE.images} 
                    labels={{
                        chooseTab: 'Choose Meme',
                        uploadTab: 'Upload Image',
                        searchPlaceholder: 'Search memes'
                    }}
                />
            </Typography>
        );
    }
}

MemeMaker.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MemeMaker);