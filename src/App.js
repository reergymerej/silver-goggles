import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import entries from './entries.json'

const Entry = (props) => (
  <div>
    {JSON.stringify(props.entry)}
  </div>
)

class ClickableEntry extends React.Component {
  handleClick = event => {
    event.preventDefault()
    this.props.onClick(this.props.entry)
  }

  render() {
    return (
      <a
        onClick={this.handleClick}
        href="#"
      >
        {this.props.entry.name}
      </a>
    )
  }
}

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
              onClick={this.handleEntrySelected.bind(this, entry)}
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
