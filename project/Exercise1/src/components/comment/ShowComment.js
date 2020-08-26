import React, { Component } from "react";
import { connect } from "react-redux";
import Comment from "./Comment";
import EditComment from "./EditComment";
class ShowComment extends Component {
  render() {
    return (
      <div>
        <h1>Show all comment</h1>
        {this.props.comments.map((comment) => (
          <div key={comment.id}>
            {comment.editing ? (
              <EditComment comment={comment} key={comment.id} />
            ) : (
              <Comment key={comment.id} comment={comment} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

// change state to props then collect value to comments
const mapStateToProps = (state) => {
  return {
    comments: state,
  };
};

export default connect(mapStateToProps)(ShowComment);
