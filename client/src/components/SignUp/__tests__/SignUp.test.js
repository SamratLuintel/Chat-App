import React from "react";
import { SignUp } from "components/SignUp/SignUp";
import { shallow } from "enzyme";
import { signUpFormSubmit } from "store/actions/profile/profile";

jest.mock("store/actions/profile/profile", () => ({
  signUpFormSubmit: jest.fn()
}));

describe("The SignUp component description", () => {
  describe("The SignUp component", () => {
    const props = {
      handleSubmit: jest.fn(),
      values: { name: "Samrat" },
      history: jest.fn()
    };
    it("should call handleSubmit and signUpFormSubmit on form submission", () => {
      const wrapper = shallow(<SignUp {...props} />);
      wrapper.find("button").simulate("click");
      expect(props.handleSubmit).toHaveBeenCalledWith(expect.any(Function));
      expect(signUpFormSubmit).not.toHaveBeenCalled();
      props.handleSubmit.mock.calls[0][0](props.values);
      expect(signUpFormSubmit).toHaveBeenCalledWith(
        { name: "Samrat" },
        expect.any(Function),
        expect.any(Function)
      );
    });
  });
});
