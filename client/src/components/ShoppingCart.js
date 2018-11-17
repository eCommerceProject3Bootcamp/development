import React, { Component } from 'react';
import {
    Grid,
    Modal,
    Avatar,
    List,
    ListItem,
    Card,
    ListItemSecondaryAction,
    ListItemText,
    IconButton,
    Button,
} from '@material-ui/core';
import { Comment as CommentIcon, ExpandLess, ExpandMore } from '@material-ui/icons/';
import axios from 'axios';

class ShoppingCart extends Component {
    render() {
        const { cartOpen, cartClose, cart, products } = this.props;
        let nCart = [];
        for (let x in cart) {
            nCart.push({ qtyOrdered: cart[x], dbData: products.filter(item => item.id === parseInt(x))[0] });
        }
        return (
            <Modal
                style={{
                    overflowY: 'scroll',
                    width: '90%',
                    height: '90%',
                }}
                aria-labelledby={'shopping cart modal'}
                open={cartOpen}
                onClose={cartClose}>
                <Grid container>
                    <Grid item sm={9}>
                        {/* List of items goes here */}
                        <Card>
                            <List>
                                <ListItem role={undefined} dense button onClick={() => console.log('Test')}>
                                    <ListItemText primary={'Test'} />
                                    <ListItemSecondaryAction>
                                        <IconButton aria-label="Open" />
                                    </ListItemSecondaryAction>
                                </ListItem>
                            </List>
                        </Card>
                    </Grid>
                    <Grid item sm={3}>
                        {/* Checkout button goes here */}
                    </Grid>
                </Grid>
            </Modal>
        );
    }
}

export default ShoppingCart;
