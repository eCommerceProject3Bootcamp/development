import React, { Component } from 'react';
import { Grid, FormControl, InputLabel, NativeSelect, FormHelperText, Input } from '@material-ui/core';
// import { Add } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
// import Listing from '../AddProducts/Listing';
import styles from '../styles/makeListingStyles';
import ListingInput from '../AddProducts/ListingInput';
import Listing from '../AddProducts/Listing';

class ViewProducts extends Component {
    state = {
        names: [],
        selected: '',
        currentProduct: {},
        currentProductPictures: [],
    };
    componentDidMount() {
        axios.get('http://localhost:3001/api/products/rows/id,name').then(data => {
            let nData = data.data.map(e => {
                return { string: `${e.id}: ${e.name}`, id: e.id };
            });
            nData = nData.filter(e => !this.state.names.includes(e));
            if (!nData.length) {
                return;
            }
            this.setState({ names: [...this.state.names, ...nData] });
        });
    }

    formSubmit = async event => {
        event.preventDefault();
        try {
            // In production, I'm not sure what this "localhost" bit has to be changed to, if anything
            let { PictureId, id, name, description, category } = this.state.currentProduct;
            let bodyData = {
                name: name,
                description: description,
                category: category,
            };
            const response = await axios.put(`http://localhost:3001/api/products/update/${id}`, bodyData);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    grabById = async id => {
        let data = await axios.get(`http://localhost:3001/api/products/${id}`);
        this.setState({ selected: id, currentProduct: data.data });
        let pictures = await axios.get(`http://localhost:3001/api/products/findPics/${data.data.PictureId}`);
        this.setState({ currentProductPictures: { primary: pictures.data.primary, pictures: pictures.data.pictures } });
    };

    handleTextChange = name => event => {
        let updatedProduct = this.state.currentProduct;
        updatedProduct[name] = event.target.value;
        this.setState({ currentProduct: updatedProduct });
    };

    render() {
        let { classes } = this.props;
        let { names, currentProduct, currentProductPictures } = this.state;
        return (
            <Grid container spacing={40}>
                <Grid item>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-helper">Listing</InputLabel>
                        <NativeSelect
                            value={this.state.selected}
                            onChange={event => this.grabById(event.target.value)}
                            input={<Input name="product" id="product-native-helper" />}>
                            <option value="" />
                            {!names.length ||
                                names.map(name => (
                                    <option key={name.id} value={name.id}>
                                        {name.string}
                                    </option>
                                ))}
                        </NativeSelect>
                        {/* <FormHelperText>Select Listing</FormHelperText> */}
                    </FormControl>
                </Grid>
                {/* Now, to build something to use this.state.currentProduct (a string representing an exact ID of a database object -- where user can change things then post it back) */}
                {/* Yikes. Don't like this solution at all, but here we are. */}
                <Grid item>
                    {Object.keys(currentProduct).length > 0 && (
                        <ListingInput
                            textValues={currentProduct}
                            classes={classes}
                            handleTextChange={event => this.handleTextChange(event)}
                            formSubmit={this.formSubmit} // placeholder...
                        />
                    )}
                </Grid>
                <Grid item>
                    {Object.keys(currentProduct).length > 0 && (
                        <Listing
                            classes={classes}
                            picture={currentProductPictures.primary}
                            name={currentProduct.name}
                            description={currentProduct.description}
                        />
                    )}
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(ViewProducts);
