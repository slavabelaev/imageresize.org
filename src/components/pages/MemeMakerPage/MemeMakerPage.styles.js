const styles = theme => ({
    root: {},
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