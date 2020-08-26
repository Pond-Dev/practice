import React, { Component } from "react";
import { connect } from "react-redux";

class CommentForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    const messageForm = {
      name: this.name.value,
      message: this.message.value,
      id: new Date(),
      editing: false,
    };
    this.name.value = "";
    this.message.value = "";
    // using dispatch
    this.props.dispatch({
      type: "ADD_COMMENT",
      messageForm,
    });
  };
  render() {
    return (
      <div>
        <h1> Add Comment</h1>
        <form onSubmit={this.onSubmit}>
          <input
            required
            type="text"
            placeholder="Input Name"
            ref={(input) => (this.name = input)}
          />{" "}
          <br /> <br />
          <textarea
            required
            row="5"
            cols="28"
            placeholder="Message"
            ref={(input) => (this.message = input)}
          />{" "}
          <br />
          <br />
          <button className="btn btn-light">Comment</button>
        </form>
      </div>
    );
  }
}

export default connect()(CommentForm);
