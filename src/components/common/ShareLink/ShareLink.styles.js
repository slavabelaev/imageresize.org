const styles = theme => ({
    root_grouped: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    root_rounded: {
    },
    IconButton_rounded: {
        backgroundColor: theme.palette.grey[100],
        marginRight: theme.spacing.unit,
        '&:last-child': {
            marginRight: 0
        },
        [theme.breakpoints.up('md')]: {
            marginRight: theme.spacing.unit * 2.5
        }
    },
    Button_large: {
        flex: 1,
        borderRadius: 0,
        minHeight: 90,
        [theme.breakpoints.down('sm')]: {
            minWidth: 90,
            minHeight: 60,
            '&:first-child': {
                borderTopLeftRadius: theme.shape.borderRadius
            },
            '&:nth-child(3)': {
                borderTopRightRadius: theme.shape.borderRadius
            },
            '&:nth-child(4)': {
                borderBottomLeftRadius: theme.shape.borderRadius
            },
            '&:last-child': {
                borderBottomRightRadius: theme.shape.borderRadius
            }
        },
        '&+[role=button]': {
            [theme.breakpoints.up('sm')]: {
                borderLeftWidth: 0
            }
        },
        [theme.breakpoints.up('sm')]: {
            '&:first-child': {
                borderTopLeftRadius: theme.shape.borderRadius,
                borderBottomLeftRadius: theme.shape.borderRadius
            },
            '&:last-child': {
                borderTopRightRadius: theme.shape.borderRadius,
                borderBottomRightRadius: theme.shape.borderRadius
            }
        },
    },
    buttonList: {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;