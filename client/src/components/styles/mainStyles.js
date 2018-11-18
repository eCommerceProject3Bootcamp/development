const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    media: {
        paddingTop: '56.25%', // 16:9,
    },
    mediaLarge: {
        height: '45vh',
        width: '45vh',
        objectFit: 'scale-down',
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
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
    inputFile: {
        width: theme.spacing.unit * 0.1,
        height: theme.spacing.unit * 0.1,
        opacity: 0,
        overflow: 'hidden',
        position: 'absolute',
        zIndex: -1,
    },
    card: {
        height: 100,
        width: 200,
        overflowY: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: theme.transitions.create(['width', 'height'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    cardOpen: {
        height: 345,
        width: 345,
        overflowY: 'scroll',
        transition: theme.transitions.create(['width', 'height'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    pictureContainer: {
        boxShadow: theme.shadows[5],
        borderRadius: theme.shape.borderRadius,
    },
    divider: {
        marginBottom: theme.spacing.unit,
        marginTop: theme.spacing.unit,
    },
    gridListTile: {
        borderRadius: theme.shape.borderRadius,
        width: theme.spacing.unit * 7,
    },
    'gridListTile:hover': {
        boxShadow: theme.shadows[5],
    },
});
export default styles;
