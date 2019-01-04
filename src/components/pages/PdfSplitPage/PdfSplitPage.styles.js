const styles = theme => ({
    root: {
        maxWidth: theme.breakpoints.values.lg,
        margin: 'auto'
    },
    header: {
        textAlign: 'center',
        marginBottom: theme.spacing.unit * 6,
        paddingTop: theme.spacing.unit * 9
    },
    contentContainer: {
        maxWidth: theme.breakpoints.values.md,
        margin: 'auto',
        paddingRight: theme.spacing.unit * 3,
        paddingLeft: theme.spacing.unit * 3
    },
    SplitManager: {
        marginBottom: theme.spacing.unit * 9
    },
    Grid_container: {
        margin: 0,
        padding: theme.spacing.unit * 6
    },
    Grid_item: {
        marginBottom: theme.spacing.unit * 8
    }
});

export default styles;