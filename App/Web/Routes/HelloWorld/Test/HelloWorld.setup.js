import React from 'react'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import HelloWorldContainer from '../HelloWorld.container'
import HelloWorldComponent from '../HelloWorld.component'

export const props = {
  toggleColor: jest.fn(),
  color: 'red'
}

const newStore = configureMockStore([thunk])

const mockStore = newStore({
  helloWorld: { color: 'red' }
})

export const ContainerWrapper = mount(
  <Provider store={mockStore}>
    <HelloWorldContainer />
  </Provider>
).find(HelloWorldContainer)

export const ComponentWrapper = shallow(<HelloWorldComponent {...props} />)
