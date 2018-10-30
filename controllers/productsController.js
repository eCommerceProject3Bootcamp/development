const db = require('../models');
const fs = require('fs');
const path = require('path');

module.exports = {
    upload: function(req, res) {
        const { name, description, pictures } = req.body;
        try {
            // fs.appendFileSync(path.join(__dirname, '../scripts/pictures.json'), JSON.stringify(pictures));
            for (let i = 0; i < pictures.length; i++) {
                if (i < pictures.length - 1) {
                    fs.appendFileSync(
                        path.join(__dirname, '../scripts/pictures.json'),
                        `${JSON.stringify(pictures[i])},`
                    );
                } else {
                    fs.appendFileSync(
                        path.join(__dirname, '../scripts/pictures.json'),
                        `${JSON.stringify(pictures[i])}]`
                    );
                }
            }
            db.Listing.create({
                name: name,
                description: description,
                pictures: pictures,
            });
            // return res.send(true);
        } catch (err) {
            console.log(err);
            return res.send(false);
        }
    },
};
