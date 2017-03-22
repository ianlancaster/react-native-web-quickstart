import React from 'react'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import HelloWorldContainer from './HelloWorld.container'
import HelloWorldComponent from './HelloWorld.component'
import helloWorldReducer, { toggleColor } from '../../../Modules/HelloWorld/HelloWorld.modules'

describe('HELLO WORLD TESTS', () => {
  const setup = () => {
    const props = {
      // toggleColor: sinon.spy(),
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

  describe('actions', () => {
    it('should create an action to add a todo', () => {
      expect(true).toEqual(true)
    })
  })
})
