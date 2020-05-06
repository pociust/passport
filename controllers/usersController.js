const db = require('./../models');

module.exports = {
  //CRUD

  //create
  create: function (req, res) {
    db.user_Name
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
  //read

  //update

  //delete

}