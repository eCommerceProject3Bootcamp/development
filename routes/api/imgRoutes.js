const router = require('express').Router();
const imgController = require('../../controllers/imgController');
// const multer = require('multer');
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// Matches with "/api/images"
router.route('/upload').post(imgController.imgResize);

module.exports = router;
