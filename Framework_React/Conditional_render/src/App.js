import logo from './logo.svg';
import './App.css';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render() {
    let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
    let displayText = this.state.isLoggedIn ? "You're logged in. Want to log out?" : "You're logged out. Want to log in?"

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              <button className="App-button" onClick={this.handleClick}>{buttonText}</button>
              <h3 className="App-h3-text">⇧</h3>
              <h3 className="App-h3-text">{displayText}</h3>
              <h3 className="App-h3-text">⇩</h3>
              <a className="App-link"
                 href="https://reactjs.org" target="_blank">Learn React now! See the near IT-future.</a>
            </p>
          </header>
        </div>
    )
  }
}

export default App;
