let ACTION_HANDLERS = {}

const handleAction = (ACTION_TYPE, stateChanges) => {
  ACTION_HANDLERS = {
    ...ACTION_HANDLERS,
    [ACTION_TYPE]: (state, action) => ({
      ...state,
      ...stateChanges(state, action)
    })
  }
}

// ------------------------------------
// Actions & Hadlers (Reducers)
// ------------------------------------

handleAction('TOGGLE_DRAWER', (state, action) => ({
  drawerOpen: !state.drawerOpen
}))

// ------------------------------------
// Store Injection
// ------------------------------------

const initialState = {
  drawerOpen: false
}

export default function coreLayoutReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
