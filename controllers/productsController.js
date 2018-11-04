const db = require('../models');

module.exports = {
    findOne: async function(req, res) {
        try {
            let list = await db.Listing.findById(req.params.id);
            res.send(list);
        } catch (err) {
            console.log(err);
        }
    },
    findPics: async function(req, res) {
        try {
            let pics = await db.Picture.findById(req.params.id);
            res.send(pics);
        } catch (err) {
            console.log(err);
        }
    },
    rows: function(req, res) {
        try {
            db.Listing.findAll({
                attributes: req.params.name.split(','),
            }).then(data => res.send(data));
        } catch (err) {
            res.send(err);
        }
    },
    update: function(req, res) {
        // req.params.id is target here
        // req.body will contain data for updating
        try {
        } catch (err) {
            console.log(err);
        }
    },
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
