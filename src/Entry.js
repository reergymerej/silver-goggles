import React from 'react'

const Entry = (props) => {
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
      <pre>
        {props.entry.commentary}
      </pre>
    </div>
  )
}

export default Entry
