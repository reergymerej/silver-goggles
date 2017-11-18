import React from 'react';
import './App.css';
import entries from './entries.json'
import ClickableEntry from './ClickableEntry'
import Entry from './Entry'

class App extends React.Component {
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
