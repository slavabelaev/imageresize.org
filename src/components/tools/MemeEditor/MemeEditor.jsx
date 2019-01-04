import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ClearIcon from '@material-ui/icons/Clear';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
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
        aria-describedby="Edit Text in Meme Editor"
    >
        <DialogTitle>
            <Typography variant="h3">Edit Text</Typography>
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
        aria-labelledby="Choose Icons"
        aria-describedby="Choose Icons in Meme Editor"
    >
        <DialogTitle>
            <Typography variant="h3">Choose Icons</Typography>
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
    imageWidth = window.outerWidth > this.imageWidth ? this.imageWidth : window.outerWidth;
    imageHeight = (this.imageWidth * 0.76);

    state = {
        imageUrl: `https://picsum.photos/${this.imageWidth}/${this.imageHeight}/?random`,
        imageWidth: this.imageWidth,
        imageHeight: this.imageHeight,
        isTextDialogOpen: false,
        isIconDialogOpen: false
    };

    componentDidMount() {
        const { refs, props, state } = this;
        const canvas = refs.canvas;
        const canvasContext = canvas.getContext('2d');
        const image = new Image();
        canvas.width = state.imageWidth;
        canvas.height = state.imageHeight;
        image.src = state.imageUrl;
        image.onload = function() {
            canvasContext.drawImage(image, 0, 0);
            canvas.classList.add(props.classes.canvas_state_ready);
        };
    }

    handleTextDialogToggle = () => {
        this.setState({ isTextDialogOpen: !this.state.isTextDialogOpen });
    };

    handleIconDialogToggle = () => {
        this.setState({ isIconDialogOpen: !this.state.isIconDialogOpen });
    };

    render() {
        const { className, classes } = this.props;

        return (
            <div className={`${className || ''} ${classes.root}`}>
                <TextDialog
                    open={this.state.isTextDialogOpen}
                    onClose={this.handleTextDialogToggle}
                    classes={classes}
                />
                <IconDialog
                    open={this.state.isIconDialogOpen}
                    onClose={this.handleIconDialogToggle}
                    classes={classes}
                />
                <Typography 
                    className={classes.Typography_title} 
                    component="h2"
                    variant="h3">Add Text or icons to "XYZ" memes</Typography>
                <div className={classes.canvasContainer}>
                    <CircularProgress className={classes.CircularProgress} />                
                    <canvas
                        className={classes.canvas} 
                        ref="canvas"
                    />
                </div>
                <Toolbar className={classes.Toolbar}>
                    <Button 
                        className={classes.Button} 
                        variant="outlined"
                        onClick={this.handleTextDialogToggle}
                    >
                        <FormatShapesIcon className={classes.icon} />
                        Add Text
                    </Button>
                    <Button 
                        className={classes.Button} 
                        variant="outlined"
                        onClick={this.handleIconDialogToggle}
                    >
                        <InsertEmoticonIcon className={classes.icon} />
                        Add Icon
                    </Button>
                </Toolbar>
            </div>
        );
    }
}

MemeEditor.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MemeEditor);