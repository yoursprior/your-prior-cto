module.exports = app => {
  const user = require("../controllers/userController");

  var router = require("express").Router();

  router.post("/signup", user.create);

  app.use("/api/user", router);
};
