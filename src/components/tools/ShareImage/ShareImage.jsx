import React from 'react';
import PropTypes from 'prop-types';
import {
    RedditShareButton,
    FacebookShareButton,
    TwitterShareButton,
    GooglePlusShareButton,
    PinterestShareButton,
    EmailShareButton,
    RedditIcon,
    FacebookIcon,
    TwitterIcon,
    GooglePlusIcon,
    PinterestIcon,
    EmailIcon
} from 'react-share';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import EmbedList from '../EmbedList/EmbedList';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './ShareImage.styles';

const ShareOrDownload = ({ className, classes, url }) => (
    <section className={className}>
        <Typography
            className={classes.ShareOrDownload_title}
            component="h2"
            variant="h3"
        >Share or Download</Typography>
        <div className={classes.buttonGroup}>
            <Button
                className={classes.buttonGroup_button}
                component={RedditShareButton}
                variant="outlined" 
                size="large"
                url={url}>
                <RedditIcon 
                    logoFillColor="#FF9800"
                    iconBgStyle={{fill: 'transparent'}} 
                />
            </Button>
            <Button
                className={classes.buttonGroup_button}
                component={FacebookShareButton}  
                variant="outlined" 
                size="large"
                url={url}>
                <FacebookIcon 
                    logoFillColor="#1976D2"
                    iconBgStyle={{fill: 'transparent'}} 
                />
            </Button>
            <Button
                className={classes.buttonGroup_button}
                component={TwitterShareButton}  
                variant="outlined" 
                size="large"
                url={url}>
                <TwitterIcon 
                    logoFillColor="#03A9F4"
                    iconBgStyle={{fill: 'transparent'}} 
                />
            </Button>
            <Button
                className={classes.buttonGroup_button}
                component={GooglePlusShareButton}  
                variant="outlined" 
                size="large"
                url={url}>
                <GooglePlusIcon 
                    logoFillColor="#F44336"
                    iconBgStyle={{fill: 'transparent'}} 
                />
            </Button>
            <Button
                className={classes.buttonGroup_button}
                component={PinterestShareButton}  
                variant="outlined" 
                size="large"
                url={url}>
                <PinterestIcon 
                    logoFillColor="#D32F2F"
                    iconBgStyle={{fill: 'transparent'}} 
                />
            </Button>
            <Button
                className={classes.buttonGroup_button}
                component={EmailShareButton}  
                variant="outlined" 
                size="large"
                url={url}>
                <EmailIcon
                    logoFillColor="#6EC3FA"
                    iconBgStyle={{fill: 'transparent'}} 
                />
            </Button>
        </div>
    </section>
)

class ShareImage extends React.Component {
    state = {
        imageUrl: 'https://picsum.photos/750/570/?random',
        maxWidth: 750,
        maxHeight: 570
    };
    
    render() {
        const { state, props } = this;
        const { className, classes } = props;

        return (
            <div className={`${className || ''} ${classes.root}`}>
                <div className={classes.container}>
                    <Typography
                        className={classes.Typography_title}
                        component="h2"
                        variant="h3">"XYZ" meme</Typography>
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
                </div>
                <div className={`${classes.container} ${classes.buttonsContainer}`}>
                    <ShareOrDownload 
                        className={classes.ShareOrDownload}
                        url={state.imageUrl}
                        classes={classes} 
                    />
                    <div className={classes.actions}>
                        <Button 
                            className={classes.Button}
                            target="_blank"
                            href={state.imageUrl}
                            download={true}
                            component="a"
                            size="large" 
                            color="secondary" 
                            variant="contained">Download</Button>
                        {props.onCreateNew ? (
                        <Button 
                            className={classes.Button}
                            onClick={props.onCreateNew}
                            size="large" 
                            color="primary" 
                            variant="contained">Create New</Button>
                        ) : null}
                    </div>
                </div>
                <Divider />
                <div className={classes.container}>
                    <EmbedList
                        className={classes.EmbedList}
                        url={state.imageUrl}
                    />
                </div>
            </div>
        );
    }
}

ShareImage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShareImage);