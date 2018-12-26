const styles = theme => ({
    root: {

    },
    Tabs: {
        marginBottom: -.5,
        '& [class*=MuiTabs-indicator]': {
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
        fontSize: '1.125rem',
        fontWeight: 'initial',
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
        padding: theme.spacing.unit * 3,
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
            boxShadow: `${theme.palette.primary.main} 0 0 0 1px, rgba(41, 182, 246, .5) 0 0 8px`
        }
    },
    CardMedia: {
        height: 120
    },
    CardHeader: {
        padding: 12
    },
    CardHeader_title: {
        height: '3em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign: 'center',
        color: theme.palette.grey[700]
    },
    Button_addCaption: {
        backgroundColor: theme.palette.grey[50],
        borderColor: '#C2CBD0',
        margin: 0
    },
    TextField_search: {
        maxWidth: 600,
        margin: 'auto',
        backgroundColor: theme.palette.common.white
    },
    SearchIcon: {
        marginRight: theme.spacing.unit
    },
    inputFile: {
        display: 'none',
    },
    tabContainer: {
    },
    gridContainer: {
        padding: theme.spacing.unit * 3
    },
    progressContainer: {
        paddingTop: theme.spacing.unit * 3,
        textAlign: 'center'
    }
});

export default styles;