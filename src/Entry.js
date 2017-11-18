import React from 'react'

const parseCommentary = (commentary) => {
  return [
    0,
    1,
    2,
  ]
}

const TextBlock = (props) => (
  <pre>
    {props.value}
  </pre>
)

const GitRefBlock = () => (
  <a href="asdf/asdf">a Git reference</a>
)

const ParsedCommentary = (props) => {
  const parsedCommentaryBlocks = parseCommentary(props.commentary)
  return (
    <div>
      {
        parsedCommentaryBlocks.map(block => {
          if (block % 2 === 0) {
            return <TextBlock />
          }
          return <GitRefBlock />
        })
      }
    </div>
  )
}

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
      <ParsedCommentary commentary={props.entry.commentary} />
    </div>
  )
}

export default Entry
