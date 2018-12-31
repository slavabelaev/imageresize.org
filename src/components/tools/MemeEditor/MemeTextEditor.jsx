import React from 'react';
import { HuePicker } from 'react-color';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
import HighlightIcon from '@material-ui/icons/Highlight';
// Styles
import styles from './MemeTextEditor.styles';

class MemeTextEditor extends React.Component {
    state = {
        text: 'This is my image text',
        fontSize: 20,
        fontColor: '#616161',
        textAlign: 'center',
        textOutlineWidth: 5,
        textOutlineColor: 'blue',
        isFontWeightBold: false,
        isFontStyleItalic: false,
        isTextTransformUppercase: true,
        hasTextShadow: false,

        isFontColorPickerShow: false,
        isTextOutlineColorPickerShow: false,
    };

    handleChange = ({ target }) => {
        this.setState({ 
            [target.name]: target.value ? target.value : target.checked
        });
    };

    fontColorChange = ({ hex }) => {
        this.setState({ 
            fontColor: hex
        });
    }

    textOutlineColorChange = ({ hex }) => {
        this.setState({ 
            textOutlineColor: hex
        });
    }

    render() {
        const { className, classes } = this.props;
        
        return (
            <div className={`${className || ''} ${classes.root}`}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <TextField
                            rows={1}
                            multiline
                            defaultValue={this.state.text}
                            variant="outlined"
                            fullWidth
                            inputProps={{
                                style: {
                                    textAlign: this.state.textAlign,
                                    fontSize: this.state.fontSize,
                                    lineHeight: 1,
                                    fontWeight: this.state.isFontWeightBold ? 'bold' : 'normal',
                                    fontStyle: this.state.isFontStyleItalic ? 'italic' : 'normal',
                                    textTransform: this.state.isTextTransformUppercase ? 'uppercase' : 'none',
                                    color: this.state.fontColor,
                                    textShadow: this.state.hasTextShadow ? '0 0 12px rgba(0,0,0,.5)' : 'none'
                                }
                            }}
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        {/* Control */}
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel htmlFor="font-size">Type</InputLabel>
                            <Select
                                value={this.state.fontSize}
                                onChange={this.handleChange}
                                input={
                                    <OutlinedInput
                                        labelWidth={36}
                                        name="fontSize"
                                        id="font-size"
                                    />
                                }
                            >
                                <MenuItem value={20}>Font 1</MenuItem>
                                <MenuItem value={24}>Font 2</MenuItem>
                                <MenuItem value={28}>Font 3</MenuItem>
                                <MenuItem value={32}>Font 4</MenuItem>
                                <MenuItem value={36}>Font 5</MenuItem>
                            </Select>
                        </FormControl>
                        {/* /Control */}
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            value={this.state.textOutlineWidth}
                            onChange={this.handleChange}
                            name="textOutlineWidth"
                            label="Outline"
                            type="number"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <Checkbox
                            checked={this.isTextOutlineColorPickerShow}
                            onChange={this.handleChange}
                            name="isTextOutlineColorPickerShow"
                            style={{color: this.state.textOutlineColor}}
                            icon={<BorderColorIcon />}
                            checkedIcon={<BorderColorIcon />}
                            aria-label="Custom Color"
                        />
                    </Grid>
                    <Grid item xs={6} style={{
                        display: this.state.isTextOutlineColorPickerShow ? 'flex' : 'none',
                        alignItems: 'center'
                    }}>
                        <HuePicker 
                            className={classes.colorPicker}
                            color={this.state.textOutlineColor} 
                            onChange={this.textOutlineColorChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        {/* Control */}
                        <Radio
                            checked={this.state.textAlign === 'left'}
                            onChange={this.handleChange}
                            value="left"
                            name="textAlign"
                            icon={<FormatAlignLeftIcon />}
                            checkedIcon={<FormatAlignLeftIcon />}
                            color="primary"
                            aria-label="Left"
                        />
                        <Radio
                            checked={this.state.textAlign === 'center'}
                            onChange={this.handleChange}
                            value="center"
                            name="textAlign"
                            icon={<FormatAlignCenterIcon />}
                            checkedIcon={<FormatAlignCenterIcon />}
                            color="primary"
                            aria-label="Center"
                        />
                        <Radio
                            checked={this.state.textAlign === 'right'}
                            onChange={this.handleChange}
                            value="right"
                            name="textAlign"
                            icon={<FormatAlignRightIcon />}
                            checkedIcon={<FormatAlignRightIcon />}
                            color="primary"
                            aria-label="Right"
                        />
                        <Checkbox
                            checked={this.state.isFontWeightBold}
                            onChange={this.handleChange}
                            name="isFontWeightBold"
                            icon={<FormatBoldIcon />}
                            checkedIcon={<FormatBoldIcon />}
                            color="primary"
                            aria-label="Bold"
                        />
                        <Checkbox
                            checked={this.state.isTextTransformUppercase}
                            onChange={this.handleChange}
                            name="isTextTransformUppercase"
                            icon={<FormatSizeIcon />}
                            checkedIcon={<FormatSizeIcon />}
                            color="primary"
                            aria-label="Uppercase"
                        />
                        <Checkbox
                            checked={this.state.isFontStyleItalic}
                            onChange={this.handleChange}
                            name="isFontStyleItalic"
                            icon={<FormatItalicIcon />}
                            checkedIcon={<FormatItalicIcon />}
                            color="primary"
                            aria-label="Italic"
                        />
                        <Checkbox
                            checked={this.state.hasTextShadow}
                            onChange={this.handleChange}
                            icon={<HighlightIcon />}
                            checkedIcon={<HighlightIcon />}
                            name="hasTextShadow"
                            color="primary"
                            aria-label="Has Text Shadow?"
                        />
                        {/* /Control */}
                    </Grid>
                    <Grid item xs={6}>
                        {/* Control */}
                        <Radio
                            checked={this.state.fontColor === '#000000'}
                            onChange={this.handleChange}
                            value="#000000"
                            name="fontColor"
                            icon={<LensIcon />}
                            style={{color: '#000000'}}
                            aria-label="Black"
                        />
                        <Radio
                            checked={this.state.fontColor === '#1A8D5F'}
                            onChange={this.handleChange}
                            value="#1A8D5F"
                            name="fontColor"
                            icon={<LensIcon />}
                            style={{color: '#1A8D5F'}}
                            aria-label="Green"
                        />
                        <Radio
                            checked={this.state.fontColor === '#D0021B'}
                            onChange={this.handleChange}
                            value="#D0021B"
                            name="fontColor"
                            icon={<LensIcon />}
                            style={{color: '#D0021B'}}
                            aria-label="Red"
                        />
                        <Radio
                            checked={this.state.fontColor === '#268EF9'}
                            onChange={this.handleChange}
                            value="#268EF9"
                            name="fontColor"
                            icon={<LensIcon />}
                            style={{color: '#268EF9'}}
                            aria-label="Blue"
                        />
                        <Radio
                            checked={this.state.fontColor === '#F1F1F1'}
                            onChange={this.handleChange}
                            value="#F1F1F1"
                            name="fontColor"
                            icon={<LensIcon />}
                            style={{color: '#F1F1F1'}}
                            aria-label="White"
                        />
                        <Checkbox
                            checked={this.isFontColorPickerShow}
                            onChange={this.handleChange}
                            name="isFontColorPickerShow"
                            style={{color: this.state.fontColor}}
                            icon={<FormatColorTextIcon />}
                            checkedIcon={<FormatColorTextIcon />}
                            aria-label="Custom Color"
                        />
                        {/* /Control */}
                    </Grid>
                    <Grid item xs={6} style={{
                        display: this.state.isFontColorPickerShow ? 'flex' : 'none',
                        alignItems: 'center'
                    }}>
                        <HuePicker 
                            className={classes.colorPicker}
                            color={this.state.fontColor} 
                            onChange={this.fontColorChange}
                        />
                    </Grid>
                </Grid>
            </div>
        )
    };
}

MemeTextEditor.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MemeTextEditor);