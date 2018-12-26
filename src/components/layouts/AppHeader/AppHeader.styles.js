const styles = theme => ({
    Toolbar: {
        paddingRight: 0
    },
    MenuList: {
        display: 'flex',
        marginLeft: 'auto'
    },
    MenuItem: {
        borderStyle: 'solid',
        borderLeftWidth: 1,
        borderColor: theme.palette.border.light,
        textTransform: 'uppercase',
        '&>i': {
            opacity: .36
        },
        '&:hover>i': {
            opacity: .64
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
        marginBottom: -1,
        '&>i': {
            opacity: .64
        },
        '&:hover': {
            backgroundColor: theme.palette.grey[50]
        }
    },
    AppIcon: {
        marginRight: 12
    },
    AppBar: {
        borderColor: theme.palette.border.light,
        backgroundColor: theme.palette.grey[50],
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0
    },
    Tab: {
        textTransform: 'initial',
        fontSize: '1rem',
        fontWeight: 'initial',
        transition: theme.transitions.create(),
        '&:not([aria-selected=true]):hover': {
            color: theme.palette.text.primary
        },
        [theme.breakpoints.up('lg')]: {
            minHeight: 70
        }
    }
});

export default styles;