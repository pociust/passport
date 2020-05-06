const db = require('./../models');

module.exports = {
  //CRUD

  //create
  create: function (req, res) {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  //read
  findAll: function (req, res) {
    db.User.find({}).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err))
  }

  //update

  //delete

}