const router = require('express').Router();
const uploadRoutes = require('./uploadRoutes');

// Matches with /api
router.use('/products', uploadRoutes);

module.exports = router;
