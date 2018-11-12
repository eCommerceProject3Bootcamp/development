import React from 'react';
import { Paper, CardMedia } from '@material-ui/core';

const Thumbnail = ({ image, size }) => (
    <Paper style={{ height: size || 100, width: size || 100 }}>
        <CardMedia style={{ height: size || 100, width: size || 100 }} image={image || ''} />
    </Paper>
);

export default Thumbnail;
