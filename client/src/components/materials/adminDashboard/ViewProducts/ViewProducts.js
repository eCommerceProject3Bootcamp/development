import React, { Component } from 'react';
import { Grid, FormControl, InputLabel, NativeSelect, FormHelperText, Input } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
// import Listing from '../AddProducts/Listing';
import styles from '../styles/makeListingStyles';
import ListingInput from '../AddProducts/ListingInput';

class ViewProducts extends Component {
    state = {
        names: [],
        selected: '',
        currentProduct: {},
    };
    componentDidMount() {
        axios.get('http://localhost:3001/api/products/rows/id,name').then(data =>
            this.setState(state => {
                let { names } = state;
                names.push(
                    ...data.data.map(e => {
                        return { string: `${e.id}: ${e.name}`, id: e.id };
                    })
                );
                return state;
            })
        );
    }
    grabById(id) {
        axios
            .get(`http://localhost:3001/api/products/${id}`)
            .then(data => this.setState({ selected: id, currentProduct: data.data }));
    }
    handleTextChange(val) {
        this.setState(state => {
            let { currentProduct } = state;
            console.log(currentProduct);
        });
    }
    render() {
        let { classes } = this.props;
        let { names, currentProduct } = this.state;
        return (
            <React.Fragment>
                <Grid container>
                    <Grid item>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-helper">Listing</InputLabel>
                            <NativeSelect
                                value={this.state.selected}
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
                    {/* Now, to build something to use this.state.currentProduct (a string representing an exact ID of a database object -- where user can change things then post it back) */}
                    {/* {Object.keys(currentProduct).length > 0 && (
                        <ListingInput
                            textValues={currentProduct}
                            classes={classes}
                            handleTextChange={this.handleTextChange}
                            formSubmit={}
                        />
                    )} */}
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(ViewProducts);
