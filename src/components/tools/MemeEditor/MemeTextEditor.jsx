import React from 'react';
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
import ColorizeIcon from '@material-ui/icons/Colorize';
// Styles
import styles from './MemeTextEditor.styles';

class MemeTextEditor extends React.Component {
    state = {
        text: 'This is my image text',
        fontSize: 20,
        fontColor: '#000000',
        textAlign: 'center',
        textOutlineWidth: 5,
        textOutlineColor: 'blue',
        isFontWeightBold: false,
        isFontStyleItalic: false,
        isTextTransformUppercase: true,
        hasTextShadow: false
    };

    handleChange = ({ target }) => {
        this.setState({ 
            [target.name]: target.value ? target.value : target.checked
        });
    };

    render() {
        const { className, classes } = this.props;
        
        return (
            <div className={`${className || ''} ${classes.root}`}>
                <Grid container spacing={32}>
                    <Grid item xs={12}>
                        <TextField
                            multiline
                            rows="1"
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
                    <Grid item xs={7}>
                        {/* Control */}
                        <Grid container spacing={24} alignItems="center">
                            <Grid item xs={3}>
                                <InputLabel>Type</InputLabel>
                            </Grid>
                            <Grid item xs={9}>
                                <FormControl variant="outlined" fullWidth>
                                    <Select
                                        value={this.state.fontSize}
                                        onChange={this.handleChange}
                                        input={
                                            <OutlinedInput
                                                labelWidth={0}
                                                name="fontSize"
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
                            </Grid>
                        </Grid>
                        {/* /Control */}
                    </Grid>
                    <Grid item xs={5}>
                        {/* Control */}
                        <Grid container spacing={24} alignItems="center">
                            <Grid item xs={3}>
                                <InputLabel>Outline</InputLabel>
                            </Grid>
                            <Grid item xs={5}>
                                <FormControl variant="outlined" fullWidth>
                                    <Select
                                        value={this.state.textOutlineColor}
                                        onChange={this.handleChange}
                                        input={
                                            <OutlinedInput
                                                labelWidth={0}
                                                name="textOutlineColor"
                                            />
                                        }
                                    >
                                        <MenuItem value="red">Red</MenuItem>
                                        <MenuItem value="black">Black</MenuItem>
                                        <MenuItem value="blue">Blue</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    value={this.state.textOutlineWidth}
                                    onChange={this.handleChange}
                                    name="textOutlineWidth"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                        {/* /Control */}
                    </Grid>
                    <Grid item xs={7}>
                        {/* Control */}
                        <Grid container spacing={24} alignItems="center">
                            <Grid item xs={3}>
                                <InputLabel>Properties</InputLabel>
                            </Grid>
                            <Grid item xs={9}>
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
                            </Grid>
                        </Grid>
                        {/* /Control */}
                    </Grid>
                    <Grid item xs={5}>
                        {/* Control */}
                        <Grid container spacing={24} alignItems="center">
                            <Grid item xs={3}>
                                <InputLabel>Shadow</InputLabel>
                            </Grid>
                            <Grid item xs={9}>
                                <Checkbox
                                    checked={this.state.hasTextShadow}
                                    onChange={this.handleChange}
                                    name="hasTextShadow"
                                    color="primary"
                                    aria-label="Has Text Shadow?"
                                />
                            </Grid>
                        </Grid>
                        {/* /Control */}
                    </Grid>
                    <Grid item xs={7}>
                        {/* Control */}
                        <Grid container spacing={24} alignItems="center">
                            <Grid item xs={3}>
                                <InputLabel>Font Color</InputLabel>
                            </Grid>
                            <Grid item xs={9}>
                                <Radio
                                    checked={this.state.fontColor === '#000000'}
                                    onChange={this.handleChange}
                                    value="#000000"
                                    name="fontColor"
                                    style={{color: '#000000'}}
                                    aria-label="Black"
                                />
                                <Radio
                                    checked={this.state.fontColor === '#1A8D5F'}
                                    onChange={this.handleChange}
                                    value="#1A8D5F"
                                    name="fontColor"
                                    style={{color: '#1A8D5F'}}
                                    aria-label="Green"
                                />
                                <Radio
                                    checked={this.state.fontColor === '#D0021B'}
                                    onChange={this.handleChange}
                                    value="#D0021B"
                                    name="fontColor"
                                    style={{color: '#D0021B'}}
                                    aria-label="Red"
                                />
                                <Radio
                                    checked={this.state.fontColor === '#268EF9'}
                                    onChange={this.handleChange}
                                    value="#268EF9"
                                    name="fontColor"
                                    style={{color: '#268EF9'}}
                                    aria-label="Blue"
                                />
                                <Radio
                                    checked={this.state.fontColor === '#F1F1F1'}
                                    onChange={this.handleChange}
                                    value="#F1F1F1"
                                    name="fontColor"
                                    style={{color: '#F1F1F1'}}
                                    aria-label="White"
                                />
                                <Radio
                                    checked={this.state.fontColor === '#ffff00'}
                                    onChange={this.handleChange}
                                    value="#ffff00"
                                    name="fontColor"
                                    style={{color: '#ffff00'}}
                                    icon={<ColorizeIcon />}
                                    checkedIcon={<ColorizeIcon />}
                                    aria-label="Custom Color"
                                />
                            </Grid>
                        </Grid>
                        {/* /Control */}
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