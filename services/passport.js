const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

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
          return done(null, false);
        }
        const newUser = new User();
        newUser.username = req.body.username;
        newUser.fullname = req.body.username;
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

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebook.clientID,
      clientSecret: keys.facebook.clientSecret,
      profileFields: ["email", "displayName", "photos"],
      callbackURL: "/api/auth/facebook/callback",
      passReqToCallback: true,
      proxy: true
    },
    async (req, token, refreshToken, profile, done) => {
      try {
        const user = await User.findOne({ facebook: profile.id });
        if (user) {
          return done(null, user);
        }
        const newUser = new User();
        newUser.facebook = profile.id;
        newUser.fullname = profile.displayName;
        newUser.username = profile.username;
        newUser.email = profile._json.email;
        newUser.userImage = `https://graph.facebook.com/${
          profile.id
        }/picture?type=large`;
        newUser.fbTokens.push({ token });
        const savedUser = await newUser.save();
        done(null, savedUser);
      } catch (err) {
        return done(err, false);
      }
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      profileFields: ["email", "displayName", "photos"],
      callbackURL: "/api/auth/google/callback",
      passReqToCallback: true,
      proxy: true
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        const user = await User.findOne({ google: profile.id });
        if (user) {
          return done(null, user);
        }
        const newUser = new User();
        newUser.google = profile.id;
        newUser.fullname = profile.displayName;
        newUser.username = profile.displayName;
        newUser.email = profile.emails[0].value;
        newUser.userImage = profile._json.image.url;
        const savedUser = await newUser.save();
        done(null, savedUser);
      } catch (err) {
        return done(err, false);
      }
    }
  )
);
module.exports = passport;
