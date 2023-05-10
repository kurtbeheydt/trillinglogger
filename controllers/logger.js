var mongoUtil = require("../mongoUtil.js");

exports.createRun = (req, res) => {
  var data = {
    startTime: Date.now()
  };

  var db = mongoUtil.getDb();

  db.collection(mongoUtil.collectionRun()).insertOne(data, function (err, result) {
    if (err) 
      throw err;
    res.json({status: true, data: result});
  });
};

exports.index = (req, res) => {
  var db = mongoUtil.getDb();

  db.collection(mongoUtil.collectionMailing()).find({}).toArray(function (err, result) {
    if (err) 
      throw err;
    res.json(result);
  });
};