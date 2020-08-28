import React, { Component } from "react";

class Cat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input_str: "",
    };
  }
  changeValue(event) {
    this.setState({ [event.target.name]: event.currentTarget.value });
  }
  changeName() {
    this.props.set_name(this.state.input_str);
  }
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>This is a Cat Page</h1>
        <p> The Cat name is {name}</p>
        <input
          type="text"
          name="input_str"
          onChange={this.changeValue.bind(this)}
        ></input>
        <button onClick={this.changeName.bind(this)}>Change name</button>
      </div>
    );
  }
}

export default Cat;
