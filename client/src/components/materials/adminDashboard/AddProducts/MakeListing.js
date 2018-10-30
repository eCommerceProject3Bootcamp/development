import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, List, ListItem } from '@material-ui/core';
// import classNames from "classnames";
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/makeListingStyles';
import axios from 'axios';
import ListingInput from './ListingInput';
import Listing from './Listing';
import Thumbnail from '../Thumbnail';

class MakeListing extends Component {
    state = {
        pictures: [],
        description: '',
        name: '',
        selectedThumbnail: 0,
        successfulUpload: null,
    };

    resetState = () => {
        const defaultState = {
            pictures: [],
            description: '',
            name: '',
            selectedThumbnail: 0,
            successfulUpload: true,
        };
        this.setState(defaultState);
    };

    handleTextChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleListItemClick = (event, index) => {
        this.setState({ selectedThumbnail: index });
    };

    _chooseFileClick() {
        setTimeout(() => {
            this._inputLabel.click();
        }, 250);
    }

    _readUploadedFile = inputFile => {
        const temporaryFileReader = new FileReader();

        return new Promise((resolve, reject) => {
            temporaryFileReader.onerror = () => {
                temporaryFileReader.abort();
                reject(new DOMException('Problem parsing input file.'));
            };

            temporaryFileReader.onloadend = () => {
                resolve(temporaryFileReader.result);
            };
            temporaryFileReader.readAsDataURL(inputFile);
        });
    };

    handleImageUpload = event => {
        event.preventDefault();
        let unprocessedFiles = Array.from(event.target.files);
        let processedFiles = [];
        unprocessedFiles = unprocessedFiles.filter(file => !this.state.pictures.includes(file));
        for (let file of unprocessedFiles) {
            processedFiles.push(this._readUploadedFile(file));
        }
        Promise.all(processedFiles).then(data => {
            data.forEach((result, index) => {
                this.setState(state => {
                    let { pictures } = state;
                    !pictures.includes(result) &&
                        pictures.push({
                            name: unprocessedFiles[index].name,
                            type: unprocessedFiles[index],
                            data: result,
                        });
                    return state;
                });
            });
        });
    };

    formSubmit = async event => {
        event.preventDefault();
        try {
            // In production, I'm not sure what this has to be changed to, if anything
            const response = await axios.post('http://localhost:3001/api/products/upload', this.state);
            console.log(response);
            response.data && this.resetState();
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        const { classes } = this.props;
        const { description, name, pictures, selectedThumbnail } = this.state;
        return (
            <Grid container>
                <Grid container justify="space-between" spacing={24} className={classes.topMargin}>
                    <Grid item xs={4}>
                        <Typography variant="h3" gutterBottom>
                            Add Listing
                        </Typography>
                        <ListingInput
                            handleTextChange={this.handleTextChange}
                            formSubmit={this.formSubmit}
                            classes={classes}
                            handleImageUpload={this.handleImageUpload}
                            textValues={{ name: this.state.name, description: this.state.description }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h3" gutterBottom>
                            Preview
                        </Typography>
                        <Listing
                            name={name}
                            selectedThumbnail={selectedThumbnail}
                            description={description}
                            pictures={pictures}
                            classes={classes}
                        />
                    </Grid>
                </Grid>
                {pictures.length > 0 &&
                    pictures.map((image, index) => (
                        <Grid item key={`RNG_${Math.floor(Math.random() * 10000)}`}>
                            <ListItem
                                button
                                selected={index === this.state.selectedThumbnail}
                                onClick={event => this.handleListItemClick(event, index)}>
                                <Thumbnail classes={classes} image={image.data} />
                            </ListItem>
                        </Grid>
                    ))}
            </Grid>
        );
    }
}

MakeListing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MakeListing);
