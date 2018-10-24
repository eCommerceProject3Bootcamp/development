export const styles = theme => ({
    root: {
        flexGrow: 1
    },
    control: {
        padding: theme.spacing.unit * 2
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 400
    },
    inputFile: {
        width: theme.spacing.unit*0.1,
        height: theme.spacing.unit*0.1,
        opacity: 0,
        overflow: "hidden",
        position: "absolute",
        zIndex: -1
    }
});
