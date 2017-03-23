import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import HelloWorldContainer from '../HelloWorld.container'
import HelloWorldComponent from '../HelloWorld.component'

const props = {
  toggleColor: jest.fn(),
  color: 'red'
}

const newStore = configureMockStore([thunk])

const mockStore = newStore({
  helloWorld: { color: 'red' }
})

export const ContainerWrapper = () => (
  <Provider store={mockStore}>
    <HelloWorldContainer />
  </Provider>
)

export const ComponentWrapper = () => (<HelloWorldComponent {...props} />)
