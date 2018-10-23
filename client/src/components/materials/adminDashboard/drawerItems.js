import React from 'react';
import {ListSubheader, ListItemText, ListItemIcon, ListItem} from '@material-ui/core';
import {
    Assignment,
    Layers,
    BarChart,
    People,
    ShoppingCart,
    Dashboard as DashboardIcon
} from '@material-ui/icons';

export const mainListItems = (<div>
    <ListItem button="button">
        <ListItemIcon>
            <DashboardIcon/>
        </ListItemIcon>
        <ListItemText primary="Dashboard"/>
    </ListItem>
    <ListItem button="button">
        <ListItemIcon>
            <ShoppingCart/>
        </ListItemIcon>
        <ListItemText primary="Orders"/>
    </ListItem>
    <ListItem button="button">
        <ListItemIcon>
            <People/>
        </ListItemIcon>
        <ListItemText primary="Customers"/>
    </ListItem>
    <ListItem button="button">
        <ListItemIcon>
            <BarChart/>
        </ListItemIcon>
        <ListItemText primary="Reports"/>
    </ListItem>
    <ListItem button="button">
        <ListItemIcon>
            <Layers/>
        </ListItemIcon>
        <ListItemText primary="Integrations"/>
    </ListItem>
</div>);

export const secondaryListItems = (<div>
    <ListSubheader inset="inset">Saved reports</ListSubheader>
    <ListItem button="button">
        <ListItemIcon>
            <Assignment/>
        </ListItemIcon>
        <ListItemText primary="Current month"/>
    </ListItem>
    <ListItem button="button">
        <ListItemIcon>
            <Assignment/>
        </ListItemIcon>
        <ListItemText primary="Last quarter"/>
    </ListItem>
    <ListItem button="button">
        <ListItemIcon>
            <Assignment/>
        </ListItemIcon>
        <ListItemText primary="Year-end sale"/>
    </ListItem>
</div>);
