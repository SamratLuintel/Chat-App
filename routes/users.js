const passport = require("passport");
const mongoose = require("mongoose");

const User = mongoose.model("users");
const {
  SignUpValidation,
  LogInValidation
} = require("../helpers/authValidation");

module.exports = router => {
  //@route POST /api/signup
  //@desc Signs up the user
  //@access Public
  router.post("/api/signup", SignUpValidation, (req, res, next) => {
    passport.authenticate("local.signup", function(err, user, info) {
      // Error from validation
      let errors = {};
      req._validationErrors.forEach(error => {
        errors[error.param] = error.msg;
      });
      if (Object.keys(errors).length !== 0) {
        return res.status(400).send(errors);
      }

      //Error from passport
      if (err) {
        return res.status(401).send(err);
      }
      //IF the user already exist it's value will be false
      if (!user) {
        return res.status(400).send({ email: "The email already exist" });
      }

      return res.status(200).send({ message: "User is successfully created" });
    })(req, res, next);
  });

  //@route POST /api/login
  //@desc Logs in the user
  //@access Public
  router.post("/api/login", LogInValidation, async (req, res) => {
    // Error from validation
    let errors = {};
    req._validationErrors.forEach(error => {
      errors[error.param] = error.msg;
    });
    if (Object.keys(errors).length !== 0) {
      return res.status(400).send(errors);
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        res
          .status(400)
          .send({ email: "The user with provided email does not exist" });
      }
      if (!user.comparePassword(password)) {
        res.status(400).send({ password: "Invalid password" });
      }
      res.status(200).send(user);
    } catch (err) {
      res.status(401).send(err);
    }
  });
};
