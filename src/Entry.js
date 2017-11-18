import React from 'react'

const Entry = (props) => (
  <div>
    <h2>{props.entry.name}</h2>
    <pre>
      {props.entry.commentary}
    </pre>
  </div>
)

export default Entry
