import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import {
    AttachFile as AttachFileIcon,
    Menu as MenuIcon,
    Add as AddIcon,
    Done as DoneIcon
} from '@material-ui/icons';
import {
    IconButton,
    Divider,
    Typography,
    CssBaseline,
    Grid,
    FormLabel,
    FormControlLabel
} from '@material-ui/core';

import classNames from 'classnames';
import {
    withStyles
} from '@material-ui/core/styles';
import {
    styles
} from './makeListingStyles';

class MakeListing extends Component {
    state = {
        'thumbnails': [],
        'pictures': [],

    }

    render() {
        const {
            classes
        } = this.props;
        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                    <Grid container spacing={20}>
                        
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

MakeListing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles( styles )( MakeListing );
