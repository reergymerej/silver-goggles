import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import entries from './entries.json'

const Entry = () => (
)

class App extends Component {
  state = {
    currentEntry: null,
  }

  handleEntrySelected = (entry) => {
    this.setState({ currentEntry: entry })
  }

  render() {
    return (
      <div className="App">
        {
          entries.map(entry => (
            <a
              key={entry.name}
              href="#"
              onPress={this.handleEntrySelected.bind(this, entry)}
              >{entry.name}</a>
          ))
        }
        <div>
          <Entry entry={this.state.currentEntry} />
        </div>
      </div>
    );
  }
}

export default App;
