import mockResponse from '../../../Utilities/mockResponse'
import helloWorldAsyncReducer, { asyncToggleColor } from '../HelloWorldAsync.modules'
import { mockStore, expectedActions } from './HelloWorldAsync.setup'

describe('HelloWorldAsync Actions', () => {
  it('Should have an asyncToggleColor action creator that is a function', () => {
    expect(asyncToggleColor).toBeInstanceOf(Function)
  })

  it('should reduce START_REQUEST and ASYNC_TOGGLE_COLOR actions when asyncToggleColor is dispatched', () => {
    window.fetch = jest.fn().mockImplementation(() => (
      Promise.resolve(mockResponse(200, null, 'Hello!')))
    )

    return mockStore.dispatch(asyncToggleColor())
      .then(() => {
        const recoredActions = mockStore.getActions()
        expect(recoredActions[0]).toEqual(expectedActions.startRequest)
        expect(recoredActions[1]).toEqual(expectedActions.asyncToggleColor)
      })
  })
})

describe('HelloWorldAsync Reducer', () => {
  it('should return the correct initial state', () => {
    const initialState = {
      color: 'red',
      loading: false
    }

    expect(helloWorldAsyncReducer(undefined, {})).toEqual(initialState)
  })

  it('should toggle the color state if TOGGLE_COLOR is dispatched', () => {
    const expectedState = {
      color: 'blue',
      loading: false
    }

    expect(helloWorldAsyncReducer(undefined, expectedActions.asyncToggleColor)).toEqual(expectedState)
  })
})
