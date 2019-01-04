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
        backgroundImage: theme.palette.border.dashedBorderImageDark,
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
    uploadFileContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: theme.spacing.unit * 4,
        minHeight: 200
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
    LinearProgress: {
        width: '100%'
    },
    ListItemSecondaryAction_file: {
        display: 'flex',
        alignItems: 'center'
    },
    LinearProgress_file: {
        minWidth: 100
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
        }
    },
    uploadInfo: {
        position: 'absolute',
        bottom: 0,
        top: 0,
        right: 0,
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3,
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
    }
});

export default styles;