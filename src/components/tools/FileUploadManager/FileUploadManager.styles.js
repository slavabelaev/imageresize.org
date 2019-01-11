const styles = theme => ({
    root: {},
    MessageStack: {
        marginBottom: theme.spacing.unit * 3
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
        backgroundImage: theme.palette.border.dashedBorderImageDark,
        marginBottom: theme.spacing.unit * 2.5
    },
    dropzone_isActive: {
        backgroundColor: theme.palette.secondary[50],
        backgroundImage: theme.palette.border.dashedBorderImageSecondary,
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: theme.spacing.unit * 2.5,
        minHeight: 200,
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing.unit * 5,
        }
    },
    Typography_uploadFile: {
        paddingTop: theme.spacing.unit * 3
    },
    progressContainer: {
        paddingTop: theme.spacing.unit * 3,
        textAlign: 'center'
    },
    uploadingContainer: {
        marginTop: theme.spacing.unit * 2,
        display: 'flex',
        alignItems: 'center'
    },
    List_file: {
        padding: 0
    },
    ListItem_file: {
        minHeight: theme.spacing.unit * 7,
        backgroundColor: theme.palette.grey[50],
        borderColor: theme.palette.border.dark,
        borderRadius: theme.shape.borderRadius,
        marginBottom: (theme.spacing.unit * 2) + (theme.spacing.unit / 2),
        backgroundImage: theme.palette.border.dashedBorderImageDark,
        transition: theme.transitions.create(),
        transitionProperty: 'background-color',
        '&:hover': {
            backgroundColor: theme.palette.primary[50],
            backgroundImage: theme.palette.border.dashedBorderImagePrimary
        },
        [theme.breakpoints.down('xs')]: {
            paddingBottom: theme.spacing.unit * 5
        }
    },
    ListItemText_file: {
        [theme.breakpoints.down('xs')]: {
            whiteSpace: 'nowrap',
            overflow: 'auto',
            padding: 0
        }
    },
    ListItemSecondaryAction_file: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            left: theme.spacing.unit * 3,
            bottom: 0,
            top: 'initial',
            transform: 'initial'
        }
    },
    LinearProgress_file: {
        minWidth: 100,
        width: '100%'
    },
    uploadInfo: {
        position: 'absolute',
        bottom: 0,
        top: 0,
        right: 0,
        paddingLeft: theme.spacing.unit * 2.5,
        paddingRight: theme.spacing.unit * 2.5,
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '50%',
        whiteSpace: 'normal',
        textAlign: 'right'
    }
});

export default styles;