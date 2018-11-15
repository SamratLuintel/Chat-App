const mongoose = require("mongoose");
const Group = mongoose.model("groups");
const User = mongoose.model("users");
const GroupMessage = mongoose.model("groupmessages");
const _ = require("lodash");
const formidable = require("formidable");
const cloudinary = require("cloudinary");
const uploader = require("../services/cloudinaryUpload");

module.exports = router => {
  //Return a particular group
  router.get("/api/get-group/:name", async (req, res) => {
    try {
      const group = await Group.findOne({ name: req.params.name });
      if (group) {
        return res.status(200).send(group);
      }
      return res
        .status(400)
        .send({ msg: "The Group with provided name does not exist" });
    } catch (err) {
      console.log(err);
      res.status(400).send({ msg: "Some error occured on the server" });
    }
  });

  //Returns all the chat groups
  router.get("/api/groups", async (req, res) => {
    try {
      const groups = await Group.find({});
      const countries = await Group.aggregate([
        {
          $group: {
            _id: "$country"
          }
        }
      ]);
      const countrySort = _.sortBy(countries, "_id");
      res.status(200).send({ lists: groups, countries: countrySort });
    } catch (err) {
      res.status(401).send({ message: "Some error occured", err });
    }
  });

  //Add a particular group to favourite
  router.post("/api/group/add-to-favourite", async (req, res) => {
    try {
      await Group.update(
        {
          _id: req.body.id,
          "favourites.username": { $ne: req.user.username }
        },
        {
          $push: {
            favourites: {
              username: req.user.username,
              email: req.user.email
            }
          }
        }
      );

      res
        .status(200)
        .send({ message: "Group successfully added to favourite" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  });

  router.post(
    "/api/create-chat-group/image-upload",
    uploader.single("image"),
    (req, res) => {
      //req.file.public_id is set from uploader.single("image") middleware
      const public_id = req.file.public_id;
      res.status(200).send(public_id);
    }
  );

  router.post("/api/create-chat-group", async (req, res) => {
    console.log("On create chat group on server is caleld");

    const group = await Group.findOne({ name: req.body.name });
    if (group) {
      return res
        .status(400)
        .send({ message: "Group with provided name already exist" });
    }
    const newGroup = new Group({
      name: req.body.name,
      country: req.body.country,
      image: req.body.image
    });
    console.log(newGroup);
    try {
      await newGroup.save();
      res.status(200).send({ message: "Image is successfully created" });
    } catch (error) {
      console.log("This errors is from admin.js file");
      console.log(error);
    }
  });
};
