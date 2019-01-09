const styles = theme => ({
    root: {
        maxWidth: theme.breakpoints.values.lg,
        margin: 'auto',
        padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 2.5}px`,
        [theme.breakpoints.up('lg')]: {
            padding: theme.spacing.unit * 7.5,
        }
    }
});

export default styles;