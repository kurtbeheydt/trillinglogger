const MongoClient = require("mongodb").MongoClient;

var _db;

module.exports = {
  connectToServer: function (callback) {
    MongoClient.connect(process.env.dbURL, {
      useNewUrlParser: true
    }, function (err, client) {
      _db = client.db(process.env.dbSchema);
      return callback(err, client);
    });
  },

  getDb: function () {
    return _db;
  },

  collectionRun: function () {
    return "run";
  },

  collectionData: function () {
    return "data";
  }
};