import React, { Component } from "react";

class App extends Component {
  soma = () => 5 + 5;

  text = () => {
    return (
      <div>
        <p>oi meu amigo</p>
        <p>dever da t3</p>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h1>Arrow Function</h1>
        <p>{this.soma()}</p>
        {this.text()}
      </div>
    );
  }
}
export default App;
