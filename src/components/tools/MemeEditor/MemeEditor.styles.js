const styles = theme => ({
    root: {
        maxWidth: 750,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    Typography_title: {
        marginBottom: theme.spacing.unit * 3
    },
    canvasContainer: {
        position: 'relative'
    },
    CircularProgress: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        zIndex: -1
    },
    canvas: {
        width: '100%',
        height: 570,
        marginBottom: theme.spacing.unit * 3,
        opacity: 0,
        transition: theme.transitions.create()
    },
    canvas_state_ready: {
        opacity: 1
    },
    Toolbar: {
        backgroundColor: theme.palette.grey[50],
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: theme.palette.border.light
    },
    icon: {
        marginRight: theme.spacing.unit
    },
    Button: {
        marginRight: theme.spacing.unit * 2,
        backgroundColor: theme.palette.white
    }
});

export default styles;