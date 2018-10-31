const db = require('../models');
module.exports = {
    create: function(req, res) {
        console.log(req.params);
        const { name, accessToken = '', idToken = '', tokenExpiresAt = '' } = req.body;
        db.User.create({
            name: name,
            accessToken: accessToken,
            idToken: idToken,
            tokenExpiresAt: tokenExpiresAt,
        });
        return res.send(true);
    },
};
