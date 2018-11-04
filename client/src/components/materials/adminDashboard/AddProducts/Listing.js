import React from 'react';
import { compiler } from 'markdown-to-jsx';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const Listing = props => {
    const { classes, picture, name, description } = props;
    return (
        <Card className={classes.card}>
            {!picture && <CardMedia className={classes.media} image={picture.data} title={picture.name} />}
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
