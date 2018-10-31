const router = require('express').Router();
const authCommands = require('../../controllers/loginController');

// Matches with "/api/login"

// Create new user?
router.route('/login:test').post(authCommands.create);

module.exports = router;
