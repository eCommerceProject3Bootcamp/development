const db = require('../models');

const sharp = require('sharp');

module.exports = {
	imgResize: function(req, res) {
		console.log(req.files);
	},
};
