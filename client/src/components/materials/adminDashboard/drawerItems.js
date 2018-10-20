import React from 'react';
import { ListSubheader, ListItemText, ListItemIcon, ListItem } from '@material-ui/core';
import { Assignment, BarChart, People, ShoppingCart, Dashboard as DashboardIcon } from '@material-ui/icons';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ShoppingCart />
            </ListItemIcon>
            <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button>
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
        </ListItem>
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
