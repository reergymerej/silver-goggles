
import React from 'react'

const GitRefBlock = (props) => (
  <a href={`https://github.com/reergymerej/silver-goggles/commit/${props.value}`}>
    {props.value}
  </a>
)

export default GitRefBlock
