import React, { Component } from 'react';
import { Grid, FormControl, InputLabel, NativeSelect, FormHelperText, Input } from '@material-ui/core';
// import { Add } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import styles from '../styles/makeListingStyles';
import ListingInput from './ListingInput';
import Listing from './Listing';

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
        // If blank
        if (id === '') {
            this.setState({ selectedProduct: null });
            return;
        }
        // Look to see if it exists in state already
        const { grabbedProducts } = this.state;
        for (let x in grabbedProducts) {
            let y = grabbedProducts[x];
            if (parseInt(id) === y.listing.id) {
                this.setState({ selectedProduct: parseInt(x) });
                return;
            }
        }
        // If NOT, then vvvv
        const data = await axios.get(`http://localhost:3001/api/products/${id}`);
        const { pictures, primary, ...rest } = data.data;
        const fullProduct = {
            listing: rest,
            pictures: { primary: primary, pictures: JSON.parse(pictures) },
        };
        this.setState(prevState => {
            return {
                grabbedProducts: [...prevState.grabbedProducts, fullProduct],
                selectedProduct: grabbedProducts.length,
            };
        });
    };

    handleTextChange = name => event => {
        let { selectedProduct, grabbedProducts } = this.state;
        let current = grabbedProducts[selectedProduct];
        let updatedProduct = current.listing;
        updatedProduct[name] = event.target.value;
        this.setState(prevState => {
            let retPro = {
                listing: updatedProduct,
                pictures: current.pictures,
            };

            return {
                grabbedProducts: prevState.grabbedProducts.map(e => {
                    if (e === current) {
                        return retPro;
                    } else {
                        return e;
                    }
                }),
            };
        });
        // this.setState({ currentProduct: updatedProduct });
    };
    sampleListing = { listing: { name: '', description: '', price: '' }, pictures: { pictures: [], primary: null } };
    render() {
        let { classes } = this.props;
        let { names, selectedProduct, grabbedProducts } = this.state;
        let current = grabbedProducts[selectedProduct] || this.sampleListing;
        let primary = current && current.pictures.pictures[current.pictures.primary];
        return (
            <div>
                <Grid container spacing={40}>
                    <Grid item>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-helper">Listing</InputLabel>
                            <NativeSelect
                                value={(current && current.listing.id) || ''}
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
                    <Grid item xs={9}>
                        <ListingInput
                            textValues={current.listing}
                            classes={classes}
                            handleTextChange={event => this.handleTextChange(event)}
                            formSubmit={this.formSubmit}
                        />
                    </Grid>
                </Grid>
                <Grid style={{ paddingTop: '5vh' }} container justify={'center'}>
                    <Grid item>
                        <Listing
                            classes={classes}
                            picture={primary}
                            name={current.listing.name}
                            description={current.listing.description}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(ViewProducts);
