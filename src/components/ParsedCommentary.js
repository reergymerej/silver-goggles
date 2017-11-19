import React from 'react'
import { TYPE } from '../constants'
import GitRefBlock from './GitRefBlock'
import TextBlock from './TextBlock'

const ImageRefBlock = () => <div />

export const parseCommentary = (commentary) => {
  const gitRegex = /(ref:git:[a-z0-9]+)/gi
  const hashRegex = /ref:git:([a-z0-9]+)/gi
  const parts = commentary.split(gitRegex)
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

const getBlockComponent = (type) => {
  const types = {
    [TYPE.TEXT]: TextBlock,
    [TYPE.GIT]: GitRefBlock,
  }
  return types[type] || ImageRefBlock
}

class ParsedCommentary extends React.Component {
  handleBlockTypeClick = value => {
    // We don't actually need this middleman step here, since it just calls the
    // handler with the same thing, but I want to be explicit for now.
    this.props.onCommitSelected(value)
  }

  render() {
    const { props } = this
    const parsedCommentaryBlocks = parseCommentary(props.commentary)
    return (
      <div>
        {
          parsedCommentaryBlocks.map((block, i) => {
            const BlockType = getBlockComponent(block.type)
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

export default ParsedCommentary
