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
        border: '1px solid',
        borderColor: theme.palette.border.dark,
        borderRadius: theme.shape.borderRadius,
        borderTopLeftRadius: 0
    },
    Toolbar: {
        padding: theme.spacing.unit * 2.5,
        borderBottom: '1px solid',
        borderBottomColor: theme.palette.border.dark,
        backgroundColor: theme.palette.grey[50]
    },
    Card: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: theme.palette.divider,
        transition: theme.transitions.create(),
        '&:hover': {
            borderColor: theme.palette.primary.main,
            boxShadow: theme.states.hover.boxShadow
        }
    },
    CardMedia: {
        height: 120
    },
    CardHeader: {
        padding: theme.spacing.unit * 1.5
    },
    CardHeader_title: {
        height: '3em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign: 'center',
        color: theme.palette.grey[700]
    },
    Button_addCaption: {
        margin: 0
    },
    TextField: {
        maxWidth: theme.breakpoints.values.sm,
        margin: 'auto',
        backgroundColor: theme.palette.common.white
    },
    Icon: {
        marginRight: theme.spacing.unit
    },
    input_uploadFile: {
        display: 'none',
    },
    tabContent: {
        textAlign: 'center',
        padding: theme.spacing.unit * 2.5,
        backgroundColor: theme.palette.grey[50],
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing.unit * 5,
        }
    },
    Typography_uploadFile: {
        paddingTop: theme.spacing.unit * 2.5,
        paddingBottom: theme.spacing.unit * 2.5,
    },
    gridContainer: {
        padding: theme.spacing.unit * 2,
        minHeight: 480,
        position: 'relative'
    },
    Typography_emptyMessage: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    progressContainer: {
        paddingTop: theme.spacing.unit * 2.5,
        textAlign: 'center'
    },
    uploadingContainer: {
        marginTop: theme.spacing.unit * 2.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    LinearProgress: {
        width: '100%',
        maxWidth: 750
    }
});

export default styles;