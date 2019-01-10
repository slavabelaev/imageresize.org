const styles = theme => ({
    root: {},
    Typography_title: {
        marginBottom: theme.spacing.unit * 2.5
    },
    AppContainer_top: {
        paddingTop: 0,
        paddingBottom: 0
    },
    AppContainer: {
        [theme.breakpoints.down('md')]: {
            paddingLeft: 0,
            paddingRight: 0
        }
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
        transition: theme.transitions.create(),
        [theme.breakpoints.down('md')]: {
            maxHeight: 220
        }
    },
    image_state_ready: {
        opacity: 1
    },
    ShareOrDownload: {
        marginBottom: theme.spacing.unit * 2.5
    },
    ShareOrDownload_title: {
        marginBottom: theme.spacing.unit * 2.5
    },
    Button: {
        '&+button': {
            marginLeft: theme.spacing.unit * 2.5
        },
        minHeight: 55,
        minWidth: 155,
        [theme.breakpoints.up('md')]: {
            minWidth: 200
        }
    },
    actions: {
        textAlign: 'right',
        [theme.breakpoints.down('md')]: {
            textAlign: 'center'
        }
    },
    Divider: {
        maxWidth: theme.breakpoints.values.lg,
        margin: 'auto'
    }
});

export default styles;