import React from 'react';
import { Card, CardActionArea, CardMedia } from '@material-ui/core';

const ListingSmall = props => {
    const { classes, picture, onClick } = props;
    return (
        <Card className={classes.card}>
            {picture && (
                <CardActionArea onClick={onClick || null}>
                    <CardMedia className={classes.media} image={picture.data} title={picture.name} />
                </CardActionArea>
            )}
        </Card>
    );
};

export default ListingSmall;
