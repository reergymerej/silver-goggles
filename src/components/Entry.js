import React from 'react'
import { TYPE } from '../constants'
import ParsedCommentary from './ParsedCommentary'
import './Entry.css'

class Entry extends React.Component {
  state = {
    showTerminalLog: false,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.entry !== this.props.entry) {
      this.setState({ showTerminalLog: false })
    }
  }

  handleCommitSelected = value => {
    // FIXME: This looks like we're recreating the resource structure.
    this.props.onResourceSelected({
      type: TYPE.GIT,
      value,
    })
  }

  handleTerminalLogClick = (event) => {
    event.preventDefault()
    this.setState({ showTerminalLog: true })
  }

  renderTerminalLog() {
    const { content } = this.props.entry.resources.terminal
    return (
      <div>
        {content}
      </div>
    )
  }

  render() {
    const { props } = this
    const { terminal } = props.entry.resources
    const terminalUri = terminal && terminal.uri
    return (
      <div className="Entry">
        <h2>{props.entry.name}</h2>
        <div className="content">
          <div className="left">
            <div>
              { terminalUri &&
                <a
                  href={terminalUri}
                  onClick={this.handleTerminalLogClick}
                >terminal.log</a>
              }
            </div>
            <ParsedCommentary
              commentary={props.entry.commentary}
              onCommitSelected={this.handleCommitSelected}
            />
          </div>
          <pre className="right">
            { this.state.showTerminalLog && this.renderTerminalLog() }
          </pre>
        </div>
      </div>
    )
  }
}

export default Entry
