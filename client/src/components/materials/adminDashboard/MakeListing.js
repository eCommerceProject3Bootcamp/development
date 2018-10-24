import React, { Component } from "react";
import PropTypes from "prop-types";
import { AttachFile as AttachFileIcon } from "@material-ui/icons";
import { Divider, Grid, TextField, Button } from "@material-ui/core";
// import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./makeListingStyles";
import axios from 'axios';

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

	handleFileUpload = ( selectorFiles : FileList ) => {
		console.log( selectorFiles )
		axios.post( "/api/imageUpload", selectorFiles );
	};

	formSubmit = event => {
		event.preventDefault();
		// console.log( event.target.files );
	};

	_chooseFileClick() {
		setTimeout( () => {
			this._inputLabel.click();
		}, 200 )
	}

	render() {
		const { classes } = this.props;
		return ( <Grid container={true} className={classes.root} spacing={16}>
			<Grid item={true} xs={12}>
				<Grid container={true} justify="center" spacing={20}>
					<form onSubmit={e => this.formSubmit( e )}>
						<Grid item={true} xs={4}>
							<TextField onChange={() => this.handleTextChange( "name" )} required="required" id="listing-name" label="Name" className={classes.textField} margin="normal"/>
						</Grid>
						<Grid item={true} xs={12}>
							<TextField
								onChange={() => this.handleTextChange( "description" )}
								multiline={true}
								rowsMax="4"
								required={true}
								id="listing-description"
								label="Description"
								className={classes.textField}
								margin="normal"/> {/* <TextField required="required" id="listing-tags" label="Required" defaultValue="Hello World" className={classes.textField} margin="normal"/> */}
						</Grid>
						<Divider/>
						<Grid item={true} xs={12}>
							<input
								className={classes.input}
								style={{
									display: "none"
								}}
								id="file-upload"
								multiple={true}
								type="file"
								accept="image/*"
								onChange={( e ) => this.handleFileUpload( e.target.files )}/>
							<label htmlFor="file-upload" ref={x => this._inputLabel = x}>
								<Button onClick={() => this._chooseFileClick()}>
									<AttachFileIcon/>
									Add Images
								</Button>
							</label>
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
