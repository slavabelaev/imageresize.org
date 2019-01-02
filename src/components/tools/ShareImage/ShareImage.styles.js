const styles = theme => ({
    root: {},
    container: {
        maxWidth: 750,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    Typography_title: {
        marginBottom: theme.spacing.unit * 3
    },
    imageContainer: {
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
    image: {
        maxWidth: '100%',
        opacity: 0,
        transition: theme.transitions.create()
    },
    image_state_ready: {
        opacity: 1
    },
    buttonGroup: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    buttonGroup_button: {
        flex: 1,
        borderRadius: 0,
        '&+[role=button]': {
            borderLeftWidth: 0
        },
        '&:first-child': {
            borderTopLeftRadius: theme.shape.borderRadius,
            borderBottomLeftRadius: theme.shape.borderRadius
        },
        '&:last-child': {
            borderTopRightRadius: theme.shape.borderRadius,
            borderBottomRightRadius: theme.shape.borderRadius
        }
    },
    ShareOrDownload: {
        marginBottom: theme.spacing.unit * 3
    },
    ShareOrDownload_title: {
        marginBottom: theme.spacing.unit * 3
    },
    Button: {
        marginLeft: theme.spacing.unit * 2,
        minHeight: 55,
        minWidth: 200
    },
    actions: {
        textAlign: 'right',
    },
    buttonsContainer: {
        paddingTop: theme.spacing.unit * 7,
        paddingBottom: theme.spacing.unit * 7
    },
    EmbedList: {
        paddingTop: theme.spacing.unit * 9
    }
});

export default styles;