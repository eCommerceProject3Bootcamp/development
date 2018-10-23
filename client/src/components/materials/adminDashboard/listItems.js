import React from 'react';
import {ListSubheader, ListItemText, ListItemIcon, ListItem} from '@material-ui/core';
import {
    Assignment as AssignmentIcon,
    Layers as LayersIcon,
    BarChart as BarChartIcon,
    People as PeopleIcon,
    ShoppingCart as ShoppingCartIcon,
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
            <ShoppingCartIcon/>
        </ListItemIcon>
        <ListItemText primary="Orders"/>
    </ListItem>
    <ListItem button="button">
        <ListItemIcon>
            <PeopleIcon/>
        </ListItemIcon>
        <ListItemText primary="Customers"/>
    </ListItem>
    <ListItem button="button">
        <ListItemIcon>
            <BarChartIcon/>
        </ListItemIcon>
        <ListItemText primary="Reports"/>
    </ListItem>
    <ListItem button="button">
        <ListItemIcon>
            <LayersIcon/>
        </ListItemIcon>
        <ListItemText primary="Integrations"/>
    </ListItem>
</div>);

export const secondaryListItems = (<div>
    <ListSubheader inset="inset">Saved reports</ListSubheader>
    <ListItem button="button">
        <ListItemIcon>
            <AssignmentIcon/>
        </ListItemIcon>
        <ListItemText primary="Current month"/>
    </ListItem>
    <ListItem button="button">
        <ListItemIcon>
            <AssignmentIcon/>
        </ListItemIcon>
        <ListItemText primary="Last quarter"/>
    </ListItem>
    <ListItem button="button">
        <ListItemIcon>
            <AssignmentIcon/>
        </ListItemIcon>
        <ListItemText primary="Year-end sale"/>
    </ListItem>
</div>);
