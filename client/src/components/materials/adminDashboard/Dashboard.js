import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/dashboardStyles';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import { IconButton, Divider, Typography, List, Toolbar, AppBar, Drawer, CssBaseline, FormGroup, FormControlLabel, Switch, Button } from '@material-ui/core';
import { ChevronLeft as ChevronLeftIcon, Menu as MenuIcon } from '@material-ui/icons';
import { MainListItems, secondaryListItems } from './drawerItems';
import MakeListing from './MakeListing';
import Login from '../Login';
import Auth from '../../../Auth/Auth.js';

class Dashboard extends React.Component {
    state = {
        open: false,
        auth: true,
        anchorEl: null,
        currentPage: 'Listing',
    };

    auth = new Auth();

    handleDrawerToggle = () => {
        this.setState({
            open: !this.state.open,
        });
    };

    handleLoginChange = event => {
        this.setState({
            auth: event.target.checked,
        });
    };

    handleLoginMenu = event => {
        let final = this.state.anchorEl === null ? event.currentTarget : null;
        this.setState({
            anchorEl: final,
        });
    };

    pageState = (event, name) => {
        this.setState(state => {
            state.currentPage = name;
            return state;
        });
    };

    // Other applets can go here, then assign in drawerItems the corresponding key as the argument to this function there
    handleDashBoardChange = arg => {
        const obj = {
            Listing: <MakeListing />,
        };
        return obj[arg];
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
                                onClick={this.handleDrawerToggle}
                                className={classNames(classes.menuButton, this.state.open && classes.menuButtonHidden)}>
                                <MenuIcon />
                            </IconButton>
                            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                Placeholder
                            </Typography>
                            <Login auth={auth} anchorEl={anchorEl} handleLoginMenu={this.handleLoginMenu} />
                            <FormGroup>
                                <FormControlLabel control={<Switch checked={auth} onChange={this.handleLoginChange} aria-label="LoginSwitch" />} color="inherit" label="(testing) Login" />
                                <FormControlLabel control={<Button onClick={this.auth.login()} />} color="inherit" label="Sign in" />
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
                            <IconButton onClick={this.handleDrawerToggle}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </div>
                        <Divider />
                        <List>{<MainListItems pageState={this.pageState} />}</List>
                        <Divider />
                        {/* <List>{secondaryListItems}</List> */}
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />
                        <Divider />
                        <div className={classes.tableContainer}>
                            {/* Seems like component // applets can go here */}
                            {this.handleDashBoardChange(this.state.currentPage)}
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
