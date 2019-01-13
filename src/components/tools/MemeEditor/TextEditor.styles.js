const styles = theme => ({
    root: {},
    Grid_control: {
        alignItems: 'center',
        marginBottom: theme.spacing.unit * 4
    },
    colorPickerContainer: {
        display: 'flex',
        alignItems: 'center',
        '&[hidden]': {
            display: 'none'
        }
    },
    label: {
        [theme.breakpoints.down('md')]: {
            marginBottom: theme.spacing.unit
        }
    },
    control_dense: {
        padding: theme.spacing.unit / 2,
        marginRight: theme.spacing.unit
    },
    Radio_color: {
        padding: theme.spacing.unit / 2,
        marginRight: theme.spacing.unit,
        boxShadow: `${theme.palette.grey[200]} 0 0 0 2px inset`,
        transition: theme.transitions.create()
    },
    Radio_color_checked: {
        boxShadow: `${theme.palette.primary.main} 0 0 0 2px inset`
    },
    Grid_controls: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    HuePicker: {
        marginTop: theme.spacing.unit * 3,
        width: '100%!important'
    },
    colorPickerCheckbox: {
        padding: theme.spacing.unit / 2,
        borderRadius: 0,
        boxShadow: `${theme.palette.grey[200]} 0 0 0 2px inset`,
        transition: theme.transitions.create()
    },
    colorPickerCheckbox_checked: {
        boxShadow: `${theme.palette.primary.main} 0 0 0 2px inset`
    }
});

export default styles;