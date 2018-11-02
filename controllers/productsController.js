const db = require('../models');

module.exports = {
    upload: function(req, res) {
        const { name, description, pictures } = req.body;
        try {
            let data = {
                Picture: {
                    pictures: pictures,
                },
                pictureId: '',
                name: name,
                description: description,
            };
            db.Listing.create(data, { include: [db.Picture], validate: false }).then(data => res.send(data));
        } catch (err) {
            console.log(err);
            return res.send(false);
        }
    },
    findAll: function(req, res) {
        try {
            db.Listing.findAll({}).then(data => res.send(data));
        } catch (err) {
            console.log(err);
            return res.send(err);
        }
    },
    pictures: function(req, res) {
        try {
            db.Picture.findAll({}).then(data => res.send(data));
        } catch (err) {
            console.log(err);
            return res.send(err);
        }
    },
};
