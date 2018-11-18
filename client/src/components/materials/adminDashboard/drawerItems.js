import React from 'react';
import { ListItemText, ListItemIcon, ListItem } from '@material-ui/core';
import { Home, Folder, AddBox } from '@material-ui/icons';
import Login from '../Login';

export const MainListItems = ({ pageState, opened, auth, anchorEl, handleLoginMenu, handleLoginChange }) => (
    <div>
        <ListItem button onClick={event => pageState(event, 'MakeListing')}>
            <ListItemIcon>
                <AddBox />
            </ListItemIcon>
            <ListItemText primary="Add Products" />
        </ListItem>
        <ListItem button onClick={event => pageState(event, 'ViewProducts')}>
            <ListItemIcon>
                <Folder />
            </ListItemIcon>
            <ListItemText primary="View Products" />
        </ListItem>
        <ListItem button>
            <Login
                opened={opened}
                auth={auth}
                anchorEl={anchorEl}
                handleLoginMenu={handleLoginMenu}
                handleLoginChange={handleLoginChange}
            />
        </ListItem>
        {/* <ListItem button>
            <ListItemIcon>
                <People />
            </ListItemIcon>
            <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <BarChart />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItem> */}
    </div>
);

export const secondaryListItems = (
    <div>
        {/* <ListSubheader inset="inset">Saved reports</ListSubheader> */}
        {/* Here is how to redirect to home when that's ready */}
        <ListItem button onClick={() => console.log(window.location.href)}>
            <ListItemIcon>
                <Home />
            </ListItemIcon>
            <ListItemText primary="Home Page" />
        </ListItem>
        {/* <ListItem button>
            <ListItemIcon>
                <Assignment />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Assignment />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItem> */}
    </div>
);
