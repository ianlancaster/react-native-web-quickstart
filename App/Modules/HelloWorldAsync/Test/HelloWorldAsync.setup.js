import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const newStore = configureMockStore([ thunk ])

export const mockStore = newStore({
  helloWorldAsync: {
    color: 'red',
    loading: false
  }
})

export const expectedActions = {
  startRequest: { type: 'START_REQUEST' },
  asyncToggleColor: { type: 'ASYNC_TOGGLE_COLOR' }
}
