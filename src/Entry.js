import React from 'react'
import { TYPE } from './constants'
import ParsedCommentary from './ParsedCommentary'

class Entry extends React.Component {
  handleCommitSelected = value => {
    // FIXME: This looks like we're recreating the resource structure.
    this.props.onResourceSelected({
      type: TYPE.GIT,
      value,
    })
  }

  render() {
    const { props } = this
    const { terminal } = props.entry.resources
    const terminalUri = terminal && terminal.uri
    return (
      <div>
        <h2>{props.entry.name}</h2>
        <div>
          { terminalUri &&
            <a href={terminalUri}>terminal.log</a>
          }
        </div>
        <ParsedCommentary
          commentary={props.entry.commentary}
          onCommitSelected={this.handleCommitSelected}
        />
      </div>
    )
  }
}

export default Entry
