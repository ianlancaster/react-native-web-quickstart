import reducer, { toggleColor } from './HelloWorld.modules'

describe('HelloWorld Actions', () => {
  it('should have a toggleColor action creator that returns a TOGGLE_COLOR action', () => {
    const expectedAction = { type: 'TOGGLE_COLOR' }
    expect(toggleColor()).toEqual(expectedAction)
  })
})

describe('HelloWorld Reducer', () => {
  it('should return the initial state', () => {
    const initialState = { color: 'red' }
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should toggle the color state if TOGGLE_COLOR is dispatched', () => {
    const expectedState = { color: 'blue' }
    expect(reducer(undefined, toggleColor())).toEqual(expectedState)
  })
})
