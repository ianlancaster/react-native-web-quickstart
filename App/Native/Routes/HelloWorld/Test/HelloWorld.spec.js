import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import HelloWorld from '../HelloWorld.component'
import { props } from './HelloWorld.setup'

it('renders correctly', () => {
  const tree = renderer.create(
    <HelloWorld {...props} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
