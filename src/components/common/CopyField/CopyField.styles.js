const styles = theme => ({
    root: {
    },
    Grid_label: {
        display: 'flex',
        alignItems: 'center'
    },
    Typography_label: {
        fontSize: 18,
        marginBottom: theme.spacing.unit,
        [theme.breakpoints.up('md')]: {
            marginBottom: 0
        }
    },
    Button_copy: {
        backgroundColor: theme.palette.grey[100]
    }
});

export default styles;