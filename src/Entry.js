import React from 'react'

const parseCommentary = (commentary) => {
  const gitRegex = /ref:git:([a-z0-9]+)/gi
  const parts = commentary.split(gitRegex)
  // These are all just strings.  We have to return them with some indicator of
  // what type of data they are.
  return parts
    .map(part => {
      return {
        type: 'text',
        value: 'xxx',
      }
    })
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
        parsedCommentaryBlocks.map((block, i) => {
          if (block.type === 'text') {
            return <TextBlock value={block.value} />
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
