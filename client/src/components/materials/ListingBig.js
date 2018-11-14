import React, { Component } from 'react';
import {
    Grid,
    GridList,
    CardMedia,
    Divider,
    Typography,
    GridListTile,
    TextField,
    Card,
    CardContent,
    CardActions,
    Button,
} from '@material-ui/core';
// import classNames from 'classnames';
import Thumbnail from './adminDashboard/Thumbnail';
import { compiler } from 'markdown-to-jsx';
// import classes from './adminDashboard/styles/makeListingStyles';

export class ListingBig extends Component {
    state = {
        selectedThumbnail: 0,
        quantitySelected: 0,
    };

    addToCart = (listing, quantitySelected) => {
        // pass the whole (listing, quantitySelected) in here from button will handle API stuff later
    };

    buyItNow = (listing, quantitySelected) => {
        // pass the whole (listing, quantitySelected) in here from button will handle API stuff later
    };

    render() {
        const { selectedThumbnail, quantitySelected } = this.state;
        const { product, classes } = this.props;
        const { id, category, createdAt, description, name, price, qty, pictures } = product;
        const currentPic = pictures[selectedThumbnail];
        return (
            <Card raised>
                <Grid container spacing={20} style={{ padding: '3vh' }}>
                    {/* PICTURE SECTION START */}
                    <Grid item s={4}>
                        <div style={{ marginBottom: '2vh' }} className={classes.pictureContainer}>
                            <CardMedia
                                component="img"
                                alt={currentPic && currentPic.name}
                                className={classes.mediaLarge}
                                image={currentPic && currentPic.data}
                                title={currentPic && currentPic.name}
                            />
                        </div>
                        {/* <Divider /> */}
                        <GridList cols={pictures.length}>
                            {pictures.map((e, i) => (
                                <GridListTile
                                    className={classes.gridListTile}
                                    onClick={() => this.setState({ selectedThumbnail: i })}>
                                    <Thumbnail image={e.data} size={50} />
                                </GridListTile>
                            ))}
                        </GridList>
                    </Grid>
                    {/* PICTURE SECTION END */}

                    {/* TEXT BODY SECTION START */}
                    <Grid item s={8}>
                        <Typography component={'div'} variant={'body2'}>
                            <Typography variant={'h5'}>{name}</Typography>
                            <p>Additional subnotes about product can go here, possibly something like on sale or etc</p>
                            <Divider className={classes.divider} />
                            <Grid container spacing={40}>
                                <Grid item>
                                    <TextField
                                        id="filled-number"
                                        label="Quantity"
                                        value={quantitySelected}
                                        onChange={event =>
                                            event.target.value > -1 &&
                                            this.setState({ quantitySelected: event.target.value })
                                        }
                                        type="number"
                                        // className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                        margin="dense"
                                        error={quantitySelected > qty}
                                    />
                                </Grid>
                                <Grid item>{qty > 0 ? `In stock: ${qty}` : `Out of Stock`}</Grid>
                                <Grid item xs={12}>
                                    <Card style={{ background: '#eeeeee' }}>
                                        <CardContent>
                                            {/* Something here about a sale, possibly. Otherwise */}
                                            <Typography variant={'body2'}>Price: {price}</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button
                                                onClick={this.buyItNow(this.props.product, quantitySelected)}
                                                size="small">
                                                Buy It Now
                                            </Button>
                                            <Button
                                                onClick={this.addToCart(this.props.product, quantitySelected)}
                                                size="small">
                                                Add to cart
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component={'div'}>
                                        {compiler(description.replace(/\n/gm, '\n\n'))}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Typography>
                    </Grid>
                    {/* TEXT BO DY SECTION END */}
                </Grid>
            </Card>
        );
    }
}

export default ListingBig;
