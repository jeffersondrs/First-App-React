import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Jefferson",
      idade: "20",
      company: "Facebook",
      string: "I work at",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi , {this.state.name}, you have {this.state.idade} years old.{" "}
            {this.state.string} {this.state.company}
          </p>
          <button className="btn"
            onClick={() => {
              this.setState({
                name: "Julius",
                idade: "66",
                company: "Google",
                string: "I work at",
              });
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
