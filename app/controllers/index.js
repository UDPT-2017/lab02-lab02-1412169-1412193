
var homeController = require("./homeController");
var aboutController = require("./aboutControllers");
var messageController = require("./messageControllers");
var userController = require("./userController");
var featureController = require("./featureControllers");
var otherController = require("./OtherControllers");
var newmessageController = require("./newmessageControllers");

module.exports = {
  home : homeController,
  about : aboutController,
  message : messageController,
  user : userController,
  featureUser : featureController,
  other : otherController,
  newmessages : newmessageController
}
