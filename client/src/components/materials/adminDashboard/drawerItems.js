import React from 'react';
import { ListSubheader, ListItemText, ListItemIcon, ListItem } from '@material-ui/core';
import { Assignment, BarChart, People, Folder, AddBox } from '@material-ui/icons';

export const MainListItems = ({ pageState }) => (
    <div>
        <ListItem button onClick={event => pageState(event, 'AddProducts')}>
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
        <ListSubheader inset="inset">Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <Assignment />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
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
        </ListItem>
    </div>
);
