import React, { Component } from 'react';
import { Grid, CardMedia, Divider, ListItem } from '@material-ui/core';
import Thumbnail from './adminDashboard/Thumbnail';

export class ListingBig extends Component {
    state = {
        selectedThumbnail: 0,
    };
    render() {
        const { selectedThumbnail } = this.state;
        const { id, category, createdAt, description, name, price } = this.props.product.listing;
        const { pictures } = this.props.product.pictures;
        const { classes } = this.props;
        const current = pictures[selectedThumbnail];
        return (
            <Grid container>
                <Grid item m={4}>
                    <div style={{ marginBottom: '2vh' }} className={classes.pictureContainer}>
                        <CardMedia
                            component="img"
                            alt={current && current.name.replace(/(\.jpg)/, '')}
                            className={classes.mediaLarge}
                            image={current && current.data}
                            title={current && current.name}
                        />
                    </div>
                    <Divider style={{ marginBottom: '2vh' }} />
                    <Grid container>
                        {pictures.map((e, i) => (
                            <Grid item key={e.name}>
                                <ListItem
                                    button
                                    selected={this.state.selectedThumbnail === i}
                                    onClick={() => this.setState({ selectedThumbnail: i })}>
                                    <Thumbnail classes={classes} image={e.data} />
                                </ListItem>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default ListingBig;
