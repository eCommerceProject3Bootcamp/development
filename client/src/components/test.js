import React from 'react';
import { Grid, List, ListItem, Typography } from '@material-ui/core';
import { AccountBox, Search as SearchIcon } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import styles from './materials/adminDashboard/styles/dashboardStyles';

class Test extends React.Component {
    state = {};

    render() {
        return (
            <Grid container>
                <Grid item>
                    <List>
                        <ListItem>
                            <Typography>Hello World</Typography>
                            <AccountBox />
                            <SearchIcon />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Test);
