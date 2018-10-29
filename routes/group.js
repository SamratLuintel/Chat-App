const mongoose = require("mongoose");
const Group = mongoose.model("groups");
const User = mongoose.model("users");

module.exports = router => {
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
};
