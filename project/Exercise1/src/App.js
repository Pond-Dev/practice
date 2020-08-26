import React from "react";
import { Provider } from "react-redux";
import ShowComment from "./components/comment/ShowComment";
import CommentForm from "./components/comment/CommentForm";
import "./App.css";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CommentForm />
        <ShowComment />
      </div>
    </Provider>
  );
}

export default App;
