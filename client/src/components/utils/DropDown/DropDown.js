import React, { Component } from "react";

class DropDown extends Component {
  state = {
    displayMenu: false
  };

  showDropDownMenu = event => {
    event.preventDefault();
    this.setState(
      { displayMenu: true },
      document.addEventListener("mousedown", this.handleClickOutside)
    );
  };

  //if the click is outside the dropdown then it closed the dropdown
  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.hideDropDownMenu();
    }
  };
  hideDropDownMenu = event => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.handleClickOutside);
    });
  };

  render() {
    const { props } = this;
    let dropdownRender = null;
    if (this.state.displayMenu) {
      dropdownRender = (
        <div className="DropDown__items-container">{props.children}</div>
      );
    }
    return (
      <div className="DropDown" ref={el => (this.wrapperRef = el)}>
        <div
          onClick={this.showDropDownMenu}
          className="DropDown__button-container"
        >
          <div className="DropDown__button-container__text">
            {props.displayText} {"  "} <i class="fas fa-chevron-down" />
          </div>
        </div>
        {dropdownRender}
      </div>
    );
  }
}

export default DropDown;
