import React, { Component } from "react";
import Input from "./input";
import Form from "./form";
import Joi from "joi-browser";
import { login } from "../../services/authService";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    // console.log("Submitted to server");
    try {
      const { data } = this.state;
      await login(data.username, data.password);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          {/* <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button> */}
          {this.renderInput("username", "Username", "text")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
