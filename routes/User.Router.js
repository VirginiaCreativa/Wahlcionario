const express = require("express");
const validator = require("express-joi-validation").createValidator({});
const response = require("../middlewares/Response");
const UserController = require("../controllers/User.Controller");
const UserValidateSchema = require("../models/User.Validation.Model");
const Authorization = require("../middlewares/Authorization");

function UserRouter(app) {
  const router = express.Router();
  app.use("/user", router);

  router.get("/", Authorization, (req, res) => {
    UserController.getUsers()
      .then((data) => response.success(req, res, data, "Users"))
      .catch((err) =>
        response.error(req, res, "Infomacion invalida", 400, err)
      );
  });

  router.get("/auth/current", Authorization, (req, res) => {
    UserController.getUser(req.user, res);
  });

  router.post("/login", validator.body(UserValidateSchema), (req, res) => {
    UserController.CreateUser(req, res);
  });

  router.post("/register", (req, res) => {
    UserController.getLogin(req, res);
  });

  router.put("/login/update/:id", (req, res) => {
    UserController.getUserUpdate(req, res);
  });
}

module.exports = UserRouter;
