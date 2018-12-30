import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// Styles
import styles from './MemeEditor.styles';

const TextDialog = ({ open, onClose }) => (
    <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="Edit Text"
        aria-describedby="Edit Text in Meme Image"
    >
        <DialogTitle id="alert-dialog-title">Edit Text</DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
        </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={onClose} variant="outlined">
            Reset
        </Button>
        <Button onClick={onClose} variant="contained" color="primary" autoFocus>
            Save
        </Button>
        </DialogActions>
    </Dialog>
)

const IconDialog = ({ open, onClose }) => (
    <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="Edit Text"
        aria-describedby="Edit Text in Meme Image"
    >
        <DialogTitle id="alert-dialog-title">Choose Icons</DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
        </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={onClose} variant="outlined">
            Reset
        </Button>
        <Button onClick={onClose} variant="contained" color="primary" autoFocus>
            Save
        </Button>
        </DialogActions>
    </Dialog>
)

class MemeEditor extends React.Component {
    state = {
        imageUrl: 'https://picsum.photos/750/570/?random',
        isTextDialogOpen: false,
        isIconDialogOpen: false,
    };

    openTextDialog = () => {
        this.setState({ isTextDialogOpen: true });
    };
    
    closeTextDialog = () => {
        this.setState({ isTextDialogOpen: false });
    };

    openIconDialog = () => {
        this.setState({ isIconDialogOpen: true });
    };
    
    closeIconDialog = () => {
        this.setState({ isIconDialogOpen: false });
    };

    componentDidMount() {
        const { refs, props, state } = this;
        const canvas = refs.canvas;
        const canvasContext = canvas.getContext('2d');
        const image = new Image();
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
                    onClose={this.closeTextDialog}
                />
                <IconDialog
                    open={this.state.isIconDialogOpen}
                    onClose={this.closeIconDialog}
                />
                <Typography className={classes.Typography_title} component="h3" variant="h5">Add Text or icons to "XYZ" memes</Typography>
                <Typography className={classes.canvasContainer} component="div">
                    <CircularProgress className={classes.CircularProgress} />                
                    <canvas 
                        width="750"
                        height="570"
                        className={classes.canvas} 
                        ref="canvas" 
                    />
                </Typography>
                <Toolbar className={classes.Toolbar}>
                    <Button 
                        className={classes.Button} 
                        variant="outlined"
                        onClick={this.openTextDialog}
                    >
                        <FormatShapesIcon className={classes.icon} />
                        Add Text
                    </Button>
                    <Button 
                        className={classes.Button} 
                        variant="outlined"
                        onClick={this.openIconDialog}
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