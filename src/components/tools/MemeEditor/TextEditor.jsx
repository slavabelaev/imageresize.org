import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { HuePicker } from 'react-color';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatSizeIcon from '@material-ui/icons/FormatSize';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import LensIcon from '@material-ui/icons/Lens';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './TextEditor.styles';

class TextEditor extends React.Component {
    styleTypes = [
        {
            fontSize: 20,
            color: '#616161',
            textAlign: 'center',
            WebkitTextStrokeWidth: 0,
            WebkitTextStrokeColor: '#000000',
            fontWeight: 'normal',
            fontStyle: 'normal',
            textTransform: 'uppercase',
            textShadow: 'none',
            lineHeight: 2.4
        },
        {
            fontSize: 24,
            color: '#1A8D5F',
            textAlign: 'right',
            WebkitTextStrokeWidth: 0,
            WebkitTextStrokeColor: '#000000',
            fontWeight: 'bold',
            fontStyle: 'normal',
            textTransform: 'uppercase',
            textShadow: 'none',
            lineHeight: 2.4
        },
        {
            fontSize: 32,
            color: '#D0021B',
            textAlign: 'left',
            WebkitTextStrokeWidth: 0,
            WebkitTextStrokeColor: '#000000',
            fontWeight: 'normal',
            fontStyle: 'normal',
            textTransform: 'uppercase',
            textShadow: 'none',
            lineHeight: 2.4
        }
    ];
    state = {
        text: 'This is my image text',
        styles: this.styleTypes[0],
        styleTypes: this.styleTypes,

        isColorPickerShow: false,
        isTextStrokeColorPickerShow: false,
    };

    handlePropertyChange = ({ target }) => {
        this.setState({ [target.name]: target.value ? target.value : target.checked });
    }

    handleStyleTypeChange = ({ target }) => {
        this.setState({ styles: target.value });
    };

    handleStylePropertyChange = ({ target }) => {
        const styles = {...this.state.styles};
        styles[target.name] = target.value ? target.value : target.checked;
        this.setState({ styles: styles });
    };

    handleTextColorChange = ({ hex }) => {
        const styles = {...this.state.styles};
        styles.color = hex;
        this.setState({ styles: styles });
    }

    handleTextStrokeColorChange = ({ hex }) => {
        const styles = {...this.state.styles};
        styles.WebkitTextStrokeColor = hex;
        this.setState({ styles: styles });
    }

    render() {
        const { className, classes } = this.props;
        const { styleTypes, text, styles } = this.state;
        
        return (
            <div className={classNames(className, classes.root)}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <TextField
                            rows={1}
                            multiline
                            defaultValue={text}
                            variant="outlined"
                            fullWidth
                            inputProps={{ style: styles }}
                            onChange={this.handleStylePropertyChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* Row */}
                        <Grid container className={classes.Grid_control}>
                            <Grid item xs={12} md={4}>
                                <Typography
                                    className={classes.label} 
                                    variant="body1">Type</Typography>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <FormControl variant="outlined" fullWidth>
                                    <Select
                                        value={styleTypes[0]}
                                        onChange={this.handleStyleTypeChange}
                                        input={
                                            <OutlinedInput
                                                name="styleType"
                                                id="style-type"
                                            />
                                        }
                                    >
                                    {styleTypes.map((styleType, index) => (
                                        <MenuItem 
                                            value={styleType} 
                                            style={styleType} 
                                            key={index}
                                        >
                                            Font {index + 1}
                                        </MenuItem>
                                    ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        {/* /Row */}
                        {/* Row */}
                        <Grid container className={classes.Grid_control}>
                            <Grid item xs={12} md={4}>
                                <Typography
                                    className={classes.label} 
                                    variant="body1">Properties</Typography>
                            </Grid>
                            <Grid item xs={12} md={8} className={classes.Grid_controls}>
                                <Radio
                                    className={classes.control_dense}
                                    checked={styles.textAlign === 'left'}
                                    onChange={this.handleStylePropertyChange}
                                    value="left"
                                    name="textAlign"
                                    icon={<FormatAlignLeftIcon />}
                                    checkedIcon={<FormatAlignLeftIcon />}
                                    color="primary"
                                    aria-label="Left"
                                />
                                <Radio
                                    className={classes.control_dense}
                                    checked={styles.textAlign === 'center'}
                                    onChange={this.handleStylePropertyChange}
                                    value="center"
                                    name="textAlign"
                                    icon={<FormatAlignCenterIcon />}
                                    checkedIcon={<FormatAlignCenterIcon />}
                                    color="primary"
                                    aria-label="Center"
                                />
                                <Radio
                                    className={classes.control_dense}
                                    checked={styles.textAlign === 'right'}
                                    onChange={this.handleStylePropertyChange}
                                    value="right"
                                    name="textAlign"
                                    icon={<FormatAlignRightIcon />}
                                    checkedIcon={<FormatAlignRightIcon />}
                                    color="primary"
                                    aria-label="Right"
                                />
                                <Checkbox
                                    className={classes.control_dense}
                                    checked={styles.fontWeight === 'bold'}
                                    onChange={this.handleStylePropertyChange}
                                    name="fontWeight"
                                    value={styles.fontWeight !== 'bold' ? 'bold' : 'normal'}
                                    icon={<FormatBoldIcon />}
                                    checkedIcon={<FormatBoldIcon />}
                                    color="primary"
                                    aria-label="Bold"
                                />
                                <Checkbox
                                    className={classes.control_dense}
                                    checked={styles.textTransform === 'uppercase'}
                                    onChange={this.handleStylePropertyChange}
                                    name="textTransform"
                                    value={styles.textTransform !== 'uppercase' ? 'uppercase' : 'none'}
                                    icon={<FormatSizeIcon />}
                                    checkedIcon={<FormatSizeIcon />}
                                    color="primary"
                                    aria-label="Uppercase"
                                />
                                <Checkbox
                                    className={classes.control_dense}
                                    checked={styles.fontStyle === 'italic'}
                                    onChange={this.handleStylePropertyChange}
                                    name="fontStyle"
                                    value={styles.fontStyle !== 'italic' ? 'italic' : 'normal'}
                                    icon={<FormatItalicIcon />}
                                    checkedIcon={<FormatItalicIcon />}
                                    color="primary"
                                    aria-label="Italic"
                                />
                            </Grid>
                        </Grid>
                        {/* /Row */}
                        {/* Row */}
                        <Grid container className={classes.Grid_control}>
                            <Grid item xs={12} md={4}>
                                <Typography
                                    className={classes.label} 
                                    variant="body1">Font Color</Typography>
                            </Grid>
                            <Grid item xs={12} md={8} className={classes.Grid_controls}>
                                <Radio
                                    className={
                                        classNames(
                                            classes.Radio_color, 
                                            styles.color === '#000000' ? classes.Radio_color_checked : null
                                        )
                                    }
                                    disableRipple
                                    checked={styles.color === '#000000'}
                                    onChange={this.handleStylePropertyChange}
                                    value="#000000"
                                    name="color"
                                    icon={<LensIcon />}
                                    checkedIcon={<LensIcon />}
                                    style={{color: '#000000'}}
                                    aria-label="Black"
                                />
                                <Radio
                                    className={
                                        classNames(
                                            classes.Radio_color, 
                                            styles.color === '#1A8D5F' ? classes.Radio_color_checked : null
                                        )
                                    }
                                    disableRipple
                                    checked={styles.color === '#1A8D5F'}
                                    onChange={this.handleStylePropertyChange}
                                    value="#1A8D5F"
                                    name="color"
                                    icon={<LensIcon />}
                                    checkedIcon={<LensIcon />}
                                    style={{color: '#1A8D5F'}}
                                    aria-label="Green"
                                />
                                <Radio
                                    className={
                                        classNames(
                                            classes.Radio_color, 
                                            styles.color === '#D0021B' ? classes.Radio_color_checked : null
                                        )
                                    }
                                    disableRipple
                                    checked={styles.color === '#D0021B'}
                                    onChange={this.handleStylePropertyChange}
                                    value="#D0021B"
                                    name="color"
                                    icon={<LensIcon />}
                                    checkedIcon={<LensIcon />}
                                    style={{color: '#D0021B'}}
                                    aria-label="Red"
                                />
                                <Radio
                                    className={
                                        classNames(
                                            classes.Radio_color, 
                                            styles.color === '#268EF9' ? classes.Radio_color_checked : null
                                        )
                                    }
                                    disableRipple
                                    checked={styles.color === '#268EF9'}
                                    onChange={this.handleStylePropertyChange}
                                    value="#268EF9"
                                    name="color"
                                    icon={<LensIcon />}
                                    checkedIcon={<LensIcon />}
                                    style={{color: '#268EF9'}}
                                    aria-label="Blue"
                                />
                                <Radio
                                    className={
                                        classNames(
                                            classes.Radio_color, 
                                            styles.color === '#F1F1F1' ? classes.Radio_color_checked : null
                                        )
                                    }
                                    disableRipple
                                    checked={styles.color === '#F1F1F1'}
                                    onChange={this.handleStylePropertyChange}
                                    value="#F1F1F1"
                                    name="color"
                                    icon={<LensIcon />}
                                    checkedIcon={<LensIcon />}
                                    style={{color: '#F1F1F1'}}
                                    aria-label="White"
                                />
                                <Checkbox
                                    className={
                                        classNames(
                                            classes.colorPickerCheckbox,
                                            this.state.isColorPickerShow ? classes.colorPickerCheckbox_checked : null
                                        )
                                    }
                                    disableRipple
                                    checked={this.state.isColorPickerShow}
                                    onChange={this.handlePropertyChange}
                                    name="isColorPickerShow"
                                    icon={
                                        <ExpandMoreIcon style={{
                                            backgroundColor: styles.color,
                                            color: '#fff'
                                        }} />
                                    }
                                    checkedIcon={
                                        <ExpandLessIcon style={{
                                            backgroundColor: styles.color,
                                            color: '#fff'
                                        }} />
                                    }
                                    aria-label="Custom Color"
                                />
                            </Grid>
                            <Grid 
                                item xs={12}
                                className={classes.colorPickerContainer}
                                hidden={!this.state.isColorPickerShow}
                            >
                                <HuePicker
                                    className={classes.HuePicker}
                                    color={styles.color} 
                                    onChange={this.handleTextColorChange}
                                />
                            </Grid>
                        </Grid>
                        {/* /Row */}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* Row */}
                        <Grid container className={classes.Grid_control}>
                            <Grid item xs={12} md={4}>
                                <Typography
                                    className={classes.label} 
                                    variant="body1">Outline</Typography>
                            </Grid>
                            <Grid item xs={3} md={2}>
                                <Checkbox
                                    disableRipple
                                    className={
                                        classNames(
                                            classes.colorPickerCheckbox,
                                            this.state.isTextStrokeColorPickerShow ? classes.colorPickerCheckbox_checked : null
                                        )
                                    }
                                    checked={this.state.isTextStrokeColorPickerShow}
                                    onChange={this.handlePropertyChange}
                                    name="isTextStrokeColorPickerShow"
                                    icon={
                                        <ExpandMoreIcon style={{
                                            backgroundColor: styles.WebkitTextStrokeColor,
                                            color: '#fff'
                                        }} />
                                    }
                                    checkedIcon={
                                        <ExpandLessIcon style={{
                                            backgroundColor: styles.WebkitTextStrokeColor,
                                            color: '#fff'
                                        }} />
                                    }
                                    aria-label="Custom Color"
                                />
                            </Grid>
                            <Grid item xs={9} md={3}>
                                <TextField
                                    value={styles.WebkitTextStrokeWidth}
                                    onChange={this.handleStylePropertyChange}
                                    name="WebkitTextStrokeWidth"
                                    type="number"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}
                                className={classes.colorPickerContainer}
                                hidden={!this.state.isTextStrokeColorPickerShow}
                            >
                                <HuePicker
                                    className={classes.HuePicker}
                                    color={styles.WebkitTextStrokeColor} 
                                    onChange={this.handleTextStrokeColorChange}
                                />
                            </Grid>
                        </Grid>
                        {/* /Row */}
                        {/* Row */}
                        <Grid container className={classes.Grid_control}>
                            <Grid item xs={12} md={4}>
                                <Typography 
                                    className={classes.label}
                                    variant="body1">Shadow</Typography>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Checkbox
                                    className={classes.control_dense}
                                    disableRipple
                                    checked={styles.textShadow !== 'none'}
                                    onChange={this.handleStylePropertyChange}
                                    name="textShadow"
                                    value={styles.textShadow !== 'none' ? 'none' : '0 0 12px rgba(0,0,0,.5)'}
                                    color="primary"
                                    aria-label="Has Text Shadow?"
                                />
                            </Grid>
                        </Grid>
                        {/* /Row */}
                    </Grid>
                </Grid>
            </div>
        )
    };
}

TextEditor.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextEditor);