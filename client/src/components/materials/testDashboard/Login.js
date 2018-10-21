import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const handleLoginButton = (link) => {
    console.log(link)
}

const Profile = "Profile Placeholder";
const MyAccount = "My Account Placeholder";

export const Login = ({auth, anchorEl, handleLoginChange, handleLoginMenu, handleLoginClose}) => {
    const open = Boolean(anchorEl);
    return (
        <span>
            {auth && (
                <span>
                    <IconButton
                        aria-owns={open ? 'menu-appbar' : null}
                        aria-haspopup="true"
                        onClick={handleLoginMenu}
                        color="inherit"
                        >
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
                            onClose={handleLoginClose}
                            >
                                <MenuItem link={Profile} onClick={(event)=>handleLoginButton(event.target.getAttribute('link'))}>Profile</MenuItem>
                                <MenuItem link={MyAccount} onClick={(event)=>handleLoginButton(event.target.getAttribute('link'))}>My account</MenuItem>
                            </Menu>
                        </span>
                    )}
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Switch checked={auth} onChange={handleLoginChange} aria-label="LoginSwitch" />
                            }
                            color="inherit"
                            label={auth ? 'Logout' : 'Login'}
                        />
                    </FormGroup>
                </span>
            )

        }
