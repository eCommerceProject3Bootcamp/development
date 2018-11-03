import React, { Component } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { AttachFile as AttachFileIcon } from '@material-ui/icons';

class ListingInput extends Component {
    _chooseFileClick() {
        setTimeout(() => {
            this._inputLabel.click();
        }, 250);
    }
    render(props) {
        const { handleTextChange, formSubmit, classes, handleImageUpload, textValues } = this.props;
        return (
            <form onSubmit={e => formSubmit(e)}>
                <Grid item xs={12}>
                    <TextField onChange={handleTextChange('name')} value={textValues.name} required id="listing-name" label="Name" className={classes.textField} margin="normal" />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        onChange={handleTextChange('description')}
                        value={textValues.description}
                        multiline
                        required
                        id="listing-description"
                        label="Description"
                        className={classes.textField}
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={12}>
                    <input
                        className={classes.input}
                        style={{
                            display: 'none',
                        }}
                        id="file-upload"
                        multiple
                        type="file"
                        accept="image/*"
                        onChange={e => handleImageUpload(e)}
                    />
                    <label htmlFor="file-upload" ref={x => (this._inputLabel = x)}>
                        <Button onClick={() => this._chooseFileClick()}>
                            <AttachFileIcon />
                            Add Images
                        </Button>
                    </label>
                </Grid>
                <Button variant="contained" type="submit" className={classes.button}>
                    Submit
                </Button>
            </form>
        );
    }
}

export default ListingInput;
