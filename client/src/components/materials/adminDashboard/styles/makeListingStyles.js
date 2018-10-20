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
        width: 400,
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
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});
export default styles;
