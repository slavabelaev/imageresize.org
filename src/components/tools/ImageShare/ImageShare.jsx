import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './ImageShare.styles';

class ImageShare extends React.Component {
    state = {
        imageUrl: 'https://picsum.photos/750/570/?random',
        maxWidth: 750,
        maxHeight: 570
    };

    copy = (content) => {

    }
    
    render() {
        const { className, classes } = this.props;
        const { state } = this;
        const embeds = [
            { title: 'Direct Link', content: state.imageUrl },
            { title: 'Image Link', content: state.imageUrl },
            { title: 'HTML Image', content: `<img src="${state.imageUrl}" alt="">` },
            { title: 'BBCode', content: `[img]${state.imageUrl}[/img]` },
        ];

        return (
            <div className={`${className || ''} ${classes.root}`}>
                <Typography 
                    className={classes.Typography_title} 
                    component="h3" 
                    variant="h5">"XYZ" meme</Typography>
                <div className={classes.imageContainer}>
                    <CircularProgress className={classes.CircularProgress} />                
                    <img 
                        src={state.imageUrl} 
                        className={classes.image} 
                        width={state.maxWidth}
                        height={state.maxHeight}
                        onLoad={(event) => event.target.classList.add(classes.image_state_ready)}
                        alt=""
                    />
                </div>
                <Divider />
                <section>
                    <Typography 
                        component="h3" 
                        variant="h5"
                        gutterBottom
                    >Image Links</Typography>

                    {embeds.map((embed) => 
                        <TextField
                            id="outlined-read-only-input"
                            label={embed.title}
                            defaultValue={embed.content}
                            className={classes.textField}
                            margin="normal"
                            fullWidth
                            InputProps={{
                                readOnly: true,
                                endAdornment: (
                                    <Button 
                                        variant="outlined" 
                                        size="large"
                                        onClick={() => this.copy(embed.content)}
                                    >Copy</Button>
                                )
                            }}
                            variant="outlined"
                        />
                    )}
                </section>
            </div>
        );
    }
}

ImageShare.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageShare);