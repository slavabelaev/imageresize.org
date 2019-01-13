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
        marginBottom: theme.spacing.unit * 2.5,
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
        borderColor: theme.palette.border.light,
        padding: theme.spacing.unit * 2
    },
    icon: {
        marginRight: theme.spacing.unit
    },
    Button: {
        backgroundColor: theme.palette.white,
        whiteSpace: 'nowrap',
        '&:not(:last-child)': {
            marginRight: theme.spacing.unit * 2.5,
        }
    },
    IconButton_closeDialog: {
        position: 'absolute',
        right: theme.spacing.unit * 2,
        top: theme.spacing.unit * 2,
        color: theme.palette.error.main
    },
    Dialog: {
        '&>div>div': {
            margin: theme.spacing.unit * 2.5
        }
    },
    DialogContent: {
        padding: theme.spacing.unit * 2.5
    },
    Button_copyStyles: {
        marginRight: 'auto'
    }
});

export default styles;