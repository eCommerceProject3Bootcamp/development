import React, { Component } from "react";
import PropTypes from "prop-types";
import { AttachFile as AttachFileIcon, Menu as MenuIcon, Add as AddIcon, Done as DoneIcon } from "@material-ui/icons";
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
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./makeListingStyles";

class MakeListing extends Component {
	state = {
		thumbnails: [],
		pictures: [],
		description: "",
		name: ""
	};

	handleTextChange = name => event => {
		this.setState( { [ name ]: event.target.value } );
	};

	handleImageUpload = ( selectorFiles : FileList ) => {
		console.log( selectorFiles )
		// event.preventDefault();

	};

	formSubmit = event => {
		event.preventDefault();
		console.log( event.target );
	};

	render() {
		const { classes } = this.props;
		return ( <Grid container="container" className={classes.root} spacing={16}>
			<Grid item="item" xs={12}>
				<Grid container="container" justify="center" spacing={20}>
					<form onSubmit={e => this.formSubmit( e )}>
						<Grid item="item" xs={4}>
							<TextField onChange={() => this.handleTextChange( "name" )} required="required" id="listing-name" label="Name" className={classes.textField} margin="normal"/>
						</Grid>
						<Grid item="item" xs="xs">
							<TextField
								onChange={() => this.handleTextChange( "description" )}
								multiline="multiline"
								rowsMax="4"
								required="required"
								id="listing-description"
								label="Description"
								className={classes.textField}
								margin="normal"/>
						</Grid>
						<Divider/>
						<Grid item="item" xs="xs">
							<Button containerelement='label' label='Test' className={classes.button}>
								<input ref="fileUpload" accept="image/*" className={classes.input} style={{
										display: 'none'
									}} id="raised-button-file" multiple="multiple" type="file"/>
								<AddIcon/>
								Add Images
							</Button>
						</Grid>
						<Button variant="contained" type="submit" className={classes.button}>
							Submit
						</Button>
					</form>
				</Grid>
			</Grid>
		</Grid> );
	}
}

MakeListing.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles( styles )( MakeListing );
