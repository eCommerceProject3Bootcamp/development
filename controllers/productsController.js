const db = require('../models');
const fs = require('fs');
const path = require('path');

module.exports = {
    upload: function(req, res) {
        const { name, description, pictures } = req.body;
        convertedPics = pictures.map(base64Object => {
            return Buffer.from(
                [
                    base64Object.data
                        .split(',')
                        .slice(1)
                        .join(''),
                ],
                base64Object.type
            );
        });
        // for (let i; i < convertedPics.length; i++) {
        //     if (!i === convertedPics.length - 1) {
        //         fs.appendFileSync(path.join(__   dirname, '../scripts/pictures.json'), `{"type": ${pictures[i].type}, "pictures": [${convertedPics[i]}]},`);
        //     } else {
        //         fs.appendFileSync(path.join(__dirname, '../scripts/pictures.json'), `{"type": ${pictures[i].type}, "pictures": [${convertedPics[i]}]}]`);
        //     }
        // }
        Promise.all(convertedPics).then(blobArray => {
            console.log(blobArray);
        });
        // db.Listing.create({
        //     name: name,
        //     description: description,
        //     pictures: convertedPics,
        // });
        return res.send(true);
    },
};
