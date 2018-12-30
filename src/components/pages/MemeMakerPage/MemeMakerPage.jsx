import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import MemeMaker from '../../tools/MemeMaker/MemeMaker';
// Styles
import styles from './MemeMakerPage.styles';

const MemeMakerPage = ({ className, classes }) => (
    <Typography component="div" className={`${className || ''} ${classes.root}`}>
        <Typography component="div" className={classes.contentContainer}>
            <Typography component="header" className={classes.header}>
                <Typography variant="h4" component="h1" gutterBottom>Meme Maker</Typography>
                <Typography variant="subtitle1" component="p">Upload Files below to start crop, resize, compress or edit your images</Typography>
            </Typography>
            <MemeMaker className={classes.MemeMaker} />
        </Typography>
        <Divider />
        <Grid className={classes.Grid_container} container spacing={40}>
            <Grid className={classes.Grid_item} item xs={12}>
                <Typography variant="h5" component="h2" gutterBottom>How does it work?</Typography>
                <Typography variant="subtitle1" component="p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h5" component="h2" gutterBottom>What does it do?</Typography>
                <Typography variant="subtitle1" component="p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h5" component="h2" gutterBottom>Why should I use it?</Typography>
                <Typography variant="subtitle1" component="p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </Typography>
            </Grid>
        </Grid>
    </Typography>
);
 
MemeMakerPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MemeMakerPage);