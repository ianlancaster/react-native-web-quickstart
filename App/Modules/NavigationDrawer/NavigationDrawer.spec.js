import reducer, { toggleDrawer } from './NavigationDrawer.modules'

describe('NavigationDrawer Actions', () => {
  it('should have a toggleDrawer action creator that returns a TOGGLE_DRAWER action', () => {
    const expectedAction = { type: 'TOGGLE_DRAWER' }
    expect(toggleDrawer()).toEqual(expectedAction)
  })
})

describe('NavigationDrawer Reducer', () => {
  it('should return the initial state', () => {
    const initialState = { drawerOpen: false }
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should toggle the color state if TOGGLE_COLOR is dispatched', () => {
    const expectedState = { drawerOpen: true }
    expect(reducer(undefined, toggleDrawer())).toEqual(expectedState)
  })
})
