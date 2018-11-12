import React from 'react';
import { compiler } from 'markdown-to-jsx';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const ListingSmall = props => {
    const { classes, picture, name, description, onClick } = props;
    return (
        <Card className={classes.card}>
            {picture && (
                <CardActionArea onClick={onClick || null}>
                    <CardMedia className={classes.media} image={picture.data} title={picture.name} />
                </CardActionArea>
            )}
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography gutterBottom component="div">
                    {compiler(description.replace(/\n/gm, '\n\n'))}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ListingSmall;
