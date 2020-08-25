import React, { Component } from "react";

class CommentForm extends Component {
  handelSubmit = (e) => {
    e.preventDefault();
    const messageform = {
      name: this.name.value,
      message: this.message.value,
      id: new Date(),
    };
    console.log(messageform)
  };
  render() {
    return (
      <div>
        <h1> Add Comment</h1>
        <form onSubmit={this.handelSubmit}>
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
          <button>Comment</button>
        </form>
      </div>
    );
  }
}

export default CommentForm;
