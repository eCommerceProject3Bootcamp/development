import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/dashboardStyles';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import { IconButton, Divider, Typography, List, Toolbar, AppBar, Drawer, CssBaseline, FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import { ChevronLeft as ChevronLeftIcon, Menu as MenuIcon } from '@material-ui/icons';
import { mainListItems, secondaryListItems } from './drawerItems';
import MakeListing from './MakeListing';
import Login from '../Login';

class Dashboard extends React.Component {
    state = {
        open: false,
        auth: true,
        anchorEl: null,
    };

    handleDrawerOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleDrawerClose = () => {
        this.setState({
            open: false,
        });
    };

    handleLoginChange = event => {
        this.setState({
            auth: event.target.checked,
        });
    };

    handleLoginMenu = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleLoginClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    render() {
        // This is how we access the "styles", from dashboardStyles.js. This is because we use the material-ui "withStyles(styles)(Dashboard)" function. our "props" here, is classes.
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        return (
            <React.Fragment>
                <CssBaseline />
                <div className={classes.root}>
                    <AppBar position="absolute" className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
                        <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton, this.state.open && classes.menuButtonHidden)}>
                                <MenuIcon />
                            </IconButton>
                            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                Placeholder
                            </Typography>
                            <Login auth={auth} anchorEl={anchorEl} handleLoginMenu={this.handleLoginMenu} handleLoginClose={this.handleLoginClose} />
                            <FormGroup>
                                <FormControlLabel control={<Switch checked={auth} onChange={this.handleLoginChange} aria-label="LoginSwitch" />} color="inherit" label="(testing) Login" />
                            </FormGroup>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}
                        open={this.state.open}>
                        <div className={classes.toolbarIcon}>
                            <IconButton onClick={this.handleDrawerClose}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </div>
                        <Divider />
                        <List>{mainListItems}</List>
                        <Divider />
                        {/* <List>{secondaryListItems}</List> */}
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />
                        <Divider />
                        <div className={classes.tableContainer}>
                            {/* Seems like component // applets can go here */}
                            <MakeListing />
                        </div>
                    </main>
                </div>
            </React.Fragment>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
