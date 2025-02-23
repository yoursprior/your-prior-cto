const db = require("../models");
const User = db.user;

exports.create = (req, res) => {
  const user = new User({
    user_name: req.body.user_name,
    password: req.body.password,
    email: req.body.email
  });

  user
    .save(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};