const uploader = require("../../services/cloudinaryUpload");
module.exports = router => {
  router.post(
    "/api/settings/user-image-upload",
    uploader.single("image"),
    (req, res) => {
      console.log("User image uplaod route is caleld");
      const public_id = req.file.public_id;
      console.log("Public id of image is ", public_id);
    }
  );
};
