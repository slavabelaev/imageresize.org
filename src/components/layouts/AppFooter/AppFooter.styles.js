const styles = theme => ({
    root: {
        maxWidth: 1170,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    container: {
        padding: 60
    },
    AppLogo: {
        maxWidth: 175,
        marginBottom: 60
    },
    ListItemText: {
        fontSize: '.875rem',
        padding: 0
    },
    ListItemText_title: {
        fontSize: '.875rem',
        padding: 0,
        '&>span': {
            color: theme.typography.title.color
        }
    },
    Grid_socials: {
        textAlign: 'center'
    }
});

export default styles;