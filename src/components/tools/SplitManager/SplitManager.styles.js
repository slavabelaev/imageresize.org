const styles = theme => ({
    root: {

    },
    Tabs: {
        marginBottom: -1,
        '& [role=tablist]>span': {
            display: 'none'
        }
    },
    Tab: {
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius,
        border: '1px solid',
        borderColor: theme.palette.border.light,
        borderBottomWidth: 0,
        backgroundColor: 'initial',
        textTransform: 'initial',
        fontWeight: 500,
        fontSize: '1rem',
        color: theme.palette.text.secondary,
        transition: theme.transitions.create(),
        '&:not([aria-selected=true]):hover': {
            borderColor: theme.palette.border.dark,
            color: theme.palette.text.primary
        },
        '&[aria-selected=true]': {
            backgroundColor: theme.palette.grey[50],
            borderColor: theme.palette.border.dark,
            color: theme.palette.text.primary
        },
        '&+button': {
            marginLeft: -1
        }
    },
    SwipeableViews: {
        borderRadius: theme.shape.borderRadius,
        borderTopLeftRadius: 0,
        backgroundColor: theme.palette.grey[50],
        borderColor: theme.palette.border.dark,
        borderStyle: 'solid',
        borderWidth: 1
    },
    tabContent: {
        padding: theme.spacing.unit * 2.5,
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing.unit * 5
        }
    },
    List_range: {
        width: '100%',
        padding: 0
    },
    ListItem_range: {
        backgroundColor: theme.palette.white,
        borderRadius: theme.shape.borderRadius,
        borderColor: theme.palette.border.light,
        borderStyle: 'solid',
        borderWidth: 1,
        marginTop: theme.spacing.unit * 2.5,
        padding: theme.spacing.unit * 2.5
    },
    Grid_range: {
        alignItems: 'center'
    },
    TextField_range: {
        
    },
    Grid_removeAction: {
        padding: '0!important',
        [theme.breakpoints.down('md')]: {
            position: 'absolute',
            right: theme.spacing.unit,
            top: theme.spacing.unit
        }
    },
    Button_addRange: {
        backgroundColor: theme.palette.white
    },
    contentActionsContainer: {
        marginTop: theme.spacing.unit * 2,
        [theme.breakpoints.up('md')]: {
            textAlign: 'center',
        }
    }
});

export default styles;