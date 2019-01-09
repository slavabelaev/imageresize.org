import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './PrivacyPage.styles';

const PrivacyPage = ({ className, classes }) => (
    <article className={classNames(className, classes.root)}>
        <Typography variant="h1" gutterBottom>Privacy policy</Typography>
        <Typography variant="body1" gutterBottom>Our privacy policy is very simple. Your images are yours.You own them. When you upload images to ImageResize.org, we temporarily save them on our servers to process them and they are deleted automatically from our servers after 30 minutes - forever. We don't ask you for any other private information.</Typography>
        <Typography variant="body1" gutterBottom>If you choose to post the resized images to Facebook directly from ImageResize.org, and give us permission by connecting through Facebook, then we get your email id from Facebook and we store it in our database to keep a track of how many users are making use of the feature. Your email is not shared with anyone. If we ever send you an email, it will come with an unsubscribe link so you can remove yourself form our list.</Typography>
        <Typography variant="body1" gutterBottom>By using ImageResize.org, you consent to our privacy policy.</Typography>
        <Typography variant="body1" gutterBottom>We reserve the right to change our privacy policy at any time and in case we decide to change the privacy policy, we will post the changes on this page.</Typography>
    </article>
);
 
PrivacyPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrivacyPage);