const styles = theme => ({
    root: {},
    header: {
        textAlign: 'center'
    },
    Button: {
        marginTop: theme.spacing.unit * 3
    },
    Grid_item: {
        [theme.breakpoints.up('md')]: {
            marginBottom: theme.spacing.unit * 8,
        }
    },
    Divider: {
        maxWidth: theme.breakpoints.values.lg,
        margin: 'auto'
    }
});

export default styles;