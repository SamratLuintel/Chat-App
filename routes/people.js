const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = router => {
  router.get("/api/findpeople/:searchText", async (req, res) => {
    console.log("Find people have been called", req.params.searchText);
    const regex = `^${req.params.searchText}`;
    try {
      const people = await User.find({
        $or: [
          { username: { $regex: regex, $options: "i" } },
          {
            fullname: { $regex: regex, $options: "i" }
          }
        ]
      });
      console.log(people);
      res.status(200).send(people);
    } catch (err) {
      console.log(err);
    }
  });
};
