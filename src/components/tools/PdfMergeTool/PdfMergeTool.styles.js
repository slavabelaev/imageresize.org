const styles = theme => ({
    root: {

    },
    documentsContainer: {
        maxHeight: 572,
        backgroundColor: theme.palette.grey[100],
        marginBottom: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 7.5,
        overflow: 'auto'
    },
    Grid_item: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Card: {
        position: 'relative',
        width: '90%',
        maxWidth: 300,
        boxShadow: '#CFDDE6 0 4px 20px',
        marginTop: theme.spacing.unit * 7.5,
    },
    coverContainer: {
        padding: theme.spacing.unit * 2.5,
        paddingBottom: 0
    },
    coverWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 370,
        width: '100%',
        border: theme.palette.grey[200] + ' 1px solid',
        backgroundColor: theme.palette.grey[50],
        //backgroundImage: `url(${require('./Adobe_PDF.svg')})`,
        backgroundSize: '80% auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    cover: {
        maxWidth: '100%',
        maxHeight: '100%'
    },
    CardContent: {
        textAlign: 'center'
    },
    CardActions: {
        flexDirection: 'column',
        position: 'absolute',
        top: 0,
        right: 0,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit / 2}px`,
    },
    actionsContainer: {
        textAlign: 'center'
    },
    IconButton: {
        margin: theme.spacing.unit / 2,
        backgroundColor: theme.palette.grey[50],
        boxShadow: 'rgba(0,0,0,.16) 0 2px 4px',
        '&:hover': {
            backgroundColor: theme.palette.grey[100]
        }
    },
    IconButton_remove: {
        color: theme.palette.error.main
    },
    Typography_documentName: {
        color: theme.palette.grey[700],
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    },
    Button_action: {
        '&+button': {
            marginLeft: theme.spacing.unit
        }
    }
});

export default styles;