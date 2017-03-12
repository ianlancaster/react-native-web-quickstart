// Note: fetch results in a well documented 'Cannot find variable: self' error. Will need to fix.
// import fetch from 'isomorphic-fetch'

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
  color: 'red',
  data: {
    loading: false,
    objects: [],
  },
};

// ------------------------------------
// Store Injection
// ------------------------------------

export default function stockAppReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
