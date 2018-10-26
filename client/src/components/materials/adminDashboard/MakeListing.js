import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
// import classNames from "classnames";
import { withStyles } from '@material-ui/core/styles';
import { styles } from './makeListingStyles';
import axios from 'axios';
import ListingInput from './ListingInput';
import Listing from './Listing';
class MakeListing extends Component {
    state = {
        primaryImagePreview: '',
        thumbnails: [],
        pictures: [],
        description: '',
        name: '',
    };

    handleTextChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleMakeImagePreview = event => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            if (this.state.primaryImagePreview === '') {
                this.setState({ primaryImagePreview: reader.result });
            }
            this.setState(prevState => {
                let { pictures } = prevState;
                !pictures.includes(file) && pictures.push(file);
                return prevState;
            });
        };

        reader.readAsDataURL(file);
    };

    formSubmit = async event => {
        event.preventDefault();

        // This generates thumbnails, and brings them back... though we don't really need this. Legacy code from when I didn't know what I was doing, though it's helpful to read then rewrite
        let formData = new FormData();
        for (let x of this.state.pictures) {
            formData.append('pics', x);
        }
        try {
            const response = await axios.post('http://localhost:3001/api/images/upload', formData);
            console.log(response);
            this.setState(state => {
                let { thumbnails } = state;
                let newThumbnails = response.data.map(eachPic => {
                    return eachPic.bitmap.data;
                });
                thumbnails.push(...newThumbnails);
                return { thumbnails: thumbnails };
            });
        } catch (err) {
            console.log(err);
        }
    };

    _chooseFileClick() {
        setTimeout(() => {
            this._inputLabel.click();
        }, 250);
    }

    render() {
        const { classes } = this.props;
        const { description, name, thumbnails, pictures, primaryImagePreview } = this.state;
        return (
            <Grid container justify="space-evenly" spacing={24} className={classes.topMargin}>
                <Grid item xs={4}>
                    <Typography variant="h2" gutterBottom>
                        Add Listing
                    </Typography>
                    <ListingInput handleTextChange={this.handleTextChange} formSubmit={this.formSubmit} classes={classes} handleMakeImagePreview={this.handleMakeImagePreview} />
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h2" gutterBottom>
                        Preview
                    </Typography>
                    <Listing name={name} description={description} pictures={pictures} thumbnails={thumbnails} classes={classes} primaryImagePreview={primaryImagePreview} />
                </Grid>
            </Grid>
        );
    }
}

MakeListing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MakeListing);
