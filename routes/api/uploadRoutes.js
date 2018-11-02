const router = require('express').Router();
const productsController = require('../../controllers/productsController');

// Matches with "/api/products"

router.route('/').get(productsController.findAll);
router.route('/pictures').get(productsController.pictures);
router.route('/upload').post(productsController.upload);
// router.route('/delete').delete();
// router.route('/update').put();

module.exports = router;
