import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Nav from '../components/Nav';
import ListingSmall from './materials/adminDashboard/AddProducts/ListingSmall';
import ListingBig from './materials/ListingBig';
import axios from 'axios';
import { Typography, Grid, CssBaseline, Button, ClickAwayListener, Modal } from '@material-ui/core';

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
});

class Main extends Component {
    state = {
        products: [],
        open: null,
    };

    componentDidMount() {
        // Here I will fill up the state with database stuff
        this.fillState();
    }

    fillState = async () => {
        let ids = await axios.get('http://localhost:3001/api/products/rows/id');
        ids = ids.data.map(e => e.id);
        let jfc = [];
        for (let x of ids) {
            jfc.push(axios.get(`http://localhost:3001/api/products/${x}`));
        }
        Promise.all(jfc).then(data => {
            data = data.map(e => {
                e = e.data;
                e.pictures = JSON.parse(e.pictures);
                return e;
            });
            this.setState({ products: data });
        });
    };

    render() {
        const { classes } = this.props;
        const { products, open } = this.state;

        return (
            <React.Fragment>
                <CssBaseline />
                <Nav />
                <main>
                    {/* Hero unit */}
                    <div className={classes.heroUnit}>
                        <div className={classes.heroContent}>
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Album layout
                            </Typography>
                            <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                Something short and leading about the collection below— its contents, the creator,
                                etc.Make it short and sweet, but not too short so folks don't simply skip over it
                                entirely.
                            </Typography>
                            <div className={classes.heroButtons}>
                                <Grid container spacing={16} justify="center">
                                    <Grid item>
                                        <Button variant="contained" color="primary">
                                            Main call to action
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined" color="primary">
                                            Secondary action
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                    {/* End hero unit */}
                    <div className={classNames(classes.layout, classes.cardGrid)}>
                        <ClickAwayListener onClickAway={() => this.setState({ open: null })}>
                            <Grid container justify={'center'} spacing={40}>
                                {/* Put listing components here I.E */}
                                {products.length > 0 &&
                                    products.map(e => {
                                        return (
                                            <Grid item key={e.id}>
                                                <ListingSmall
                                                    onClick={() => this.setState({ open: e.id })}
                                                    name={e.name}
                                                    description={e.description}
                                                    classes={{
                                                        card: classes.card,
                                                        media: classes.media,
                                                    }}
                                                    picture={e.pictures[e.primary]}
                                                />
                                                <Modal
                                                    style={{
                                                        width: '90%',
                                                        height: '90%',
                                                    }}
                                                    aria-labelledby={e.name}
                                                    aria-describedby={`${e.description.slice(0, 30)}...`}
                                                    open={open === e.id}
                                                    onClose={() => this.setState({ open: null })}>
                                                    <ListingBig product={e} classes={classes} />
                                                </Modal>
                                                <Typography>{e.name}</Typography>
                                            </Grid>
                                        );
                                    })}
                            </Grid>
                        </ClickAwayListener>
                    </div>
                </main>
                {/* Footer */}
                <footer className={classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Something here to give the footer a purpose!
                    </Typography>
                </footer>
                {/* End footer */}
            </React.Fragment>
        );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
