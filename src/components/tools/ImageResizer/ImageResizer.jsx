import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
// Example Data
import EXAMPLE_DATA from './ImageResizer.data.json';

const styles = theme => ({
    root: {

    },
    Tabs: {
        marginBottom: -.5,
        '& [class*=MuiTabs-indicator]': {
            display: 'none'
        }
    },
    Tab: {
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius,
        border: '1px solid',
        borderColor: theme.palette.grey[500],
        borderBottomWidth: 0,
        backgroundColor: 'initial',
        opacity: .54,
        textTransform: 'initial',
        fontSize: '1.125rem',
        fontWeight: 'initial',
        color: theme.palette.grey[700],
        transition: theme.transitions.create(),
        '&:not([aria-selected=true]):hover': {
            opacity: .87
        },
        '&[aria-selected=true]': {
            backgroundColor: theme.palette.grey[50]
        },
        '&+button': {
            marginLeft: -1
        }
    },
    SwipeableViews: {
        border: '1px solid',
        borderColor: theme.palette.grey[500],
        borderRadius: theme.shape.borderRadius,
        borderTopLeftRadius: 0
    },
    Toolbar: {
        padding: theme.spacing.unit * 3,
        borderBottom: '1px solid',
        borderBottomColor: theme.palette.grey[500],
        backgroundColor: theme.palette.grey[50]
    },
    Card: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: theme.palette.divider,
        transition: theme.transitions.create(),
        '&:hover': {
            borderColor: theme.palette.primary.main,
            boxShadow: `${theme.palette.primary.main} 0 0 0 1px, ${theme.palette.primary.main} 0 0 8px`
        }
    },
    CardMedia: {
        height: 120
    },
    CardHeader: {
        padding: 12
    },
    CardHeader_title: {
        height: '3em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign: 'center',
        color: theme.palette.grey[700]
    },
    Button_addCaption: {
        backgroundColor: '#EBEFF1',
        borderColor: '#C2CBD0',
        margin: 0
    },
    TextField_search: {
        maxWidth: 600,
        margin: 'auto',
        backgroundColor: theme.palette.common.white
    },
    SearchIcon: {
        marginRight: theme.spacing.unit
    },
    inputFile: {
        display: 'none',
    },
    tabContainer: {
    },
    gridContainer: {
        padding: theme.spacing.unit * 3
    },
    progressContainer: {
        paddingTop: theme.spacing.unit * 3,
        textAlign: 'center'
    }
});

class ImageResizer extends React.Component {
    state = {
        activeTabIndex: 0,
        completed: 0,
        buffer: 80,
        images: EXAMPLE_DATA.images
    };
    
    handleTabChange = (event, activeTabIndex) => {
        this.setState({ activeTabIndex });
    };

    handleTabChangeIndex = index => {
        this.setState({ activeTabIndex: index });
    };

    render() {
        const props = this.props;
        const classes = this.props.classes;
        const { activeTabIndex } = this.state;
        
        return (
            <div className={`${props.className || ''} ${classes.root}`}>
                <Tabs
                    className={classes.Tabs}
                    value={activeTabIndex}
                    onChange={this.handleTabChange}
                    indicatorColor="primary">
                    <Tab 
                        className={classes.Tab}
                        label="Choose Meme" />
                    <Tab 
                        className={classes.Tab} 
                        label="Upload Image" />
                </Tabs>
                <SwipeableViews
                    className={classes.SwipeableViews} 
                    index={activeTabIndex}
                    onChangeIndex={this.handleTabChangeIndex}>
                    <div className={classes.tabContainer}>
                        <Toolbar className={classes.Toolbar}>
                            <TextField
                                id="outlined-search"
                                placeholder="Search memes"
                                type="text"
                                margin="normal"
                                fullWidth
                                variant="outlined"
                                className={classes.TextField_search}
                                InputProps={{
                                    startAdornment: <SearchIcon className={classes.SearchIcon} />,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="Clear Search String"
                                                onClick={this.handleClearSearch}>
                                                <ClearIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }} />
                        </Toolbar>
                        <div className={classes.gridContainer}>
                            <Grid container spacing={24}>
                                {this.state.images.map((image, index) => 
                                    <Grid item xs={2} key={index}>
                                        <Card className={classes.Card} elevation={0}>
                                            <CardHeader 
                                                className={classes.CardHeader}
                                                title={
                                                    <Typography className={classes.CardHeader_title}>{image.title}</Typography>
                                                } />
                                            <CardMedia image={image.image} className={classes.CardMedia} />
                                            <CardActions>
                                                <Button className={classes.Button_addCaption} variant="outlined" fullWidth size="small">Add Caption</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )}
                            </Grid>
                            <div className={classes.progressContainer}>
                                <CircularProgress />
                            </div>
                        </div>
                    </div>
                    <div className={classes.tabContainer}>
                        <input
                            accept="image/*"
                            className={classes.inputFile}
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <Button 
                                variant="contained"
                                size="large" 
                                color="secondary" 
                                component="span" 
                                className={classes.Button}>
                            Choose Image
                            </Button>
                        </label>
                        <Typography variant="subtitle1">or, drop PDF files here</Typography>
                        <TextField
                            id="outlined-simple-start-adornment"
                            variant="outlined"
                            fullWidth
                            placeholder="http://"
                            type="url"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Button
                                            variant="contained"
                                            size="large"
                                            color="secondary">Go</Button>
                                    </InputAdornment>
                                )
                            }} />
                        <LinearProgress 
                            color="secondary" 
                            variant="buffer" 
                            value={this.state.completed} 
                            valueBuffer={this.state.buffer} />
                    </div>
                </SwipeableViews>
            </div>
        );
    }
}

ImageResizer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageResizer);