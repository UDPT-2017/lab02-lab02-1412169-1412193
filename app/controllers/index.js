
var homeController = require("./homeController");
var aboutController = require("./aboutControllers");
var messageController = require("./messageControllers");
var userController = require("./userController");
var featureController = require("./featureControllers");

module.exports = {
  home : homeController,
  about : aboutController,
  message : messageController,
  user : userController,
  featureUser : featureController
}
