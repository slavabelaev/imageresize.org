import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import ImageResizer from '../../tools/ImageResizer/ImageResizer';

const styles = theme => ({
    root: {
        maxWidth: 1170,
        margin: 'auto',
        padding: '70px 0'
    },
    header: {
        textAlign: 'center',
        marginBottom: 40
    }
});

class ImageResizePage extends React.Component {
    state = {  }
    render() { 
        const { classes } = this.props;

        return (
            <main className={classes.root}>
                <header className={classes.header}>
                    <Typography variant="h4" component="h1">Meme Maker</Typography>
                    <Typography variant="subtitle1">Upload Files below to start crop, resize, compress or edit your images</Typography>
                </header>
                
                <ImageResizer></ImageResizer>

                <Divider />
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Typography variant="h5" component="h2">How does it work?</Typography>
                        <Typography variant="subtitle1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h5" component="h2">What does it do?</Typography>
                        <Typography variant="subtitle1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h5" component="h2">Why should I use it?</Typography>
                        <Typography variant="subtitle1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </Typography>
                    </Grid>
                </Grid>
            </main>
        );
    }
}
 
ImageResizePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageResizePage);