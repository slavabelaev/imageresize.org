const styles = theme => ({
    root: {},
    AppLogo: {
        padding: theme.spacing.unit * 2.5,
    },
    Toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 0,
        paddingLeft: 0,
        borderColor: theme.palette.border.light,
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
    MenuList: {
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            marginLeft: 'auto'
        }
    },
    MenuItem: {
        fontSize: theme.typography.fontSize,
        textTransform: 'uppercase',
        '&>i': {
            opacity: .5
        },
        '&:hover>i': {
            opacity: 1
        },
        '&:hover': {
            color: theme.palette.text.primary,
            backgroundColor: 'initial'
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing.unit * 3 + 4,            
            borderStyle: 'solid',
            borderLeftWidth: 1,
            borderColor: theme.palette.border.light,
        }
    },
    MenuItem_selected: {
        backgroundColor: theme.palette.grey[50],
        boxShadow: theme.palette.grey[50] + ' 0 2px 0 0',
        color: theme.palette.text.primary,
        fontWeight: 500,
        marginBottom: -1,
        '&>i': {
            opacity: 1
        },
        '&:hover': {
            backgroundColor: theme.palette.grey[50]
        }
    },
    AppIcon: {
        marginRight: 12
    },
    Tabs: {
        borderColor: theme.palette.border.light,
        backgroundColor: theme.palette.grey[50],
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0
    },
    Tab: {
        textTransform: 'initial',
        fontWeight: 'initial',
        fontSize: '1rem',
        '&[aria-selected=true]': {
            fontWeight: 500,
            color: theme.palette.text.primary
        },
        '&:not([aria-selected=true]):hover': {
            color: theme.palette.text.primary
        },
        [theme.breakpoints.up('md')]: {
            minHeight: 70
        }
    },
    IconButton_toggleDrawer: {
        marginRight: theme.spacing.unit
    }
});

export default styles;