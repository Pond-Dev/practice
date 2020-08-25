import React from "react";
import ShowComment from "./components/comment/ShowComment";
import CommentForm from "./components/comment/CommentForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CommentForm />
      <ShowComment />
    </div>
  );
}

export default App;
