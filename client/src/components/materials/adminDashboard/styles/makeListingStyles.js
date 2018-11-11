const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    topMargin: {
        paddingTop: theme.spacing.unit * 5,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    textField: {
        padding: theme.spacing.unit,
        width: '100%',
    },
    thumbnail: {
        // marginLeft: theme.spacing.unit,
        // marginRight: theme.spacing.unit,
        width: 100,
        height: 100,
    },
    inputFile: {
        width: theme.spacing.unit * 0.1,
        height: theme.spacing.unit * 0.1,
        opacity: 0,
        overflow: 'hidden',
        position: 'absolute',
        zIndex: -1,
    },
    card: {
        width: '90vw',
        height: '60vh',
    },
    media: {
        height: '30vh',
    },
});
export default styles;
