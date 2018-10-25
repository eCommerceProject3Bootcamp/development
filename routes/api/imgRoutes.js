const router = require('express').Router();
const imgController = require('../../controllers/imgController');

// Matches with "/api/images"
router.route('/upload').get(imgController.imgTest);

module.exports = router;
