import React from 'react'
import { shallow } from 'enzyme'
import ParsedCommentary, { parseCommentary } from './ParsedCommentary'

xdescribe('<ParsedCommentary />', () => {
  it('should render <TextBlock />', () => {
    const commentary = 'blah blah blah'
    const wrapper = shallow(<ParsedCommentary commentary={commentary} />)
    const comp = wrapper.find('TextBlock')
    expect(comp.length).toBe(1)
  })

  it('should render <GitRefBlock />', () => {
    const commentary = `
    blah blah blah

    ref:git:2283e88

    blah blah blah
    `
    const wrapper = shallow(<ParsedCommentary commentary={commentary} />)
    const comp = wrapper.find('GitRefBlock')
    expect(comp.length).toBe(1)
  })

  it('should render <ImageRefBlock />', () => {
    const commentary = `
    blah blah blah

    ref:image:banana.png

    blah blah blah
    `
    const wrapper = shallow(<ParsedCommentary commentary={commentary} />)
    const comp = wrapper.find('ImageRefBlock')
    console.log(wrapper.debug())
    expect(comp.length).toBe(1)
  })
})

describe('parseCommentary', () => {
  it('should return an array', () => {
    const commentary = ''
    const result = parseCommentary(commentary)
    expect(result).toEqual([])
  })

  fit('should split the string into _types_ of strings', () => {
    const commentary = 'asdf asdf 1234 qwer qwer'
    const patterns = [
      {
        type: 'number',
        regex: /[0-9]+/g,
      },
    ]
    const result = parseCommentary(commentary, patterns)
    expect(result).toEqual([
      {
        type: undefined,
        value: 'asdf asdf ',
      },
      {
        type: 'number',
        match: (/[0-9]+/g).exec(commentary),
      },
      {
        type: undefined,
        value: ' qwer qwer',
      },
    ])
  })
})
