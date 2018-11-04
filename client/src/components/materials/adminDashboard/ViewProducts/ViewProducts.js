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
            <React.Fragment>
                <Grid container>
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
                    {Object.keys(currentProduct).length > 0 && (
                        <React.Fragment>
                            <ListingInput
                                textValues={currentProduct}
                                classes={classes}
                                handleTextChange={event => this.handleTextChange(event)}
                                formSubmit={event => event.preventDefault()} // placeholder...
                            />
                            <Listing
                                classes={classes}
                                picture={currentProductPictures.primary}
                                name={currentProduct.name}
                                description={currentProduct.description}
                            />
                        </React.Fragment>
                    )}
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(ViewProducts);
