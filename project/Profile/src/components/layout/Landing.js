import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Landing extends Component {
  render() {
    return (
      <div className="col-md-12 text-center">
        <h1>Welcome to my Profile</h1>
        <Link to="/register" className="btn btn-lg btn-light">
          Register
        </Link>
        <Link to="/login" className="btn btn-lg btn-light">
          Login
        </Link>
      </div>
    );
  }
}

export default Landing;
