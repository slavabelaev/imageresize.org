import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import AppContainer from '../../layouts/AppContainer/AppContainer';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './TermsOfServicePage.styles';

const TermsOfServicePage = ({ className, classes }) => (
    <article className={classNames(className, classes.root)}>
        <AppContainer>
            <section className={classes.section}>
                <Typography variant="h1" gutterBottom>Terms of Service</Typography>
                <Typography variant="body1">By using our website you accept these terms of use, including our [Privacy Policy](/privacy). If you don’t agree, your remedy is to stop using our website. We may update these terms of use from time to time, so you should revisit each time you use our website.</Typography>
            </section>
            <section className={classes.section}>
                <Typography variant="h2" gutterBottom>Entire Agreement</Typography>
                <Typography variant="body1">These terms of use forms the entire understanding between you and us with respect to your use of our website.</Typography>
            </section>
            <section className={classes.section}>
                <Typography variant="h2" gutterBottom>No Unlawful or Prohibited Use</Typography>
                <Typography variant="body1">As a condition of your use of this website, you warrant that you will not use this website for any purpose that is unlawful or prohibited by these terms of use.</Typography>
            </section>
            <section className={classes.section}>
                <Typography variant="h2" gutterBottom>Links Disclaimer</Typography>
                <Typography variant="body1"><strong>We have no control over the information accessed through links from our site. You use links at your own risk.</strong></Typography>
            </section>
            <section className={classes.section}>
                <Typography variant="h2" gutterBottom>Termination/Access Restriction</Typography>
                <Typography variant="body1">We reserve the right to terminate your access to this website and the related services or any portion of it at any time, without notice.</Typography>
            </section>
            <section className={classes.section}>
                <Typography variant="h2" gutterBottom>Disclaimer</Typography>
                <Typography variant="body1">Anything contained on this website is provided “as is” without warranty or condition of any kind. While we attempt to ensure that the content of our website is correct, we cannot guarantee its reliability, accuracy or completeness because this information changes all the time. You agree that no information or advice provided by us constitutes medical, legal or financial advice or advice of any other regulated industry and users should not rely exclusively on any such information or advice.</Typography>
            </section>
            <section className={classes.section}>
                <Typography variant="h2" gutterBottom>Limitation of Liability</Typography>
                <Typography variant="body1">We will not be liable to you or any other person or entity for any damages whatsoever arising as a result of your use of this website in any way. In addition, where warranties are implied by law, you acknowledge and agree that the total aggregate liability to us is limited to the total amount paid by you for the particular services that are the subject of the cause of action, even if those services were provided to you without cost.</Typography>
                <Typography variant="body1">This limitation of liability applies to the fullest extent permitted by law, and shall survive any termination or expiration of this agreement or your use of this website or the services found on this website.</Typography>
            </section>
            <section className={classes.section}>
                <Typography variant="h2" gutterBottom>Applicable Law</Typography>
                <Typography variant="body1">If any matter concerning this website “ImageResize.org” shall be brought before a court of law, pre- or post-arbitration, viewer, visitor, member, subscriber or customer agrees to that the sole and proper jurisdiction to be the state, city and country of the website owner unless otherwise here specified. In the event that litigation is in a federal court, the proper court shall be the closest federal court to the web site owner’s address.</Typography>
            </section>
            <section className={classes.section}>
                <Typography variant="h2" gutterBottom>Copyright</Typography>
                <Typography variant="body1">All contents of this website are copyright by ImageResize.org. Unless otherwise specified, we own or are licensed to use the copyright in all material on our website. Please contact us should you require permission to reproduce any of the contents of this site. We may or may not be able to authorize use, particularly of trademarks or materials of other companies.</Typography>
                <Typography variant="body1">Only your personal use of our copyright materials is permitted, which means that you may access, download, or print such materials for your personal use only. Commercial use of any sort is expressly prohibited.</Typography>
            </section>
            <section className={classes.section}>
                <Typography variant="h2" gutterBottom>Material Connection Disclosure:</Typography>
                <Typography variant="body1">We may promote products or services offered by other individuals or businesses and we may be paid affiliate commissions on any purchase you make. You will not be required to purchase anything we recommend. You should always perform your own due diligence before purchasing a product or service mentioned on this website ImageResize.org.All recommendations are made in good faith based upon the opinion of the writer at the time a product or service is mentioned on the website.</Typography>
            </section>
            <section className={classes.section}>
                <Typography variant="body1"><b>Service Contact:</b> <a target="_blank" href="mailto:imageresize.org@gmail.com" className={classes.url}>{`<imageresize.org@gmail.com>`}</a></Typography>
            </section>
        </AppContainer>
    </article>
);
 
TermsOfServicePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TermsOfServicePage);