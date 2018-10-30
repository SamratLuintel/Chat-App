const mongoose = require("mongoose");
const Group = mongoose.model("groups");
const User = mongoose.model("users");
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
};
