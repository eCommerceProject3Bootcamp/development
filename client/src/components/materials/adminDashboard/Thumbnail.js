import React from 'react';
import { Paper, CardMedia } from '@material-ui/core';

const Thumbnail = ({ image, classes }) => (
    <Paper className={classes.thumbnail}>
        <CardMedia style={{ height: 100 }} image={image} />
    </Paper>
);

export default Thumbnail;
