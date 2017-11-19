import React from 'react'
import GitRefBlock from './GitRefBlock'

const TYPE = {
  TEXT: 'TEXT',
  GIT: 'GIT',
}

const parseCommentary = (commentary) => {
  const gitRegex = /(ref:git:[a-z0-9]+)/gi
  const hashRegex = /ref:git:([a-z0-9]+)/gi
  const parts = commentary.split(gitRegex)
  // These are all just strings.  We have to return them with some indicator of
  // what type of data they are.
  return parts
    .map(part => {
      const hashExec = hashRegex.exec(part)
      const commitHash = hashExec && hashExec[1]
      const type = commitHash ? TYPE.GIT : TYPE.TEXT
      const value = type === TYPE.GIT ? commitHash : part
      return {
        type,
        value,
      }
    })
}

const TextBlock = (props) => (
  <pre>
    {props.value}
  </pre>
)

class ParsedCommentary extends React.Component {
  handleBlockTypeClick = value => {
    console.log('user engaged with ref', value)
  }

  render() {
    const { props } = this
    const parsedCommentaryBlocks = parseCommentary(props.commentary)
    return (
      <div>
        {
          parsedCommentaryBlocks.map((block, i) => {
            const BlockType = block.type === TYPE.TEXT
              ? TextBlock
              : GitRefBlock
            return (
              <BlockType
                key={i}
                value={block.value}
                onClick={this.handleBlockTypeClick}
              />
            )
          })
        }
      </div>
    )
  }
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
