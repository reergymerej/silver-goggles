import React from 'react'

class GitRefBlock extends React.Component {
  handleClick = event => {
    event.preventDefault()
    this.props.onClick(this.props.value)
  }

  render() {
    const { value } = this.props
    return (
      <a
        href={`https://github.com/reergymerej/silver-goggles/commit/${value}`}
        onClick={this.handleClick}
      >
        {value}
      </a>
    )
  }
}

export default GitRefBlock
