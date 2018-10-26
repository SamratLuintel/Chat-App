const mongoose = require("mongoose");
const Group = mongoose.model("groups");

module.exports = router => {
  router.get("/api/groups", async (req, res) => {
    try {
      const groups = await Group.find({});
      res.status(200).send(groups);
    } catch (err) {
      res.status(401).send({ message: "Some error occured" });
    }
  });
};
