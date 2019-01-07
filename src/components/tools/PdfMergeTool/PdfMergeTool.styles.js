const styles = theme => ({
    root: {

    },
    documentsContainer: {
        maxHeight: 572,
        backgroundColor: theme.palette.grey[50],
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
    canvasContainer: {
        padding: theme.spacing.unit * 3,
        paddingBottom: 0
    },
    canvas: {
        height: 370,
        width: '100%',
        border: theme.palette.grey[200] + ' 1px solid'
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
        boxShadow: 'rgba(0,0,0,.16) 0 2px 4px'
    },
    IconButton_remove: {
        color: theme.palette.error.main
    },
    Typography_documentName: {
        color: theme.palette.grey[700]
    }
});

export default styles;