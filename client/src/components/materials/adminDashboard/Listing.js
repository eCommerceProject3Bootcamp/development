import React, { Component } from 'react';
import { compiler } from 'markdown-to-jsx';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import Thumbnail from './Thumbnail';
class Listing extends Component {
    render(props) {
        const { classes, pictures, name, description, selectedThumbnail } = this.props;
        return (
            <Card className={classes.card}>
                <CardActionArea>{pictures.length > 0 && <CardMedia className={classes.media} image={pictures[selectedThumbnail].data} title={pictures[0] ? pictures[0].name : ''} />}</CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography gutterBottom component="div">
                        {compiler(description)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default Listing;
