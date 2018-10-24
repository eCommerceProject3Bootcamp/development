const router = require("express").Router();
const imgRoutes = require("./imgRoutes");

// Image stuff routes
router.use("/images", imgRoutes);

module.exports = router;
