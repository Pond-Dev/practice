import React, { Component } from "react";
import { connect } from "react-redux";

class Comment extends Component {
  constructor() {
    super()
    this.stage ={}
  }
  
  render() {
    return (
      <div>
        <h2>{this.props.comment.name}</h2>
        <p>{this.props.comment.message}</p>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => {
            this.props.dispatch({
              type: "EDIT_COMMENT",
              id: this.props.comment.id,
            });
          }}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger mr-1"
          onClick={() => {
            this.props.dispatch({
              type: "DELETE_COMMENT",
              id: this.props.comment.id,
            });
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}
export default connect()(Comment);
