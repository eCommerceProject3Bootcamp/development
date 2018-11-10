import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Menu, MenuItem, ListItemIcon, FormControlLabel, Switch } from '@material-ui/core';

const handleLoginButton = link => {
    console.log(link);
};

const Profile = 'Profile Placeholder';
const MyAccount = 'My Account Placeholder';

const Login = props => {
    const { auth, anchorEl, handleLoginMenu, handleLoginChange, opened } = props;
    const open = Boolean(anchorEl);

    return (
        <span>
            {auth && (
                <span>
                    <ListItemIcon
                        aria-owns={open ? 'menu-appbar' : null}
                        aria-haspopup="true"
                        onClick={handleLoginMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </ListItemIcon>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleLoginMenu}
                    >
                        <MenuItem
                            link={Profile}
                            onClick={event => handleLoginButton(event.target.getAttribute('link'))}
                        >
                            Profile
                        </MenuItem>
                        <MenuItem
                            link={MyAccount}
                            onClick={event => handleLoginButton(event.target.getAttribute('link'))}
                        >
                            My account
                        </MenuItem>
                    </Menu>
                </span>
            )}
            {opened && (
                <FormControlLabel
                    control={<Switch checked={auth} onChange={handleLoginChange} aria-label="LoginSwitch" />}
                    color="inherit"
                    label="(testing) Login"
                />
            )}
        </span>
    );
};

export default Login;
