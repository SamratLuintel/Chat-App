const passport = require("passport");
const mongoose = require("mongoose");

const User = mongoose.model("users");
const {
  SignUpValidation,
  LogInValidation
} = require("../helpers/authValidation");

module.exports = router => {
  router.get("/", (req, res) => {
    console.log("Home route is called");
    res.send("You are on home page");
  });
  //@route POST /api/signup
  //@desc Signs up the user
  //@access Public
  router.post("/api/signup", SignUpValidation, (req, res, next) => {
    passport.authenticate("local.signup", function(err, user, info) {
      console.log("Sign up route is hit");
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

  //@route GET api/auth/facebook
  //@desc Facebook O Auth
  //@access Public
  router.get(
    "/api/auth/facebook",
    passport.authenticate("facebook", {
      prompt: "select_account",
      scope: "email"
    })
  );
  //@route GET api/auth/facebook/callback
  //@desc Facebook O Auth
  //@access Public
  router.get(
    "/api/auth/facebook/callback",
    passport.authenticate("facebook", { session: false }),
    (req, res) => {
      console.log("Facebook callback route is called");
      res.redirect("/");
    }
  );

  router.get(
    "/api/auth/google",
    passport.authenticate("google", {
      prompt: "select_account",
      scope: [
        "https://www.googleapis.com/auth/plus.login",
        "https://www.googleapis.com/auth/plus.profile.emails.read"
      ]
    })
  );

  router.get(
    "/api/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      console.log("Google callback route is called");
      res.redirect("/");
    }
  );
};
