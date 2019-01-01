const styles = theme => ({
    root: {},
    FormControlLabel: {
        margin: 0,
        '&[aria-selected=true] img': {
            borderColor: theme.palette.primary.main,
            borderStyle: 'solid',
            borderWidth: 3
        }
    },
    Radio: {
        position: 'absolute',
        opacity: 0
    },
    image: {
        width: 100,
        height: 100
    }
});

export default styles;