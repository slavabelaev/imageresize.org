const styles = theme => ({
    root: {
        textAlign: 'center'
    },
    progressContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 200
    },
    Typography_message: {
        lineHeight: 1.5
    },
    Icon: {
        marginRight: theme.spacing.unit
    },
    ShareLink: {
        marginTop: theme.spacing.unit * 4,
        marginBottom: theme.spacing.unit * 4
    },
    Button_download: {
        marginBottom: theme.spacing.unit * 10
    },
    Icon_check: {
        fontSize: 80,
        color: theme.palette.secondary[500]
    }
});

export default styles;