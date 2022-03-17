const dbConfig = require("../data/easyhealth-db.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set('debug', false);

const db = {};
db.mongoose = mongoose;

db.url = dbConfig.url;
db.users = require("./userModel")(mongoose);
db.documents = require('./documentModel')(mongoose);

module.exports = db;