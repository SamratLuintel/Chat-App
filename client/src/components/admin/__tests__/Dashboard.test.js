import React from "react";
import Dashboard from "components/admin/Dashboard/Dashboard";
import { shallow, render } from "enzyme";

describe("The Dashboard component", () => {
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
});
