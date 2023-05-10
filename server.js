var express = require("express");
const bodyParser = require("body-parser");
let path = require("path");

// load env config
require("dotenv").config({
  path: path.join(__dirname, ".env")
});

// connect to database
var mongoUtil = require("./mongoUtil.js");

mongoUtil.connectToServer(function (err, client) {
  if (err) 
    console.log(err);
  }
);

// logging
var logMessage = function (event, message, connId) {
  var timestamp = new Date().toISOString();
  console.log(timestamp + " - " + event + " - " + connId + " - " + message);
};

// express app shizzle
let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

let public = require("./routes/public");
app.use("/", public);

var http = require("http").createServer(app);

var port = process.env.PORT || 3000;

http.listen(port, function () {
  logMessage("startup", "listening on *:" + port, "none");
});
