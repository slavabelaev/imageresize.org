import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import ImageResizeTool from '../../tools/ImageResizeTool/ImageResizeTool';
// Styles
import styles from './ConverterPage.styles';

const ConverterPage = ({ className, classes }) => (
    <div className={`${className || ''} ${classes.root}`}>
        <div className={classes.contentContainer}>
            <header className={classes.header}>
                <Typography variant="h4" component="h1">Convert JPG to PDF</Typography>
                <Typography variant="subtitle1" component="p">Upload Files below to start crop, resize, compress or edit your images</Typography>
            </header>
            <ImageResizeTool className={classes.ImageResizeTool} />
        </div>
        <Divider />
        <Grid className={classes.Grid_container} container spacing={40}>
            <Grid className={classes.Grid_item} item xs={12}>
                <Typography variant="h5" component="h2">How does it work?</Typography>
                <Typography variant="subtitle1" component="p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h5" component="h2">What does it do?</Typography>
                <Typography variant="subtitle1" component="p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h5" component="h2">Why should I use it?</Typography>
                <Typography variant="subtitle1" component="p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </Typography>
            </Grid>
        </Grid>
    </div>
);
 
ConverterPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConverterPage);