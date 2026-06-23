const express = require("express");
const userController = require("../controllers/users.js");


const user = express.Router();

user.get("/", userController.getAllUsers);
user.post("/", userController.insertUser);
user.delete("/", userController.deleteUser);
user.patch("/", userController.updateUser);

module.exports = user;
