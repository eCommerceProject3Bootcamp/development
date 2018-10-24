import React, {Component} from "react";
import PropTypes from "prop-types";
import {AttachFile as AttachFileIcon, Menu as MenuIcon, Add as AddIcon, Done as DoneIcon} from "@material-ui/icons";
import {
    Divider,
    Typography,
    Grid,
    MenuItem,
    TextField,
    FormGroup,
    Button,
    FormLabel
} from "@material-ui/core";

import classNames from "classnames";
import {withStyles} from "@material-ui/core/styles";
import {styles} from "./makeListingStyles";

class MakeListing extends Component {
    state = {
        thumbnails: [],
        pictures: [],
        description: "",
        name: ""
    };

    handleTextChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    handleImageUpload = event => {};

    formSubmit = event => {
        event.preventDefault();
        console.log(event.target);
    };

    render() {
        const {classes} = this.props;
        return (<Grid container="container" className={classes.root} spacing={16}>
            <Grid item="item" xs={12}>
                <Grid container="container" justify="center" spacing={20}>
                    <form onSubmit={e => this.formSubmit(e)}>
                        <FormGroup>
                            <Grid item="item" xs={4}>
                                <TextField onChange={() => this.handleTextChange("name")} required="required" id="listing-name" label="Name" className={classes.textField} margin="normal"/>
                            </Grid>
                            <Grid item="item" xs="xs">
                                <TextField onChange={() => this.handleTFChange("description")} multiline="multiline" rowsMax="4" required="required" id="listing-description" label="Description" className={classes.textField} margin="normal"/>
                                {/* <TextField required="required" id="listing-tags" label="Required" defaultValue="Hello World" className={classes.textField} margin="normal"/> */}
                            </Grid>
                            <Divider/>
                            <Grid item="item" xs="xs">
                                <input accept="image/*" className={classes.input} style={{
                                        display: "none"
                                    }} id="raised-button-file" multiple="multiple" type="file"/>
                                <label htmlFor="raised-button-file">
                                    <Button>
                                        <AddIcon/>
                                        Add Images
                                    </Button>
                                </label>
                            </Grid>
                            <Button variant="contained" type="submit" className={classes.button}>
                                Submit
                            </Button>
                        </FormGroup>
                    </form>
                </Grid>
            </Grid>
        </Grid>);
    }
}

MakeListing.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MakeListing);
