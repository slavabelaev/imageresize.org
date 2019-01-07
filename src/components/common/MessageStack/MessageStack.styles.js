const styles = theme => ({
    root: {
    },
    Snackbar: {
        position: 'relative',
        width: '100%',
        marginBottom: theme.spacing.unit,
        '&:last-child': {
            marginBottom: 0
        }
    },
    SnackbarContent: {
        width: '100%',
        maxWidth: '100%',
    },
    SnackbarContent_error: {
        backgroundColor: theme.palette.error[50],
        color: theme.palette.error.dark,
    },
    SnackbarContent_warning: {
        backgroundColor: theme.palette.secondary[50],
        color: theme.palette.secondary.dark,
    },
    SnackbarContent_info: {
        backgroundColor: theme.palette.primary[50],
        color: theme.palette.primary.dark,
    },
    messageContent: {
        display: 'flex',
        alignItems: 'center',
    },
    Icon: {
        marginRight: theme.spacing.unit
    },
    IconButton_removeMessage: {
        position: 'absolute',
        right: theme.spacing.unit
    }
});

export default styles;