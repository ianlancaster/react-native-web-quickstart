import 'react-native'
import React from 'react' // eslint-disable-line
import renderer from 'react-test-renderer'
import { ComponentWrapper, ContainerWrapper } from './HelloWorldAsync.setup'

describe('Native Hello World Async', () => {
  it('should render the HelloWorldAsync component correctly', () => {
    const tree = renderer.create(ComponentWrapper()).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render the HelloWorldAsync container correctly', () => {
    const tree = renderer.create(ContainerWrapper()).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
