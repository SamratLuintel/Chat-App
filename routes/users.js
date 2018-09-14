const passport = require("passport");

module.exports = router => {
  //@route POST /api/signup
  //@desc Signs up the user
  //@access Private
  router.post("/api/signup", (req, res, next) => {
    passport.authenticate("local.signup", function(err, user, info) {
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
};
