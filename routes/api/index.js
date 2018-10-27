const router = require('express').Router();
<<<<<<< HEAD
const uploadRoutes = require('./uploadRoutes');

// Matches with /api
router.use('/products', uploadRoutes);
=======
const imgRoutes = require('./imgRoutes');

// Image stuff routes
router.use('/images', imgRoutes);
>>>>>>> master

module.exports = router;
