// Class Javascript
class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

// React Library
ReactDOM.render(
  <HelloMessage name="Pond" />, // This is JSX
  document.getElementById("hello-example") // DOM Element
);


// Normal HTML TAG
const element = <h1>Hello, world!</h1>

// JSX 
<p> Hello {name}</p>

