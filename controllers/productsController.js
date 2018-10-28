const db = require('../models');
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
