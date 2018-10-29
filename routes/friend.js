const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = router => {
  //friend request
  router.post("/api/friendrequest", async (req, res) => {
    console.log("Friend request route is called");
    if (req.body.receiver && req.body.receiver !== req.user.username) {
      try {
        const receiverUpdate = User.update(
          {
            username: req.body.receiver,
            "request.userId": { $ne: req.user._id },
            "friendsList.friendId": { $ne: req.user._id }
          },
          {
            $push: {
              request: {
                userId: req.user._id,
                username: req.user.username
              }
            },
            $inc: { totalRequest: 1 }
          }
        );

        //prevents sending the request to ourself
        const senderUpdate = User.update(
          {
            username: req.user.username,
            "sentRequest.username": { $ne: req.body.receiver }
          },
          {
            $push: {
              sentRequest: {
                username: req.body.receiver
              }
            }
          }
        );

        await senderUpdate;
        await receiverUpdate;

        res.status(200).send({ message: "Successfully updated" });
      } catch (err) {
        console.log(err);
      }
    }
  });
};
