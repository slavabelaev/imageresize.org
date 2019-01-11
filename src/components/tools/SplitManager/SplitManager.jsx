import React from 'react';
import classNames from 'classnames';

import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear';
import LinearProgress from '@material-ui/core/LinearProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './SplitManager.styles';

const TabContainer = ({ className, children }) => (
    <Typography className={className || ''} component="div">
        {children}
    </Typography>
);
  
TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class SplitManager extends React.Component {
    state = {
        activeTabIndex: 0,
        ranges: [
            { from: null, to: null },
            { from: null, to: null },
        ],
        needMergeInSingleFile: false
    };

    handleToggleCheckbox = (event) => {
        const checkboxStateProperty = event.target.name;
        const checkStatus = this.state[checkboxStateProperty];
        this.setState({ [checkboxStateProperty]: !checkStatus });
    }
    
    handleTabChange = (event, activeTabIndex) => {
        this.setState({ activeTabIndex });
    };

    handleTabSwipe = activeTabIndex => {
        this.setState({ activeTabIndex });
    };

    handleAddRange = () => {
        const ranges = this.state.ranges;
        ranges.push({ from: null, to: null });
        this.setState({ ranges });
    }
    
    handleRemoveRange = (rangeIndex) => {
        const ranges = this.state.ranges;
        ranges.splice(rangeIndex, 1);
        this.setState({ ranges });
    }

    render() {
        const { props, state } = this;
        const { className, classes } = props;
        const { activeTabIndex } = state;

        return (
            <div className={classNames(className, classes.root)}>
                <Tabs
                    className={classes.Tabs}
                    value={activeTabIndex}
                    onChange={this.handleTabChange}
                    indicatorColor="primary">
                    <Tab 
                        className={classes.Tab}
                        label="Split PDF by Range" />
                    <Tab 
                        className={classes.Tab} 
                        label="Extract all pages" />
                </Tabs>
                <SwipeableViews
                    ref="swipeableViews"
                    animateHeight
                    className={classes.SwipeableViews} 
                    index={activeTabIndex}
                    onChangeIndex={this.handleTabSwipe}>
                    <TabContainer className={classes.TabContainer}>
                        <div className={classes.tabContent}>
                            <Button 
                                className={classes.Button_addRange}
                                variant="outlined" 
                                onClick={this.handleAddRange}
                            >+ Add Range</Button>
                            <List className={classes.List_range}>
                                {state.ranges.map((range, index) => (
                                <ListItem className={classes.ListItem_range}>
                                    <Grid container spacing={24} className={classes.Grid_range}>
                                        <Grid item xs={12} md={3}>
                                            <Typography variant="subtitle1">Split pages</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextField 
                                                className={classes.TextField_range}
                                                variant="outlined"
                                                label="From"
                                                type="number"
                                                fullWidth
                                                value={range.from}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextField 
                                                className={classes.TextField_range}
                                                variant="outlined"
                                                label="To"
                                                type="number"
                                                fullWidth
                                                value={range.to}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={1} className={classes.Grid_removeAction}>
                                            <IconButton
                                                aria-label="Remove uploading"
                                                onClick={() => this.handleRemoveRange(index)}>
                                                <ClearIcon fontSize="small" />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                ))}
                                <div className={classes.contentActionsContainer}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox 
                                                name="needMergeInSingleFile"
                                                checked={state.needMergeInSingleFile} 
                                                onChange={this.handleToggleCheckbox}
                                            />
                                        }
                                        label="Merge all ranges into a single PDF file"
                                    />
                                </div>
                            </List>
                       </div> 
                    </TabContainer>
                    <TabContainer className={classes.TabContainer}>
                        <div className={classes.tabContent}>
                            <Typography variant="body1">Every page of this PDF file will be converted in one separated PDF file.</Typography>
                        </div>
                    </TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

SplitManager.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SplitManager);