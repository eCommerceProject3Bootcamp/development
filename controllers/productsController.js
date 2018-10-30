const db = require('../models');
const b64ToBlob = require('b64-to-blob');

module.exports = {
    upload: function(req, res) {
        const { name, description, pictures } = req.body;
        convertedPics = pictures.map(eachBlob => {
            return b64ToBlob(eachBlob.data, eachBlob.type);
        });
        db.Listing.create({
            name: name,
            description: description,
            pictures: convertedPics,
        });
        return res.send(true);
    },
};
