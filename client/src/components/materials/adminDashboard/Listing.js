import React, { Component } from 'react';
import { compiler } from 'markdown-to-jsx';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
class Listing extends Component {
    render(props) {
        const { classes, pictures, thumbnails, name, description, primaryImagePreview } = this.props;
        return (
            <Card className={classes.card}>
                <CardActionArea>{primaryImagePreview && <CardMedia className={classes.media} image={primaryImagePreview} title={pictures[0] ? pictures[0].name : ''} />}</CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography component="div">{compiler(description)}</Typography>
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
