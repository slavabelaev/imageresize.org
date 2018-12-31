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
            lineHeight: 2
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
            lineHeight: 2
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
            lineHeight: 2
        }
    ];
    state = {
        text: 'This is my image text',
        styles: this.styleTypes[0],
        styleTypes: this.styleTypes,

        isColorPickerShow: false,
        isTextStrokeColorPickerShow: false,
    };

    statePropertyChange = ({ target }) => {
        this.setState({ [target.name]: target.value ? target.value : target.checked });
    }

    styleTypeChange = ({ target }) => {
        this.setState({ styles: target.value });
    };

    stylePropertyChange = ({ target }) => {
        const styles = {...this.state.styles};
        styles[target.name] = target.value ? target.value : target.checked;
        this.setState({ styles: styles });
    };

    colorChange = ({ hex }) => {
        const styles = {...this.state.styles};
        styles.color = hex;
        this.setState({ styles: styles });
    }

    textStrokeColorChange = ({ hex }) => {
        const styles = {...this.state.styles};
        styles.WebkitTextStrokeColor = hex;
        this.setState({ styles: styles });
    }

    render() {
        const { className, classes } = this.props;
        const { styleTypes, text, styles } = this.state;
        
        return (
            <div className={`${className || ''} ${classes.root}`}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <TextField
                            rows={1}
                            multiline
                            defaultValue={text}
                            variant="outlined"
                            fullWidth
                            inputProps={{ style: styles }}
                            onChange={this.stylePropertyChange}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        {/* Control */}
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel htmlFor="style-type">Style</InputLabel>
                            <Select
                                value={styleTypes[0]}
                                onChange={this.styleTypeChange}
                                input={
                                    <OutlinedInput
                                        labelWidth={36}
                                        name="styleType"
                                        id="style-type"
                                    />
                                }
                            >
                            {styleTypes.map((styleType, index) => (
                                <MenuItem value={styleType} style={styleType} key={index}>
                                    Font {index + 1}
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                        {/* /Control */}
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            value={styles.WebkitTextStrokeWidth}
                            onChange={this.stylePropertyChange}
                            name="WebkitTextStrokeWidth"
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
                            checked={this.isTextStrokeColorPickerShow}
                            onChange={this.statePropertyChange}
                            name="isTextStrokeColorPickerShow"
                            style={{color: styles.WebkitTextStrokeColor}}
                            icon={<BorderColorIcon />}
                            checkedIcon={<BorderColorIcon />}
                            aria-label="Custom Color"
                        />
                    </Grid>
                    <Grid item xs={6} 
                        className={classes.colorPickerContainer}
                        hidden={!this.state.isTextStrokeColorPickerShow}
                    >
                        <HuePicker
                            color={styles.WebkitTextStrokeColor} 
                            onChange={this.textStrokeColorChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        {/* Control */}
                        <Radio
                            checked={styles.textAlign === 'left'}
                            onChange={this.stylePropertyChange}
                            value="left"
                            name="textAlign"
                            icon={<FormatAlignLeftIcon />}
                            checkedIcon={<FormatAlignLeftIcon />}
                            color="primary"
                            aria-label="Left"
                        />
                        <Radio
                            checked={styles.textAlign === 'center'}
                            onChange={this.stylePropertyChange}
                            value="center"
                            name="textAlign"
                            icon={<FormatAlignCenterIcon />}
                            checkedIcon={<FormatAlignCenterIcon />}
                            color="primary"
                            aria-label="Center"
                        />
                        <Radio
                            checked={styles.textAlign === 'right'}
                            onChange={this.stylePropertyChange}
                            value="right"
                            name="textAlign"
                            icon={<FormatAlignRightIcon />}
                            checkedIcon={<FormatAlignRightIcon />}
                            color="primary"
                            aria-label="Right"
                        />
                        <Checkbox
                            checked={styles.fontWeight === 'bold'}
                            onChange={this.stylePropertyChange}
                            name="fontWeight"
                            value={styles.fontWeight !== 'bold' ? 'bold' : 'normal'}
                            icon={<FormatBoldIcon />}
                            checkedIcon={<FormatBoldIcon />}
                            color="primary"
                            aria-label="Bold"
                        />
                        <Checkbox
                            checked={styles.textTransform === 'uppercase'}
                            onChange={this.stylePropertyChange}
                            name="textTransform"
                            value={styles.textTransform !== 'uppercase' ? 'uppercase' : 'none'}
                            icon={<FormatSizeIcon />}
                            checkedIcon={<FormatSizeIcon />}
                            color="primary"
                            aria-label="Uppercase"
                        />
                        <Checkbox
                            checked={styles.fontStyle === 'italic'}
                            onChange={this.stylePropertyChange}
                            name="fontStyle"
                            value={styles.fontStyle !== 'italic' ? 'italic' : 'normal'}
                            icon={<FormatItalicIcon />}
                            checkedIcon={<FormatItalicIcon />}
                            color="primary"
                            aria-label="Italic"
                        />
                        <Checkbox
                            checked={styles.textShadow !== 'none'}
                            onChange={this.stylePropertyChange}
                            name="textShadow"
                            value={styles.textShadow !== 'none' ? 'none' : '0 0 12px rgba(0,0,0,.5)'}
                            icon={<HighlightIcon />}
                            checkedIcon={<HighlightIcon />}
                            color="primary"
                            aria-label="Has Text Shadow?"
                        />
                        {/* /Control */}
                    </Grid>
                    <Grid item xs={6}>
                        {/* Control */}
                        <Radio
                            checked={styles.color === '#000000'}
                            onChange={this.stylePropertyChange}
                            value="#000000"
                            name="color"
                            icon={<LensIcon />}
                            style={{color: '#000000'}}
                            aria-label="Black"
                        />
                        <Radio
                            checked={styles.color === '#1A8D5F'}
                            onChange={this.stylePropertyChange}
                            value="#1A8D5F"
                            name="color"
                            icon={<LensIcon />}
                            style={{color: '#1A8D5F'}}
                            aria-label="Green"
                        />
                        <Radio
                            checked={styles.color === '#D0021B'}
                            onChange={this.stylePropertyChange}
                            value="#D0021B"
                            name="color"
                            icon={<LensIcon />}
                            style={{color: '#D0021B'}}
                            aria-label="Red"
                        />
                        <Radio
                            checked={styles.color === '#268EF9'}
                            onChange={this.stylePropertyChange}
                            value="#268EF9"
                            name="color"
                            icon={<LensIcon />}
                            style={{color: '#268EF9'}}
                            aria-label="Blue"
                        />
                        <Radio
                            checked={styles.color === '#F1F1F1'}
                            onChange={this.stylePropertyChange}
                            value="#F1F1F1"
                            name="color"
                            icon={<LensIcon />}
                            style={{color: '#F1F1F1'}}
                            aria-label="White"
                        />
                        <Checkbox
                            checked={this.isColorPickerShow}
                            onChange={this.statePropertyChange}
                            name="isColorPickerShow"
                            style={{color: styles.color}}
                            icon={<FormatColorTextIcon />}
                            checkedIcon={<FormatColorTextIcon />}
                            aria-label="Custom Color"
                        />
                        {/* /Control */}
                    </Grid>
                    <Grid 
                        item xs={6} 
                        className={classes.colorPickerContainer}
                        hidden={!this.state.isColorPickerShow}
                    >
                        <HuePicker
                            color={styles.color} 
                            onChange={this.colorChange}
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