const styles = theme => ({
    root: {

    },
    actionsContainer: {
        textAlign: 'center'
    },
    Button_action: {
        '&+button': {
            marginLeft: theme.spacing.unit
        }
    },
    SplitManager: {
        marginBottom: theme.spacing.unit * 2.5
    }
});

export default styles;