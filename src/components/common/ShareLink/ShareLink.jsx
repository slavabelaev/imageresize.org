import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
    RedditShareButton,
    FacebookShareButton,
    TwitterShareButton,
    GooglePlusShareButton,
    PinterestShareButton,
    EmailShareButton
} from 'react-share';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import AppIcon from '../AppIcon/AppIcon';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './ShareLink.styles';

const ShareLinkLarge = ({ className, classes, url }) => (
    <div className={classNames(className, classes.root_grouped)}>
        <Button
            className={classes.Button_large}
            component={RedditShareButton}
            variant="outlined" 
            size="large"
            url={url}>
            <AppIcon icon="reddit" size="large" />
        </Button>
        <Button
            className={classes.Button_large}
            component={FacebookShareButton}  
            variant="outlined" 
            size="large"
            url={url}>
            <AppIcon icon="facebook" size="large" />
        </Button>
        <Button
            className={classes.Button_large}
            component={TwitterShareButton}  
            variant="outlined" 
            size="large"
            url={url}>
            <AppIcon icon="twitter" size="large" />
        </Button>
        <Button
            className={classes.Button_large}
            component={GooglePlusShareButton}  
            variant="outlined" 
            size="large"
            url={url}>
            <AppIcon icon="google-plus" size="large" />
        </Button>
        <Button
            className={classes.Button_large}
            component={PinterestShareButton}  
            variant="outlined" 
            size="large"
            url={url}>
            <AppIcon icon="pinterest" size="large" />
        </Button>
        <Button
            className={classes.Button_large}
            component={EmailShareButton}  
            variant="outlined" 
            size="large"
            url={url}>
            <AppIcon icon="envelope" size="large" />
        </Button>
    </div>
);


const ShareLinkSmall = ({ className, classes, url }) => (
    <div className={classNames(className, classes.root_rounded)}>
        <IconButton 
            className={classes.IconButton_rounded}
            component={RedditShareButton} 
            url={url}>
            <AppIcon icon="reddit" />
        </IconButton>
        <IconButton 
            className={classes.IconButton_rounded}
            component={FacebookShareButton} 
            url={url}>
            <AppIcon icon="facebook" />
        </IconButton>
        <IconButton 
            className={classes.IconButton_rounded}
            component={TwitterShareButton} 
            url={url}>
            <AppIcon icon="twitter" />
        </IconButton>
        <IconButton 
            className={classes.IconButton_rounded}
            component={GooglePlusShareButton} 
            url={url}>
            <AppIcon icon="google-plus" />
        </IconButton>
        <IconButton 
            className={classes.IconButton_rounded}
            component={PinterestShareButton} 
            url={url}>
            <AppIcon icon="pinterest" />
        </IconButton>
        <IconButton 
            className={classes.IconButton_rounded}
            component={EmailShareButton} 
            url={url}>
            <AppIcon icon="envelope" />
        </IconButton>
    </div>
);

class ShareLink extends React.Component {
    state = {}

    render() {
        const { props, state } = this;
        const { className, classes } = props;
        
        return (
            <div>
                {props.buttonsVariant === 'grouped' ? (
                    <ShareLinkLarge {...props} />
                ) : (
                    <ShareLinkSmall {...props} />
                )}
            </div>
        );
    }
}

ShareLink.propTypes = {
    classes: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired,
    buttonsVariant: PropTypes.oneOf(['rounded', 'grouped'])
};

export default withStyles(styles)(ShareLink);