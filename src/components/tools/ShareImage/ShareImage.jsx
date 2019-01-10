import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import AppContainer from '../../layouts/AppContainer/AppContainer'
import EmbedList from '../EmbedList/EmbedList';
import ShareLink from '../../common/ShareLink/ShareLink';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './ShareImage.styles';

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
            <div className={classNames(className, classes.root)}>
                <AppContainer maxWidth="md" className={classes.AppContainer}>
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
                </AppContainer>
                <AppContainer maxWidth="md" className={classes.AppContainer}>
                    <section className={classes.ShareOrDownload}>
                        <Typography
                            className={classes.ShareOrDownload_title}
                            component="h2"
                            variant="h3"
                        >Share or Download</Typography>
                        <ShareLink 
                            buttonsVariant="grouped" 
                            url={state.imageUrl} 
                        />
                    </section>
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
                </AppContainer>
                <Divider className={classes.Divider} />
                <AppContainer maxWidth="md" className={classes.AppContainer}>
                    <EmbedList
                        className={classes.EmbedList}
                        url={state.imageUrl}
                    />
                </AppContainer>
            </div>
        );
    }
}

ShareImage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShareImage);