import React from 'react'

const Entry = (props) => {
  const { terminal } = props.entry.resources
  return (
    <div>
      <h2>{props.entry.name}</h2>
      <pre>
        {props.entry.commentary}
      </pre>
      <div>
        {JSON.stringify(props.entry)}
      </div>
    </div>
  )
}

export default Entry
