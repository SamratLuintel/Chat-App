const mongoose = require("mongoose");
const Group = mongoose.model("groups");
const _ = require("lodash");

module.exports = router => {
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
};
