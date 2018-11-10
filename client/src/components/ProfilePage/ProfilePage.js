import React, { Component } from "react";
import UIBlock from "components/ProfilePage/UIBlock/UIBlock";
import PersonalInfo from "components/ProfilePage/PersonalInfo/PersonalInfo";
import { css } from "react-emotion";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import ApplicationHeader from "components/utils/ApplicationHeader/ApplicationHeader";
import OnlineOfflineFriends from "components/utils/Chat/OnlineOfflineFriends/OnlineOfflineFriends";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class ProfilePage extends Component {
  state = {
    fetched: false,
    error: false,
    gender: "",
    country: "",
    description: "",
    fullname: "",
    username: "",
    email: ""
  };

  fetchPeople = async () => {
    try {
      const id = this.props.match.params.id;
      const res = await axios.get(`/api/getpeople/${id}`);
      const {
        gender,
        country,
        description,
        fullname,
        username,
        email
      } = res.data;
      this.setState({
        gender,
        country,
        description,
        fullname,
        username,
        email,
        fetched: true
      });
      console.log("User is fetched ", res.data);
    } catch (error) {
      this.setState({
        error:
          "Either the user with provided id does not exist or there is some problem in the server"
      });
    }
  };

  componentDidMount = () => {
    this.fetchPeople();
  };

  render() {
    if (this.state.error) {
      return <div className="ProfilePage--middle">{this.state.error}</div>;
    }
    let spinner = (
      <div className="ProfilePage--middle">
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
      <div className="ProfilePage">
        <ApplicationHeader />
        <OnlineOfflineFriends />
        <div className="container">
          <div className="row">
            <div className="col">
              <UIBlock />
            </div>
          </div>
          {/* User Personal Info */}
          <div className="row ProfilePage__bottom-header-profile">
            <div className="col-md-5">
              <PersonalInfo
                gender={this.state.gender}
                country={this.state.country}
                description={this.state.description}
                fullname={this.state.fullname}
                username={this.state.username}
                email={this.state.email}
              />
            </div>
            <div className="col-md-6">
              <div className="ProfilePage__user-posts">
                There are no posts to show
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfilePage;
