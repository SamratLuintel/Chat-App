const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const LocalStrategy = require("passport-local").Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

passport.use(
  "local.signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true
    },
    async (req, email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (user) {
          return done(null, false); // messaging user already exist still to be added
        }
        const newUser = new User();
        newUser.username = req.body.username;
        newUser.email = req.body.email;
        newUser.password = req.body.password;
        const savedUser = await newUser.save();
        done(null, savedUser);
      } catch (err) {
        return done(err);
      }
    }
  )
);

module.exports = passport;
