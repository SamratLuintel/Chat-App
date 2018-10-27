import React from "react";
import Dashboard from "components/admin/Dashboard/Dashboard";
import { shallow, render } from "enzyme";
import axios from "axios";
import moxios from "moxios";

describe("The Dashboard component", () => {
  beforeEach(function() {
    moxios.install(axios);
  });

  afterEach(function() {
    moxios.uninstall(axios);
  });
  it("should not regress", () => {
    const wrapper = render(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should set group if valid input", () => {
    const value = "Samrat";
    const wrapper = shallow(<Dashboard />);
    wrapper
      .find("input")
      .at(0)
      .simulate("change", {
        target: { value }
      });
    expect(wrapper.state("group")).toBe(value);
  });

  it("should set country if valid input", () => {
    const value = "Nepal";
    const wrapper = shallow(<Dashboard />);
    wrapper
      .find("input")
      .at(1)
      .simulate("change", {
        target: { value }
      });
    expect(wrapper.state("country")).toBe(value);
  });

  it("should set error state when dashboard api returns error", async () => {
    const errorMsg = "Group already exist";
    moxios.stubRequest("/api/dashboard", {
      status: 400,
      response: {
        message: errorMsg
      }
    });
    const event = {
      preventDefault: () => {},
      target: {
        group: "",
        country: ""
      }
    };
    const wrapper = shallow(<Dashboard />);
    await wrapper.instance().onFormSubmit(event);
    expect(wrapper.state("error")).toBe(errorMsg);
  });
});
