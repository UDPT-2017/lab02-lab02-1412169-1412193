
var homeController = require("./homeController");
var aboutController = require("./aboutControllers");
var messageController = require("./messageControllers");
var userController = require("./userController");

module.exports = {
  home : homeController,
  about : aboutController,
  message : messageController,
  user : userController
}
