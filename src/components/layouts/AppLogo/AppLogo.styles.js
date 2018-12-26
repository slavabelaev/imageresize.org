const styles = theme => ({
    root: {
        display: 'inline-flex',
        transition: theme.transitions.create(),
        '&:hover': {
            opacity: .64
        }
    },
    image: {
        width: '100%'
    }
});

export default styles;