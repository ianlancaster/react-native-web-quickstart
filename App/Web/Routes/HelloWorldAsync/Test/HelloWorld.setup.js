import React from 'react'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import HelloWorldAsyncContainer from '../HelloWorldAsync.container'
import HelloWorldAsyncComponent from '../HelloWorldAsync.component'

export const props = {
  asyncToggleColor: jest.fn(),
  color: 'red',
  loading: false
}

const newStore = configureMockStore([ thunk ])

const mockStore = newStore({
  helloWorldAsync: {
    color: 'red',
    loading: false
  }
})

export const ContainerWrapper = mount(
  <Provider store={mockStore}>
    <HelloWorldAsyncContainer />
  </Provider>
).find(HelloWorldAsyncContainer)

export const ComponentWrapper = shallow(<HelloWorldAsyncComponent {...props} />)
