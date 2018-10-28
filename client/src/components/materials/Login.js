import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Menu, MenuItem, IconButton } from '@material-ui/core';

const handleLoginButton = link => {
    console.log(link);
};

const Profile = 'Profile Placeholder';
const MyAccount = 'My Account Placeholder';

const Login = props => {
    const { auth, anchorEl, handleLoginMenu, handleLoginClose } = props;
    const open = Boolean(anchorEl);
    return (
        auth && (
            <span>
                <IconButton aria-owns={open ? 'menu-appbar' : null} aria-haspopup="true" onClick={handleLoginMenu} color="inherit">
                    <AccountCircle />
                </IconButton>
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
                    onClose={handleLoginClose}>
                    <MenuItem link={Profile} onClick={event => handleLoginButton(event.target.getAttribute('link'))}>
                        Profile
                    </MenuItem>
                    <MenuItem link={MyAccount} onClick={event => handleLoginButton(event.target.getAttribute('link'))}>
                        My account
                    </MenuItem>
                </Menu>
            </span>
        )
    );
};

export default Login;
