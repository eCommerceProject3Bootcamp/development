import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  AttachFile as AttachFileIcon,
  Menu as MenuIcon,
  Add as AddIcon,
  Done as DoneIcon
} from "@material-ui/icons";
import {
  IconButton,
  Divider,
  Typography,
  Grid,
  MenuItem,
  TextField,
  FormGroup,
  Button
} from "@material-ui/core";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./makeListingStyles";

class MakeListing extends Component {
  state = {
    thumbnails: [],
    pictures: [],
    description: "",
    name: ""
  };

  handleTFChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  formSubmit = event => {
    event.preventDefault();
    console.log(event);
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item="item" xs={12}>
          <Grid container justify="center" spacing={20}>
            <form onSubmit={this.formSubmit()}>
              <FormGroup>
                <Grid item xs={4}>
                  <TextField
                    onChange={this.handleTFChange("name")}
                    required
                    id="listing-name"
                    label="Name"
                    className={classes.textField}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    onChange={this.handleTFChange("description")}
                    multiline
                    rowsMax="4"
                    required
                    id="listing-description"
                    label="Description"
                    className={classes.textField}
                    margin="normal"
                  />{" "}
                  {/* <TextField required="required" id="listing-tags" label="Required" defaultValue="Hello World" className={classes.textField} margin="normal"/> */}
                </Grid>
                <Button
                  variant="contained"
                  type="submit"
                  className={classes.button}
                >
                  Submit
                </Button>
              </FormGroup>
            </form>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

MakeListing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MakeListing);
