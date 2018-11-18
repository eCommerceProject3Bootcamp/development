import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, ListItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../../styles/mainStyles';
import axios from 'axios';
import ListingInput from './ListingInput';
import ListingBig from '../../ListingBig';
import Thumbnail from '../Thumbnail';

class MakeListing extends Component {
    state = {
        pictures: [],
        description: '',
        name: '',
        price: null,
        selectedThumbnail: 0,
        successfulUpload: null,
    };

    resetState = () => {
        const defaultState = {
            pictures: [],
            description: '',
            name: '',
            price: null,
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

    handleImageUpload = async event => {
        event.preventDefault();
        let unprocessedFiles = Array.from(event.target.files);
        let processedFiles = [];
        unprocessedFiles = unprocessedFiles.filter(file => {
            let ret = true;
            for (let x of this.state.pictures) {
                // Pretty sure going by name is NOT best practice. Hmm..
                if (x.name === file.name) {
                    ret = false;
                }
            }
            return ret;
        });
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
            // In production, I'm not sure what this "localhost" bit has to be changed to, if anything
            let { pictures, description, name, selectedThumbnail, price } = this.state;
            let bodyData = {
                primary: selectedThumbnail,
                pictures: pictures,
                description: description,
                price: price,
                name: name,
            };
            const response = await axios.post('http://localhost:3001/api/products/upload', bodyData);
            // console.log(response);
            response.status === 200 && this.resetState();
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        const { classes } = this.props;
        const { description, name, price, pictures, selectedThumbnail } = this.state;
        let textValues = { name: name, price: price, description: description };
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
                            handleImage={this.handleImageUpload}
                            textValues={textValues}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h3" gutterBottom>
                            Preview
                        </Typography>
                        <ListingBig product={this.state} classes={classes} />
                    </Grid>
                </Grid>
                {!pictures.length ||
                    pictures.map((image, index) => (
                        <Grid item key={`RNG_${Math.floor(Math.random() * 10000)}`}>
                            <ListItem
                                button
                                selected={index === this.state.selectedThumbnail}
                                onClick={event => this.handleListItemClick(event, index)}>
                                <Thumbnail image={image.data} />
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
