const styles = theme => ({
    root: {},
    header: {
        textAlign: 'center',
        marginBottom: theme.spacing.unit * 6
    },
    Grid_item: {
        [theme.breakpoints.up('md')]: {
            marginBottom: theme.spacing.unit * 8,
        }
    }
});

export default styles;