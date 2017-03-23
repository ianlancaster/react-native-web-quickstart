import 'react-native'
import React from 'react' // eslint-disable-line
import renderer from 'react-test-renderer'
import { ComponentWrapper, ContainerWrapper } from './HelloWorld.setup'

describe('Native Hello World', () => {
  it('should render the HelloWorld component correctly', () => {
    const tree = renderer.create(ComponentWrapper()).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render the HelloWorld container correctly', () => {
    const tree = renderer.create(ContainerWrapper()).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
