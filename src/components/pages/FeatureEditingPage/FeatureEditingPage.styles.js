const styles = theme => ({
    root: {},
    header: {
        textAlign: 'center'
    },
    Grid_item: {
        [theme.breakpoints.up('md')]: {
            marginBottom: theme.spacing.unit * 8,
        }
    },
    Button_getStarted: {
        marginTop: theme.spacing.unit * 3
    },
    Divider: {
        maxWidth: theme.breakpoints.values.lg,
        margin: 'auto'
    }
});

export default styles;