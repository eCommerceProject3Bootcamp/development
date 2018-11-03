const db = require('../models');

module.exports = {
    upload: function(req, res) {
        const { name, description, pictures } = req.body;
        try {
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
    findAll: function(req, res) {
        try {
            db.Listing.findAll({
                where: {},
            }).then(data => res.json(data));
        } catch (err) {
            console.log(err);
            return res.json(err);
        }
    },
};
