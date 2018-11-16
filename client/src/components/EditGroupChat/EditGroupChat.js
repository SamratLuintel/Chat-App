import React, { Component } from "react";
import ApplicationHeader from "components/utils/ApplicationHeader/ApplicationHeader";
import OnlineOfflineFriends from "components/utils/Chat/OnlineOfflineFriends/OnlineOfflineFriends";
import EditGroupChatPreview from "components/EditGroupChat/EditGroupChatPreview/EditGroupChatPreview";
import EditGroupChatForm from "components/EditGroupChat/EditGroupChatForm/EditGroupChatForm";
import { css } from "react-emotion";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import LeftMenu from "components/utils/LeftMenu/LeftMenu";
import ProgressMessage from "components/utils/ProgressMessage/ProgressMessage";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class EditGroupChat extends Component {
  state = {
    fetched: false,
    fetchError: "",
    groupname: "",
    country: "",
    groupImageUrl: "",
    image: "",
    imageChanged: false,
    saving: false,
    saved: "",
    error: ""
  };

  onCountryChange = country => {
    this.setState({
      country
    });
  };

  onGroupImageChange = groupImage => {
    const groupImageUrl = URL.createObjectURL(groupImage);
    this.setState({ groupImage, groupImageUrl, imageChanged: true });
  };

  onEditChatGroup = async e => {
    console.log("On edit chat group is called");
    try {
      const id = this.props.match.params.id;
      this.setState({ saving: true });
      let fullImageUrl;

      //sets the image url to the one obtained from server
      fullImageUrl = this.state.groupImageUrl;
      if (this.state.imageChanged) {
        //if the user has changed the image, change the image
        const imageId = await this.saveUserImage();
        const rawImageUrl =
          "https://res.cloudinary.com/samrat/image/upload/c_fill,g_face,h_120,w_120/v1540572400/";
        fullImageUrl = `${rawImageUrl}${imageId}`;
      }
      await axios.post(`/api/edit-chat-group/${id}`, {
        country: this.state.country,
        image: fullImageUrl
      });
      this.setState({ saved: true });
      this.props.history.push("/home");
    } catch (err) {
      console.log(err.response);
      this.setState({ error: err.response.data.message });
    }
  };

  saveUserImage = async () => {
    console.log("Save Group image is called");
    const formData = new FormData();
    formData.append("image", this.state.groupImage);
    try {
      const res = await axios.post("/api/chat-group/image-upload", formData);
      //Returns the id of image saved in server
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  fetchGroup = async () => {
    const id = this.props.match.params.id;
    try {
      const res = await axios.get(`/api/get-chat-group/${id}`);
      console.log("From fetch chat group", res.data);
      const { name, country, image } = res.data;
      this.setState({
        groupname: name,
        country,
        groupImageUrl: image,
        fetched: true
      });
    } catch (err) {
      console.log("Error from EditGroupChat", err);
      this.setState({
        fetchError:
          "Either the Chat Group with given id does not exist or that is not the group you created."
      });
    }
  };

  groupSavingProgress = () => {
    let progress;
    if (this.state.saving || this.state.saved) {
      progress = (
        <ProgressMessage
          message="Your changes are being saved"
          finishedMessage="Your changes are successfully saved"
          finished={this.state.saved}
          onCrossed={this.resetSavingMessage}
        />
      );
    }
    return progress;
  };

  componentDidMount = () => {
    this.fetchGroup();
  };

  render() {
    //If some problem has occured while fetching the group display them
    if (this.state.fetchError) {
      return (
        <div className="EditGroupChat__middle">
          <p className="EditGroupChat__middle__error-text">
            {this.state.fetchError}
          </p>
        </div>
      );
    }
    let spinner = (
      <div className="EditGroupChat__middle">
        <ClipLoader
          className={override}
          sizeUnit={"px"}
          size={50}
          color={"#123abc"}
          loading={true}
        />
      </div>
    );

    if (!this.state.fetched) {
      return spinner;
    }
    return (
      <div className="CreateGroupChat">
        <ApplicationHeader />
        <LeftMenu />
        <OnlineOfflineFriends />
        <div className="CreateGroupChat__body">
          <div className="container">
            {this.groupSavingProgress()}
            <div className="row">
              <div className="col-md-4">
                <EditGroupChatPreview
                  groupname={this.state.groupname}
                  country={this.state.country}
                  groupImageUrl={this.state.groupImageUrl}
                />
              </div>
              <div className="col-md-8">
                <EditGroupChatForm
                  countryChange={this.onCountryChange}
                  groupImageChange={this.onGroupImageChange}
                  editChatGroup={this.onEditChatGroup}
                  groupname={this.state.groupname}
                  country={this.state.country}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EditGroupChat;
