import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = {
        passwords: []
    }

    componentDidMount(){
        this.getPasswords()
    }

    getPasswords = () => {
        fetch('/api/passwords')
            .then(res => res.json())
            .then(passwords => {
                console.log("Got passwords: ", passwords)
                this.setState({passwords})
            })
    }

    render() {
        const passwords = this.state.passwords
        console.log("passwords: ", passwords)

    return (
      <div className="App">
          {passwords.length ? (
          <div>
              <h1>5 Passwords.</h1>

              <ul className="passwords">
                  {passwords.map((password, index) =>
                    <li key={index}>
                        {password}
                    </li>
                  )}
              </ul>
              <button
                    className="more"
                    onClick={this.getPasswords}>
                  Get more
              </button>
          </div>
          ) : (
                <div>
                    <h1>No passwords :(</h1>
                    <button className="more" onClick={() => this.getPasswords()}>Try again?</button>
                </div>
              )}
      </div>
    );
  }
}

export default App;
