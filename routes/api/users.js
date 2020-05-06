const router = require('express').Router();
const usersController = require('./../../controllers/usersController');


router.route('/')
  .post(usersController.create)
  .get(usersController.findAll)


module.exports = router;