const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require(bcrypt);
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
  userName: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true }
});


const userData = mongoose.model("user_Name" , userSchema);

module.exports = userData;