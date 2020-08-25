import CommentReducer from "./reducers/CommentReducer";
import { createStore } from "redux";

const store = createStore(CommentReducer);

export default store;
