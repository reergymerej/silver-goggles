import React from 'react'
import { shallow } from 'enzyme'
import ParsedCommentary from './ParsedCommentary'

describe('<ParsedCommentary />', () => {
  it('should render <TextBlock />', () => {
    const commentary = 'blah blah blah'
    const wrapper = shallow(<ParsedCommentary commentary={commentary} />)
  })
})
