import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
//hi

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

class OutlinedTextFields extends React.Component {
  state = {
    name: "",
    age: "",
    multiline: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="First Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange("name")}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-uncontrolled"
          label="Last Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Address"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="City"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="State"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Zip"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Shipping Instructions"
          multiline
          rowsMax="4"
          value={this.state.multiline}
          onChange={this.handleChange("multiline")}
          className={classes.textField}
          margin="normal"
          helperText="hello"
          variant="outlined"
        />
        <TextField
          id="outlined-number"
          label="Phone Number"
          value={this.state.age}
          onChange={this.handleChange("age")}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          variant="outlined"
        />
      </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedTextFields);
