import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

import CircularProgress from '@material-ui/core/CircularProgress';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import TextEditor from './TextEditor';
// Styles
import styles from './MemeEditor.styles';

const TextDialog = ({ open, onClose }) => (
    <Dialog
        open={open}
        onClose={onClose}
        maxWidth="md"
        aria-labelledby="Edit Text"
        aria-describedby="Edit Text in Meme Image"
    >
        <DialogTitle id="alert-dialog-title">Edit Text</DialogTitle>
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

class IconDialog extends React.Component {
    state = {
        iconUrls: [
            'https://picsum.photos/100/100/?random&1',
            'https://picsum.photos/100/100/?random&2',
            'https://picsum.photos/100/100/?random&3',
            'https://picsum.photos/100/100/?random&4',
            'https://picsum.photos/100/100/?random&5',
            'https://picsum.photos/100/100/?random&6',
            'https://picsum.photos/100/100/?random&7',
            'https://picsum.photos/100/100/?random&8',
            'https://picsum.photos/100/100/?random&9',
            'https://picsum.photos/100/100/?random&10',
            'https://picsum.photos/100/100/?random&11',
            'https://picsum.photos/100/100/?random&12'
        ]
    }

    render() {
        const { iconUrls } = this.state;
        const { open, onClose } = this.props;

        return (
            <Dialog
                open={open}
                onClose={onClose}
                maxWidth="md"
                aria-labelledby="Edit Text"
                aria-describedby="Edit Text in Meme Image"
            >
                <DialogTitle id="alert-dialog-title">Choose Icons</DialogTitle>
                <Divider />
                <DialogContent>
                    <Grid container spacing={12}>
                        {iconUrls.map((iconUrl, index) => (
                            <Grid item xs={2} key={index}>
                                <FormControlLabel 
                                    style={{margin: 0}}
                                    value={iconUrl} 
                                    name="icon"
                                    control={<Radio style={{position: 'absolute'}} />}
                                    label={<img src={iconUrl} width="100" height="100" />}
                                />
                            </Grid>
                        ))}
                    </Grid>
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
        )
    };
}

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
                />
                <IconDialog
                    open={this.state.isIconDialogOpen}
                    onClose={this.toggleIconDialog}
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