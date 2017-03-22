import React from 'react'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import HelloWorldContainer from './HelloWorld.container'
import HelloWorldComponent from './HelloWorld.component'
// import helloWorldReducer, { toggleColor } from '../../../Modules/HelloWorld/HelloWorld.modules'

describe('HELLO WORLD TESTS', () => {
  const setup = () => {
    const MockFn = jest.fn()
    const mockToggleColor = new MockFn()

    const props = {
      toggleColor: () => { mockToggleColor() },
      color: 'red'
    }

    const newStore = configureMockStore([thunk])

    const mockStore = newStore({
      helloWorld: { color: 'red' }
    })

    const ContainerWrapper = mount(
      <Provider store={mockStore}>
        <HelloWorldContainer />
      </Provider>
    ).find(HelloWorldContainer)

    const ComponentWrapper = shallow(<HelloWorldComponent {...props} />)

    return {
      ContainerWrapper,
      ComponentWrapper,
      props,
      mockStore
    }
  }

  describe('Hello World Container', () => {
    const { ContainerWrapper } = setup()
    it('should render the HelloWorld component', () => {
      expect(ContainerWrapper)
    })

    it('should render an h2 with the text "hello world!"', () => {
      expect(ContainerWrapper.find({ title: 'helloWorld' }).length).toBe(1)
      expect(ContainerWrapper.find({ title: 'helloWorld' }).text()).toContain('Hello World!')
    })
  })
})
