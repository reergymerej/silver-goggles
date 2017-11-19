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
})
