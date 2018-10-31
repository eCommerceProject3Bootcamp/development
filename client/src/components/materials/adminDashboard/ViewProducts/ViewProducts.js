import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import axios from 'axios';

class ViewProducts extends Component {
    state = {
        products: [],
    };
    componentDidMount() {
        axios.get('http://localhost:3001/api/products/').then(data => this.setState({ products: data }));
    }
    render() {
        return <div>Hello World</div>;
    }
}

export default ViewProducts;
