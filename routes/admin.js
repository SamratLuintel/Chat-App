const path = require("path");
const fs = require("fs");
const formidable = require("formidable");

module.exports = router => {
  router.post("/api/image-upload", (req, res) => {
    console.log("image-upload route is called");
    const form = formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, "../public/uploads");

    form.on("file", (field, file) => {
      fs.rename(file.path, path.join(form.uploadDir, file.name), err => {
        if (err) throw err;
        console.log("File renamed successfully");
      });
    });

    form.on("error", err => {
      console.log(err);
    });

    form.on("end", () => {
      console.log("File upload is successful");
      res.status(200).send({ message: "File is successfully uploaded" });
    });

    form.parse(req);
  });
};
