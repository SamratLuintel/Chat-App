const formidable = require("formidable");
const cloudinary = require("cloudinary");
const mongoose = require("mongoose");
const Group = mongoose.model("groups");
const uploader = require("../services/cloudinaryUpload");

module.exports = router => {
  router.post("/api/image-upload", uploader.single("image"), (req, res) => {
    const public_id = req.file.public_id;
    res.status(200).send(public_id);
    // const form = formidable.IncomingForm();

    // form.on("image", async (field, file) => {
    //   console.log("Inside form is called");
    //   const images = [];
    //   try {
    //     const image = await uploader.upload(file);
    //     console.log("Below this line is called");
    //     images.push(image);
    //   } catch (err) {
    //     console.log(err);
    //     res.status(401).send(err);
    //   }
    //   res.status(200).send(images);
    // });

    // form.on("error", err => {
    //   console.log(err);
    // });

    // form.on("end", () => {
    //   console.log("File upload is successful");
    //   res.status(200).send({ message: "File is successfully uploaded" });
    // });

    // form.parse(req);
  });

  router.post("/api/dashboard", async (req, res) => {
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
