const express = require("express");
const bodyParser = require("body-parser");
const socketIO = require("socket.io");

const http = require("http");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const cors = require("cors");
const validator = require("express-validator");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const keys = require("./config/keys");

//import cloudinary
require("./services/cloudinaryUpload");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true },
  () => console.log("Connected to Mongo Server")
);

app.use(cors());

//require the models
require("./models/users");
require("./models/groups");
require("./models/messages");
require("./models/groupmessage");
require("./models/posts");

//require passport
const passport = require("./services/passport");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "thisisasecretkey",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Require sockets
require("./sockets/groupchat")(io);
require("./sockets/sendrequest")(io);
require("./sockets/globalroom")(io);
require("./sockets/privatemessage")(io);

//Require routes
require("./routes/users")(app);
require("./routes/admin")(app);
require("./routes/group")(app);
require("./routes/groupchat")(app);
require("./routes/friend")(app);
require("./routes/people")(app);
require("./routes/privatechat")(app);
require("./routes/settings/profile")(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // if not https redirect to https unless logging in using OAuth
  app.use(express.static("client/build"));

  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(validator());
const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Server is listening on the port ${port}`);
});
