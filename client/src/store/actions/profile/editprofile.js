import axios from "axios";

export const saveUserImage = file => async dispatch => {
  console.log("Save User image is called");
  const formData = new FormData();
  formData.append("image", file);
  try {
    await axios.post("/api/settings/user-image-upload", formData);
  } catch (err) {}
};
