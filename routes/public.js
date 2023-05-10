let router = require("express").Router();
let path = require("path");

var loggerController = require("../controllers/logger");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.route("/createRun").post(loggerController.createRun);

module.exports = router;