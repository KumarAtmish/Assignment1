import React from "react";
import "./styles.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends React.Component {
  state = {
    userInput: ""
  };

  inputChangeHandler = (event) => {
    this.setState({
      userInput: event.target.value
    });
  };
  deleteCharHandler = (index) => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ userInput: updatedText });
  };

  render() {
    const charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div>
        <input
          type="text"
          onChange={(event) => this.inputChangeHandler(event)}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}
export default App;
