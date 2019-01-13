const styles = theme => ({
    root: {},
    header: {
        textAlign: 'center'
    },
    Grid_item: {
        [theme.breakpoints.up('md')]: {
            marginBottom: theme.spacing.unit * 8,
        }
    }
});

export default styles;