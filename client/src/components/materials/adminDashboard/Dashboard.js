import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import {styles} from './dashboardStyles';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import {
    IconButton,
    Divider,
    Typography,
    List,
    Toolbar,
    AppBar,
    Drawer,
    CssBaseline
} from '@material-ui/core'
import {ChevronLeft as ChevronLeftIcon, Menu as MenuIcon} from '@material-ui/icons';
import {mainListItems, secondaryListItems} from './drawerItems';
import {Login} from '../Login';

class Dashboard extends React.Component {
    state = {
        open: true,
        auth: false,
        anchorEl: null
    };

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    handleLoginChange = event => {
        this.setState({auth: event.target.checked});
    };

    handleLoginMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleLoginClose = () => {
        this.setState({anchorEl: null});
    };

    render() {
        // This is how we access the "styles", from dashboardStyles.js. This is because we use the material-ui "withStyles(styles)(Dashboard)" function. our "props" here, is classes.
        const {classes} = this.props;
        const {auth, anchorEl} = this.state;
        return (<React.Fragment>
            <CssBaseline/>
            <div className={classes.root}>

                <AppBar position="absolute" className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
                    <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>

                        <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerOpen} className={classNames(classes.menuButton, this.state.open && classes.menuButtonHidden)}>
                            <MenuIcon/>
                        </IconButton>

                        <Typography component="h1" variant="h6" color="inherit" noWrap="noWrap" className={classes.title}>
                            Dashboard
                        </Typography>

                        <Login auth={auth} anchorEl={anchorEl} handleLoginMenu={this.handleLoginMenu} handleLoginChange={this.handleLoginChange} handleLoginClose={this.handleLoginClose}/>

                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" classes={{
                        paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)
                    }} open={this.state.open}>
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </div>
                    <Divider/>
                    <List>{mainListItems}</List>
                    <Divider/>
                    <List>{secondaryListItems}</List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer}/>
                    <Typography variant="h4" gutterBottom="gutterBottom" component="h2">
                        Placeholder
                    </Typography>
                    <Typography component="div" className={classes.chartContainer}>
                        {/* This is a placeholder */}
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </Typography>
                    <Divider />
                    <Typography variant="h4" gutterBottom="gutterBottom" component="h2">
                        Add Listing
                    </Typography>
                    <div className={classes.tableContainer}>
                        {/* Seems like component // applets can go here */}

                    </div>
                </main>
            </div>
        </React.Fragment>);
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
