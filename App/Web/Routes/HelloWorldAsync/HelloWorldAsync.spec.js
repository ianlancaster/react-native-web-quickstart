import React from 'react'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import HelloWorldAsyncContainer from './HelloWorldAsync.container'
import HelloWorldAsyncComponent from './HelloWorldAsync.component'
import helloWorldAsyncReducer, { asyncToggleColor } from '../../../Modules/HelloWorldAsync/HelloWorldAsync.modules'

describe('HELLO WORLD ASYNC TESTS', () => {
  const setup = () => {
    const props = {
      asyncToggleColor: jest.fn(asyncToggleColor),
      color: 'red',
      loading: false
    }

    const newStore = configureMockStore([thunk])

    const mockStore = newStore({
      helloWorldAsync: {
        color: 'red',
        loading: false
      }
    })

    const ContainerWrapper = mount(
      <Provider store={mockStore}>
        <HelloWorldAsyncContainer />
      </Provider>
    ).find(HelloWorldAsyncContainer)

    const ComponentWrapper = shallow(<HelloWorldAsyncComponent {...props} />)

    return {
      ContainerWrapper,
      ComponentWrapper,
      props,
      mockStore
    }
  }

  describe('HelloWorldAsync Container', () => {
    const { ContainerWrapper } = setup()
    it('should render the HelloWorldAsync component', () => {
      expect(ContainerWrapper)
    })

    it('should render an h2 with the text "hello world!"', () => {
      expect(ContainerWrapper.find({ title: 'helloWorldAsync' }).length).toBe(1)
      expect(ContainerWrapper.find({ title: 'helloWorldAsync' }).text()).toContain('Hello World!')
    })
  })

  describe('HelloWorldAsync Component', () => {
    const { ComponentWrapper, props } = setup()
    it('should call asyncToggleColor when the text is clicked', () => {
      expect(props.asyncToggleColor.mock.calls.length).toBe(0)
      ComponentWrapper.find({ title: 'helloWorldAsync' }).simulate('click')
      expect(props.asyncToggleColor.mock.calls.length).toBe(1)
    })
  })

  describe('HelloWorldAsync Actions', () => {
    const { mockStore } = setup()
    it('Should have an asyncToggleColor action creator that is a function', () => {
      expect(asyncToggleColor).toBeInstanceOf(Function)
    })

    it('should dispatch', () => {
      return Promise.resolve(mockStore.dispatch(asyncToggleColor()))
        .then(() => {
          return Promise.resolve(mockStore.getActions())
        })
        .then((resolved) => {
          console.log(resolved)
        })
    })

    it('should timers', () => {
      const callBack = jest.fn()
      asyncToggleColor(callBack)
    })
  })
})
