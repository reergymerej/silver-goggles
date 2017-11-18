import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import entries from './entries.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          entries.map(name => (
            <a
              key={name}
              href={`/${name}`}
              >{name}</a>
          ))
        }
      </div>
    );
  }
}

export default App;
