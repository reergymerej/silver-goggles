import React from 'react'
import { shallow } from 'enzyme'
import ParsedCommentary from './ParsedCommentary'

describe('<ParsedCommentary />', () => {
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
})
