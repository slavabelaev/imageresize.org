import React, { Component } from 'react';
import './ImageResizePage.scss';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ImageResizer from '../../tools/ImageResizer/ImageResizer';

class ImageResizePage extends Component {
    state = {  }
    render() { 
        return (
            <main className="ImageResizePage _has_max-width">
                <header>
                    <Typography variant="h4" component="h1">Meme Maker</Typography>
                    <Typography variant="p">Upload Files below to start crop, resize, compress or edit your images</Typography>
                </header>
                
                <ImageResizer className="ImageResizePage__ImageResizer"></ImageResizer>

                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Typography variant="h5" component="h2">How does it work?</Typography>
                        <Typography variant="p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h5" component="h2">What does it do?</Typography>
                        <Typography variant="p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h5" component="h2">Why should I use it?</Typography>
                        <Typography variant="p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </Typography>
                    </Grid>
                </Grid>
            </main>
        );
    }
}
 
export default ImageResizePage;