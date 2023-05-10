// load env config
require("dotenv").config();

// connect to database
var mongoUtil = require("./mongoUtil.js");

console.log("deleting votes ...");

mongoUtil.connectToServer(function (err, client) {
  if (err) 
    console.log(err);
  _db = client.db(process.env.dbSchema);
  _db.collection(mongoUtil.collectionVotes()).deleteMany(function (err) {
    if (err) 
      throw err;
    console.log("votes deleted");
  });

  _db.collection(mongoUtil.collectionMailing()).deleteMany(function (err) {
    if (err) 
      throw err;
    console.log("mailings deleted");
  });
});