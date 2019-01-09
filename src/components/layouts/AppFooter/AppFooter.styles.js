const styles = theme => ({
    root: {},
    AppLogo: {
        maxWidth: 175,
        marginBottom: theme.spacing.unit * 5
    },
    ListItemText: {
        fontSize: '.875rem',
        padding: 0
    },
    ListItemText_title: {
        fontSize: '.875rem',
        padding: 0,
        '&>span': {
            color: theme.typography.title.color,
            fontWeight: 500,
        }
    },
    Grid_socials: {
        textAlign: 'center',
        maxWidth: 175,
        marginBottom: theme.spacing.unit * 3
    }
});

export default styles;