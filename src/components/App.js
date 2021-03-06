import React from 'react'
import './App.css'
import entries from '../entries.json'
import ClickableEntry from './ClickableEntry'
import Entry from './Entry'

class App extends React.Component {
  state = {
    currentEntry: null,
    currentResource: null,
  }

  handleEntryClicked = (entry) => {
    this.setState({
      currentEntry: entry,
      currentResource: null,
    })
  }

  handleEntryResourceSelected = resource => {
    this.setState({ currentResource: resource })
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
        { this.state.currentEntry &&
          <div className="entry">
            <Entry
              entry={this.state.currentEntry}
              onResourceSelected={this.handleEntryResourceSelected}
            />
          </div>
        }
        { this.state.currentResource &&
          <div className="resource">
            <iframe
              src={`https://github.com/reergymerej/silver-goggles/commit/${this.state.currentResource.value}.diff`}
            ></iframe>
          </div>
        }
      </div>
    )
  }
}

export default App
