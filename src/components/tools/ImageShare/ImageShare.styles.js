const styles = theme => ({
    root: {
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
        marginBottom: theme.spacing.unit * 3,
        opacity: 0,
        transition: theme.transitions.create()
    },
    image_state_ready: {
        opacity: 1
    }
});

export default styles;