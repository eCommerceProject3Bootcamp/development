import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Listing from '../AddProducts/Listing';
import styles from '../styles/makeListingStyles';

class ViewProducts extends Component {
    state = {
        products: [],
        pictures: [],
    };
    componentDidMount() {
        axios.get('http://localhost:3001/api/products/').then(data => this.setState({ products: data.data }));
    }
    render() {
        let { classes } = this.props;
        let { products, pictures = [] } = this.state;
        return (
            <React.Fragment>
                <Grid container justify="space-evenly">
                    {products.length &&
                        products.map(dbData => {
                            return (
                                <Grid item key={`${Math.floor(Math.random() * 1000)}`} style={{ padding: '17px' }}>
                                    <Listing
                                        pictures={pictures.map(e => {
                                            return { name: e.name, data: e.pictures };
                                        })}
                                        classes={classes}
                                        name={dbData.name}
                                        description={dbData.description}
                                    />
                                </Grid>
                            );
                        })}
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(ViewProducts);
