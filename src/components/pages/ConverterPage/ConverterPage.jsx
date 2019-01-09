import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import AppContainer from '../../layouts/AppContainer/AppContainer';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './ConverterPage.styles';

const ConverterPage = ({ className, classes }) => {
    const converterPath = window.location.pathname.replace('/convert/', '');
    const converterPathItems = converterPath.split('-');
    const convertFrom = converterPathItems[0].toUpperCase();
    const convertTo = converterPathItems[2].toUpperCase();

    return (
        <div className={classNames(className, classes.root)}>
            <AppContainer>
                <header className={classes.header}>
                    <Typography variant="h1" gutterBottom>Convert {convertFrom} to {convertTo}</Typography>
                    <Typography variant="body1">Convert media files online from one format into another.</Typography>
                    <Button 
                        className={classes.Button}
                        component="a" 
                        target="_blank"
                        href={'https://www.freeconvert.com/' + converterPath}
                        variant="contained" 
                        color="secondary"
                    >Go to Converter</Button>
                </header>
            </AppContainer>
            <Divider />
            <AppContainer>
                <Grid container spacing={40}>
                    <Grid className={classes.Grid_item} item xs={12}>
                        <Typography variant="h2" gutterBottom>How does it work?</Typography>
                        <Typography variant="body1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</Typography>
                    </Grid>
                    <Grid className={classes.Grid_item} item md={6}>
                        <Typography variant="h2" gutterBottom>What does it do?</Typography>
                        <Typography variant="body1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</Typography>
                    </Grid>
                    <Grid className={classes.Grid_item} item md={6}>
                        <Typography variant="h2" gutterBottom>Why should I use it?</Typography>
                        <Typography variant="body1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</Typography>
                    </Grid>
                </Grid>
            </AppContainer>
        </div>
    );
};
 
ConverterPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConverterPage);