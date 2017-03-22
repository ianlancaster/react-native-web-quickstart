// ------------------------------------
// Injection Setup
// ------------------------------------

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

export const toggleColor = () => ({ type: 'TOGGLE_COLOR' })

handleAction('TOGGLE_COLOR', (state, action) => ({
  color: state.color === 'red' ? 'blue' : 'red'
}))

// ------------------------------------
// Initial State
// ------------------------------------

const initialState = {
  color: 'red'
}

// ------------------------------------
// Store Injection
// ------------------------------------

export default function helloWorldReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
