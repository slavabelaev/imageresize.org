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
        marginRight: theme.spacing.unit * 2.5,
        '&:last-child': {
            marginRight: 0
        }
    },
    Button_large: {
        flex: 1,
        borderRadius: 0,
        minHeight: 90,
        [theme.breakpoints.down('md')]: {
            minWidth: 90,
            minHeight: 60
        },
        '&+[role=button]': {
            [theme.breakpoints.up('md')]: {
                borderLeftWidth: 0
            }
        },
        '&:first-child': {
            borderTopLeftRadius: theme.shape.borderRadius,
            borderBottomLeftRadius: theme.shape.borderRadius
        },
        '&:last-child': {
            borderTopRightRadius: theme.shape.borderRadius,
            borderBottomRightRadius: theme.shape.borderRadius
        }
    },
    buttonList: {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;