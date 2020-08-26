import React, { Component } from "react";
import { connect } from "react-redux";

class EditComment extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    const messageForm = {
      newName: this.name.value,
      newMessage: this.message.value,
    };
    this.props.dispatch({
      type: "UPDATE_COMMENT",
      id: this.props.comment.id,
      messageForm,
    });
  };

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.onSubmit}>
            <input
              required
              type="text"
              placeholder="Input Name"
              defaultValue={this.props.comment.name}
              ref={(input) => (this.name = input)}
            />{" "}
            <br /> <br />
            <textarea
              required
              row="5"
              cols="28"
              placeholder="Message"
              defaultValue={this.props.comment.message}
              ref={(input) => (this.message = input)}
            />{" "}
            <br />
            <br />
            <button className="btn btn-light">Update</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(EditComment);
