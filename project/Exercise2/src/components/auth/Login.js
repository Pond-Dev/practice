import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const payload = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(payload);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.currentTarget.value });
  }
  render() {
    return (
      <div className="container my-4">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="text    "
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={this.state.email}
                  aria-describedby="emailHelp"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
