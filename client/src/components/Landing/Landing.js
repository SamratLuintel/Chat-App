import React, { Component } from "react";
import Join from "components/Landing/Join/Join";

// {" "}
// <a href="/api/auth/facebook">Facebook</a>{" "}
// <a href="/api/auth/google">Google</a>
class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <div className="Landing__body">
          <div className="container Landing__container">
            <div className="row">
              <div className="col-md-6">
                <div className="Landing__text-area">
                  <h1 className="Landing__header">
                    Here comes the social networking platform that you’ve been
                    waiting for
                  </h1>
                  <h6 className="Landing__sub-header">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sit, iste. Lorem ipsum dolor sit amet consectetur
                    adipisicing
                  </h6>
                </div>
              </div>
              <div className="col-md-6">
                <Join />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
