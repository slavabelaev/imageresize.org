const styles = theme => ({
    root: {},
    AppLogo: {
        maxWidth: 175,
        marginBottom: theme.spacing.unit * 5
    },
    ListItemText: {
        padding: 0,
        [theme.breakpoints.up('md')]: {
            fontSize: '.875rem',
        }
    },
    ListItemText_title: {
        padding: 0,
        '&>span': {
            color: theme.typography.title.color,
            fontWeight: 500,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '.875rem',
        }
    },
    Grid_socials: {
        textAlign: 'center',
        maxWidth: 175,
        marginBottom: theme.spacing.unit * 2.5,
        [theme.breakpoints.down('md')]: {
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },
    Divider: {
        maxWidth: theme.breakpoints.values.lg,
        margin: 'auto'
    },
    Divider_bottom: {
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing.unit * 2.5
        }
    },
    LogoSection: {
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            paddingTop: theme.spacing.unit * 2.5,
            paddingBottom: theme.spacing.unit * 2.5
        }
    }
});

export default styles;