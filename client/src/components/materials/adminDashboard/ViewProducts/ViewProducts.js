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
        grabbedProducts: [],
        selectedProduct: null,
    };
    componentDidMount() {
        let { names } = this.state;
        axios.get('http://localhost:3001/api/products/rows/id,name').then(data => {
            this.setState(prevState => {
                return {
                    names: data.data.map(e => {
                        return { string: `${e.id}: ${e.name}`, id: e.id };
                    }),
                };
            });
        });
    }

    formSubmit = async event => {
        // Here, need to pass entire "grabbedProducts" array, then on the backend, update en masse.
        // TODO: support updating pictures, as well. This will take some sequelize magic // research, and we all know how fun that is.
        event.preventDefault();
        try {
            // In production, I'm not sure what this "localhost" bit has to be changed to, if anything
            let promiseArr = this.state.grabbedProducts.map(e =>
                axios.put(`http://localhost:3001/api/products/update/${e.listing.id}`, e)
            );
            let response = await Promise.all(promiseArr);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    grabById = async id => {
        // Look to see if it exists in state already
        const { grabbedProducts } = this.state;
        for (let x of grabbedProducts) {
            if (parseInt(id) === x.listing.id) {
                this.setState({ selectedProduct: x });
                return;
            }
        }
        // If NOT, then vvvv
        let data = await axios.get(`http://localhost:3001/api/products/${id}`);
        let pictures = await axios.get(`http://localhost:3001/api/products/findPics/${data.data.PictureId}`);
        let fullProduct = {
            listing: data.data,
            pictures: { primary: pictures.data.primary, rest: pictures.data.pictures },
        };
        this.setState(prevState => {
            return {
                selectedProduct: fullProduct,
                grabbedProducts: [...prevState.grabbedProducts, fullProduct],
            };
        });
    };

    handleTextChange = name => event => {
        let updatedProduct = this.state.selectedProduct.listing;
        updatedProduct[name] = event.target.value;
        this.setState(prevState => {
            let retPro = {
                listing: updatedProduct,
                pictures: prevState.selectedProduct.pictures,
            };

            return {
                selectedProduct: retPro,
                grabbedProducts: prevState.grabbedProducts.map(e => {
                    if (e === prevState.selectedProduct) {
                        return retPro;
                    } else {
                        return e;
                    }
                }),
            };
        });
        // this.setState({ currentProduct: updatedProduct });
    };

    render() {
        let { classes } = this.props;
        let { names, selectedProduct } = this.state;
        return (
            <Grid container spacing={40}>
                <Grid item>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-helper">Listing</InputLabel>
                        <NativeSelect
                            value={(selectedProduct && selectedProduct.listing.id) || ''}
                            onChange={event => this.grabById(event.target.value)}
                            input={<Input name="product" id="product-native-helper" />}
                        >
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
                <Grid item>
                    {selectedProduct && (
                        <ListingInput
                            textValues={selectedProduct.listing}
                            classes={classes}
                            handleTextChange={event => this.handleTextChange(event)}
                            formSubmit={this.formSubmit}
                        />
                    )}
                </Grid>
                <Grid item>
                    {selectedProduct && (
                        <Listing
                            classes={classes}
                            picture={selectedProduct.pictures.primary}
                            name={selectedProduct.listing.name}
                            description={selectedProduct.listing.description}
                        />
                    )}
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(ViewProducts);
