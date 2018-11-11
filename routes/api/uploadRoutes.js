const router = require('express').Router();
const productsController = require('../../controllers/productsController');

// Matches with "/api/products"

router.route('/').get(productsController.findAll);
router.route('/:id').get(productsController.findOne);
router.route('/rows/:name').get(productsController.rows);
router.route('/upload').post(productsController.upload);
router.route('/update/:id').put(productsController.update);

module.exports = router;
