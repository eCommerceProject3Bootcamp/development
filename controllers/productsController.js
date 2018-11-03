const db = require('../models');
const fs = require('fs');
const path = require('path');
module.exports = {
    upload: function(req, res) {
        const { name, description, pictures } = req.body;
        db.Listing.create({
            name: name,
            description: description,
            pictures: pictures,
        });
        return res.send(true);
    },
};
