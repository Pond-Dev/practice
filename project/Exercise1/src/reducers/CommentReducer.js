const CommentReducer = (state = [], action) => {
  // action type
  switch (action.type) {
    case "ADD_COMMENT":
      return state.concat([action.messageForm]);
    case "DELETE_COMMENT":
      return state.filter((comment) => comment.id !== action.id);
    case "EDIT_COMMENT":
      return state.map((comment) =>
        comment.id === action.id
          ? { ...comment, editing: !comment.editing }
          : comment
      );
    case "UPDATE_COMMENT":
      return state.map((comment) => {
        if (comment.id === action.id) {
          return {
            ...comment,
            name: action.messageForm.newName,
            message: action.messageForm.newMessage,
            editing: !comment.editing,
          };
        } else return comment;
      });
    default:
      return state;
  }
};

// write pattern Action

export default CommentReducer;
