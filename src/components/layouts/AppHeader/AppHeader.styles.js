const styles = theme => ({
    root: {

    },
    Toolbar: {
        paddingRight: 0,
        borderColor: theme.palette.border.light,
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0
    },
    MenuList: {
        display: 'flex',
        marginLeft: 'auto'
    },
    MenuItem: {
        fontSize: theme.typography.fontSize,
        borderStyle: 'solid',
        borderLeftWidth: 1,
        borderColor: theme.palette.border.light,
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
        [theme.breakpoints.up('lg')]: {
            padding: theme.spacing.unit * 3 + 4
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
        [theme.breakpoints.up('lg')]: {
            minHeight: 70
        }
    }
});

export default styles;