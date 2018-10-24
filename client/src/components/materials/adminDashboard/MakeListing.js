import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AttachFile as AttachFileIcon, Menu as MenuIcon, Add as AddIcon, Done as DoneIcon} from '@material-ui/icons';
import {
    IconButton,
    Divider,
    Typography,
    Grid,
    MenuItem,
    TextField
} from '@material-ui/core';

import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import {styles} from './makeListingStyles';

class MakeListing extends Component {
    state = {
        'thumbnails': [],
        'pictures': [],
        'description': "",
        'name': ""
    }

    handleTextFieldChange = name => event => {
        this.setState({[name]: event.target.value}).then(()=>console.log(this.state));
    }

    render() {
        const {classes} = this.props;
        return (<Grid container="container" className={classes.root} spacing={16}>
            <Grid item="item" xs={12}>
                <Grid container="container" justify="center" spacing={20}>
                    <TextField onChange={this.handleTextFieldChange('name')} required="required" id="listing-name" label="Name" className={classes.textField} margin="normal"/>
                    <TextField onChange={this.handleTextFieldChange('description')} multiline rowsMax="4" required="required" id="listing-description" label="Description" className={classes.textField} margin="normal"/> {/* <TextField required="required" id="listing-tags" label="Required" defaultValue="Hello World" className={classes.textField} margin="normal"/> */}
                </Grid>
            </Grid>
        </Grid>)
    }
}

MakeListing.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MakeListing);
