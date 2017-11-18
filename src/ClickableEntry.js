import React from 'react'

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

export default ClickableEntry
