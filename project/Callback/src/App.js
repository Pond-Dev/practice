import React from "react";
import "./App.css";
import Cat from "./components/pet/Cat";
import Dog from "./components/Dog";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catName: "...",
      dogAge: "0",
    };
  }
  setName(name) {
    this.setState({ catName: name });
  }
  setAge(age) {
    this.setState({ dogAge: age });
  }
  render() {
    return (
      <div className="App">
        <Cat name={this.state.catName} set_name={this.setName.bind(this)} />
        <Dog age={this.state.dogAge} set_age={this.setAge.bind(this)} />
      </div>
    );
  }
}

export default App;
