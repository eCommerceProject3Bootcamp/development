const router = require('express').Router();
const productsController = require('../../controllers/productsController');

// Matches with "/api/products"

router.route('/upload').post(productsController.upload);
// router.route('/delete').delete();
// router.route('/update').put();
// router.route('/listing').get();

module.exports = router;
