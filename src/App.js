import React, { Component } from 'react';
import './App.css';
import entries from './entries.json'

const Entry = (props) => (
  <div>
    <h2>{props.entry.name}</h2>
    <pre>
      {props.entry.commentary}
    </pre>
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
        href={`/entries/${this.props.entry.name}/commentary.txt`}
        className="ClickableEntry"
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

  handleEntryClicked = (entry) => {
    this.setState({ currentEntry: entry })
  }

  render() {
    return (
      <div className="App">
        <div className="entries">
          {
            entries.map(entry => (
              <ClickableEntry
                key={entry.name}
                onClick={this.handleEntryClicked}
                entry={entry}
              />
            ))
          }
        </div>
        <div className="entry">
          { this.state.currentEntry &&
            <Entry entry={this.state.currentEntry} />
          }
        </div>
      </div>
    );
  }
}

export default App;
