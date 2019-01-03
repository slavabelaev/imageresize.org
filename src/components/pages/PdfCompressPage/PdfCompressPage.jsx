import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import FileUploadManager from '../../tools/FileUploadManager/FileUploadManager';
// Styles
import styles from './PdfCompressPage.styles';

const PdfCompressPage = ({ className, classes }) => (
    <div className={`${className || ''} ${classes.root}`}>
        <header className={classes.header}>
            <Typography variant="h4" component="h1" gutterBottom>PDF Compress</Typography>
            <Typography variant="body1">Advanced PDF compressor for reducing file size without quality loss</Typography>
        </header>
        <div className={classes.contentContainer}>
            <FileUploadManager className={classes.FileUploadManager} />
        </div>
        <Divider />
        <Grid className={classes.Grid_container} container spacing={40}>
            <Grid className={classes.Grid_item} item xs={12}>
                <Typography variant="h5" component="h2" gutterBottom>How to Reduce PDF File Size?</Typography>
                <Typography component="div" variant="body1">
                    <p>In this section, we will explain all the steps that are required to compress a PDF file without losing quality:</p>
                    <ol>
                        <li>Click the "Choose PDF"button in the upload box (you can also drag and drop multiple PDF files for batch compressing).</li>
                        <li>Click on the blue "Compress PDF"button once you have selected all the PDFs you want to compress.</li>
                        <li>Observe the status of each PDF file as it changes from Uploading > Compressing > Done. The results table will list the PDF file size reduction and percentage size saved next to each PDF file.</li>
                        <li>Download compressed PDF files individually by clicking on the blue download arrow next to each file.</li>
                        <li>To download all files in ZIP format, click the "Download All"blue button (below the file table)</li>
                    </ol>
                </Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h5" component="h2" gutterBottom>Compress PDF Without Losing Quality</Typography>
                <Typography variant="body1">We understand that quality matters when dealing with PDF files because PDFs are often zoomed, printed, and contain graphs and figures. When compressing your PDF files we pay attention to quality and do our best to reduce file size without losing quality. Our advanced algorithm can determine the components of your PDFs such as objects, images, and their current compression levels and resolution. We then apply our compression algorithm only if we believe that doing so will not degrade the quality of these components.</Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={6}>
                <Typography variant="h5" component="h2" gutterBottom>Compress PDF Online</Typography>
                <Typography variant="body1">Our PDF compressor is 100% free and it operates entirely on the cloud. This means you do not need to install any software to compress your PDF files. Whether you are looking for a PDF compressor for mac, windows, or mobile devices, this tool can make your pdf smaller. We also remove all PDF files from our servers after 12 hours for security and privacy.</Typography>
            </Grid>
            <Grid className={classes.Grid_item} item xs={12}>
                <Typography variant="h5" component="h2" gutterBottom>Advanced PDF Compressor</Typography>
                <Typography variant="body1">We reduce PDF size by performing several optimization techniques. For example, if your PDF file is image heavy, this compressor will determine the current resolution of those images and compress them even further using the JPEG or JBIG2 lossless compression method while preserving quality. We also discard alternate and duplicate images along with page thumbnails to reduce PDF size further. Other optimizations may include: removing embedded fonts from PDF file (only when PDF contain common fonts), optimizing content streams (we use Flate compression method), and removing duplicate fonts and color profiles.</Typography>
            </Grid>
        </Grid>
    </div>
);
 
PdfCompressPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PdfCompressPage);