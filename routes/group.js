const mongoose = require("mongoose");
const Group = mongoose.model("groups");
const User = mongoose.model("users");
const GroupMessage = mongoose.model("groupmessages");
const _ = require("lodash");

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

  //Save a group message
  router.post("/api/group/save-message", async (req, res) => {
    console.log("Save group message route is called");
    try {
      const group = new GroupMessage();
      group.sender = req.user._id;
      group.body = req.body.message;
      group.name = req.body.groupname;
      await group.save();
      res.status(200).send();
    } catch (err) {
      console.log(err);
      res.status(400).send();
    }
  });

  //Get Group Chat messages
  router.get("/api/group/messages/:groupname", async (req, res) => {
    try {
      const groupmessages = await GroupMessage.find({
        name: req.params.groupname
      }).populate("sender");
      res.status(200).send(groupmessages);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  });
};
