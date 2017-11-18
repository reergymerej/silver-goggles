import React from 'react'

class ClickableEntry extends React.Component {
  handleClick = event => {
    event.preventDefault()
    this.props.onClick(this.props.entry)
  }

  render() {
    const { uri } = this.props.entry
    return (
      <a
        onClick={this.handleClick}
        href={uri}
        className="ClickableEntry"
      >
        {this.props.entry.name}
      </a>
    )
  }
}

export default ClickableEntry
