import React, { Component } from "react";
import ApplicationHeader from "components/utils/ApplicationHeader/ApplicationHeader";
import LeftMenu from "components/utils/LeftMenu/LeftMenu";
import OnlineOfflineFriends from "components/utils/Chat/OnlineOfflineFriends/OnlineOfflineFriends";
import GroupChatForm from "components/CreateGroupChat/GroupChatForm/GroupChatForm";
import GroupChatPreview from "components/CreateGroupChat/GroupChatPreview/GroupChatPreview";
import { withRouter } from "react-router-dom";
import ProgressMessage from "components/utils/ProgressMessage/ProgressMessage";
import axios from "axios";

class CreateGroupChat extends Component {
  state = {
    groupImage: "",
    //This url is used for live preview
    groupImageUrl: "",

    groupname: "",
    country: "",
    error: "",
    saving: false,
    saved: false
  };

  onGroupNameChange = groupname => {
    this.setState({
      groupname
    });
  };

  onCountryChange = country => {
    this.setState({
      country
    });
  };

  onGroupImageChange = groupImage => {
    const groupImageUrl = URL.createObjectURL(groupImage);
    this.setState({ groupImage, groupImageUrl });
  };

  saveUserImage = async () => {
    console.log("Save Group image is called");
    const formData = new FormData();
    formData.append("image", this.state.groupImage);
    try {
      const res = await axios.post(
        "/api/create-chat-group/image-upload",
        formData
      );
      //Returns the id of image saved in server
      return res.data;
    } catch (err) {}
  };

  resetSavingMessage = () => {
    this.setState({ saving: false, saved: false });
  };

  groupSavingProgress = () => {
    let progress;
    if (this.state.saving || this.state.saved) {
      progress = (
        <ProgressMessage
          message="Your group is being created"
          finishedMessage="Your group is successfully created"
          finished={this.state.saved}
          onCrossed={this.resetSavingMessage}
        />
      );
    }
    return progress;
  };

  onCreateChatGroup = async e => {
    console.log("On create chat group is called");
    try {
      this.setState({ saving: true });
      const imageId = await this.saveUserImage();
      const rawImageUrl =
        "https://res.cloudinary.com/samrat/image/upload/c_fill,g_face,h_100,w_106/v1540572400/";
      const fullImageUrl = `${rawImageUrl}${imageId}`;

      await axios.post("/api/create-chat-group", {
        name: this.state.groupname,
        country: this.state.country,
        image: fullImageUrl
      });
      this.setState({ saved: true });
      this.props.history.push("/home");
    } catch (error) {
      console.log(error.response.data.message);
      this.setState({ error: error.response.data.message });
    }
  };

  render() {
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
                <GroupChatPreview
                  groupname={this.state.groupname}
                  country={this.state.country}
                  groupImageUrl={this.state.groupImageUrl}
                />
              </div>
              <div className="col-md-8">
                <GroupChatForm
                  groupNameChange={this.onGroupNameChange}
                  countryChange={this.onCountryChange}
                  groupImageChange={this.onGroupImageChange}
                  createChatGroup={this.onCreateChatGroup}
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

export default withRouter(CreateGroupChat);
