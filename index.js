const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes');
const cors = require("cors");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(cors());
app.use(routes);


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/user_Name')

app.listen(PORT, function () {
  console.log(`app listenting on ${PORT}`)
});