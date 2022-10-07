import React, { Component } from "react";

const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onChange}
        value={value}
        name={name}
        autoFocus
        id={name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
