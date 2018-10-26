const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const app = express();
const server = http.createServer(app);
const router = require("express-promise-router")();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const validator = require("express-validator");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const passport = require("passport");
const keys = require("./config/keys");

//import cloudinary
require("./services/cloudinaryUpload");
mongoose.connect(
  "mongodb://localhost/chat-app",
  { useNewUrlParser: true },
  () => console.log("Connected to Mongo Server")
);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//require the models
require("./models/users.js");
require("./models/groups.js");

app.use(passport.initialize());
app.use(passport.session());
//require passport
require("./services/passport");

app.use(router);

require("./routes/users")(router);
require("./routes/admin")(router);
require("./routes/home")(router);

app.use(express.static("public"));

app.use(cookieParser);
app.use(validator());

app.use(
  session({
    secret: "thisisasecretkey",
    resave: true,
    saveInitialized: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

server.listen(5000, () => {
  console.log("Server is listening on the port 5000");
});
