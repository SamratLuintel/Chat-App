import React, { Component } from "react";

const LoginField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <input
        className="LoginField"
        placeholder={label}
        {...input}
        style={{ marginBottom: "5px" }}
      />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};

export default LoginField;