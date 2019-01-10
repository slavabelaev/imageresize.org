const styles = theme => ({
    root: {
        textAlign: 'center'
    },
    FormControlLabel: {
        margin: 0,
        '&[aria-selected=true] img': {
            boxShadow: theme.states.selected.boxShadow
        }
    },
    Radio: {
        position: 'absolute',
        opacity: 0
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: theme.shape.borderRadius
    }
});

export default styles;