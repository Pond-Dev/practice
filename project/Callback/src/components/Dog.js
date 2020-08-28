import React, { Component } from "react";

export class Dog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input_str: "",
    };
  }
  changeValue(event) {
    this.setState({ [event.target.name]: event.currentTarget.value });
  }
  changeAge() {
    this.props.set_age(this.state.input_str);
  }
  render() {
    const { age } = this.props;
    return (
      <div>
        <h1> This is a Dog Page</h1>
        <p>The dog age is {age} year old</p>
        <input
          type="text"
          name="input_str"
          onChange={this.changeValue.bind(this)}
        ></input>
        <button onClick={this.changeAge.bind(this)}>Change Age</button>
      </div>
    );
  }
}

export default Dog;
