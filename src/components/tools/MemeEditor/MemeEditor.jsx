import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

import CircularProgress from '@material-ui/core/CircularProgress';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import TextEditor from './TextEditor';
import IconList from './IconList';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './MemeEditor.styles';

const TextDialog = ({ classes, open, onClose }) => (
    <Dialog
        open={open}
        onClose={onClose}
        maxWidth="md"
        aria-labelledby="Edit Text"
        aria-describedby="Edit Text in Meme Image"
    >
        <DialogTitle>
            Edit Text
            <IconButton 
                className={classes.IconButton_closeDialog}
                onClick={onClose}
            >
                <ClearIcon />
            </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent style={{padding: 24}}>
            <TextEditor />
        </DialogContent>
        <Divider />
        <DialogActions>
            <Button 
                onClick={onClose} 
                variant="outlined"
                size="large"
            >
                Reset
            </Button>
            <Button 
                onClick={onClose} 
                variant="contained" 
                color="primary"
                size="large"
            >
                Save
            </Button>
        </DialogActions>
    </Dialog>
);

const IconDialog = ({ classes, open, onClose }) => (
    <Dialog
        open={open}
        onClose={onClose}
        maxWidth="md"
        aria-labelledby="Edit Text"
        aria-describedby="Edit Text in Meme Image"
    >
        <DialogTitle>
            Choose Icons
            <IconButton 
                className={classes.IconButton_closeDialog}
                onClick={onClose}
            >
                <ClearIcon />
            </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent style={{padding: 24}}>
            <IconList />
        </DialogContent>
        <Divider />
        <DialogActions>
        <Button 
            onClick={onClose} 
            variant="contained" 
            color="primary"
        >
            Add to Meme
        </Button>
        </DialogActions>
    </Dialog>
);

class MemeEditor extends React.Component {
    state = {
        imageUrl: 'https://picsum.photos/750/570/?random',
        isTextDialogOpen: false,
        isIconDialogOpen: false
    };

    toggleTextDialog = () => {
        this.setState({ isTextDialogOpen: !this.state.isTextDialogOpen });
    };
    toggleIconDialog = () => {
        this.setState({ isIconDialogOpen: !this.state.isIconDialogOpen });
    };

    componentDidMount() {
        const { refs, props, state } = this;
        const canvas = refs.canvas;
        const canvasContext = canvas.getContext('2d');
        const image = new Image();
        canvas.width = window.outerWidth > 750 ? 750 : window.outerWidth;
        canvas.height = canvas.width * 0.76;
        image.src = state.imageUrl;
        image.onload = function() {
            canvasContext.drawImage(image, 0, 0);
            canvas.classList.add(props.classes.canvas_state_ready);
        };
    }

    render() {
        const { className, classes } = this.props;

        return (
            <Typography component="div" className={`${className || ''} ${classes.root}`}>
                <TextDialog
                    open={this.state.isTextDialogOpen}
                    onClose={this.toggleTextDialog}
                    classes={classes}
                />
                <IconDialog
                    open={this.state.isIconDialogOpen}
                    onClose={this.toggleIconDialog}
                    classes={classes}
                />
                <Typography 
                    className={classes.Typography_title} 
                    component="h3" 
                    variant="h5"
                >Add Text or icons to "XYZ" memes</Typography>
                <Typography className={classes.canvasContainer} component="div">
                    <CircularProgress className={classes.CircularProgress} />                
                    <canvas
                        className={classes.canvas} 
                        ref="canvas" 
                    />
                </Typography>
                <Toolbar className={classes.Toolbar}>
                    <Button 
                        className={classes.Button} 
                        variant="outlined"
                        onClick={this.toggleTextDialog}
                    >
                        <FormatShapesIcon className={classes.icon} />
                        Add Text
                    </Button>
                    <Button 
                        className={classes.Button} 
                        variant="outlined"
                        onClick={this.toggleIconDialog}
                    >
                        <InsertEmoticonIcon className={classes.icon} />
                        Add Icon
                    </Button>
                </Toolbar>
            </Typography>
        );
    }
}

MemeEditor.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MemeEditor);