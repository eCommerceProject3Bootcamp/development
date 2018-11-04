import React, { Component } from 'react';
import { compiler } from 'markdown-to-jsx';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const Listing = props => {
    const { classes, pictures, name, description, selectedThumbnail } = props;
    return (
        <Card className={classes.card}>
            {!pictures.length || (
                <CardMedia
                    className={classes.media}
                    image={pictures[selectedThumbnail].data}
                    title={pictures[0].name}
                />
            )}
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography gutterBottom component="div">
                    {compiler(description.replace(/\n/gm, '\n\n'))}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

export default Listing;
