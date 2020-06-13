import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: [
      "Young-Jun",
      "Miso",
      "Sung-Yeon"
    ]
  }

  usernameChangedHandler = (event) => {
    this.setState( {
      username: [
        event.target.value,
        "Mi-so",
        "Sung-Yeon"
      ]
    })
    console.log("works!");
  }

  render() {
    return (
      <div className="App">
        {/* <h1>dsadassa</h1> */}
       <UserInput changed={this.usernameChangedHandler} username={this.state.username[0]}/>
       <UserOutput username={this.state.username[0]}/>
       <UserOutput username={this.state.username[1]}/>
      </div>
    );
  }
}

export default App;
