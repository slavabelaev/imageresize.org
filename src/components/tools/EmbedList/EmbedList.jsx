import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './EmbedList.styles';


const copyToClipboard = copyString => {
    const element = document.createElement('textarea');
    element.value = copyString;
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);
};

class EmbedList extends React.Component {
    state = {
        imageUrl: this.props.url,
        isCopiedMessageShow: false
    }

    handleCopy = (copyString) => {
        copyToClipboard(copyString);
        this.setState({ isCopiedMessageShow: true });
    }

    handleCopiedMessageHide = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ isCopiedMessageShow: false });
    };

    render() {
        const { state, props } = this;
        const { className, classes } = props;
        const embedList = [
            { title: 'Direct Link', content: state.imageUrl },
            { title: 'Image Link', content: state.imageUrl },
            { title: 'HTML Image', content: `<img src="${state.imageUrl}" alt="">` },
            { title: 'BBCode', content: `[img]${state.imageUrl}[/img]` },
        ];
        
        return (
            <section className={`${className || ''} ${classes.root}`}>
                <Typography 
                    component="h3" 
                    variant="h5"
                    gutterBottom
                >Image Links</Typography>
    
                {embedList.map((embed, index) => 
                    <TextField
                        label={embed.title}
                        defaultValue={embed.content}
                        className={classes.TextField}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        InputProps={{
                            readOnly: true,
                            endAdornment: (
                                <Button 
                                    variant="outlined" 
                                    size="large"
                                    onClick={() => this.handleCopy(embed.content)}
                                >Copy</Button>
                            )
                        }}
                        key={index}
                    />
                )}
    
                <Snackbar
                    open={state.isCopiedMessageShow}
                    onClose={this.handleCopiedMessageHide}
                    autoHideDuration={1200}
                    message="Copied!"
                />
            </section>
        )
    }
}

EmbedList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmbedList);