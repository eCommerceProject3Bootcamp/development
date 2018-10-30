const db = require('../models');
const b = require('based-blob');
const fs = require('fs');
const path = require('path');
// global.atob = require('atob');

module.exports = {
    upload: function(req, res) {
        const { name, description, pictures } = req.body;
        convertedPics = pictures.map(eachBlob => {
            return b.toBlob(eachBlob.data, eachBlob.type);
        });
        for (let i; i < convertedPics.length; i++) {
            if (!i === convertedPics.length - 1) {
                fs.appendFileSync(path.join(__dirname, '../scripts/pictures.json'), `{"type": ${pictures[i].type}, "pictures": [${convertedPics[i]}]},`);
            } else {
                fs.appendFileSync(path.join(__dirname, '../scripts/pictures.json'), `{"type": ${pictures[i].type}, "pictures": [${convertedPics[i]}]}]`);
            }
        }
        db.Listing.create({
            name: name,
            description: description,
            pictures: convertedPics,
        });
        return res.send(true);
    },
};
