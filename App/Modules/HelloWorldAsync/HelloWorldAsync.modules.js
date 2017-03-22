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

export const asyncToggleColor = () => {
  return dispatch => {
    dispatch({ type : 'START_REQUEST' })
    return setTimeout((callBack) => {
      callBack && callBack()
      return dispatch({ type: 'ASYNC_TOGGLE_COLOR' })
    }
    , 2000)
  }
}

handleAction('START_REQUEST', (state, action) => ({
  loading: true
}))

handleAction('ASYNC_TOGGLE_COLOR', (state, action) => ({
  color: state.color === 'red' ? 'blue' : 'red',
  loading: false
}))

// ------------------------------------
// Initial State
// ------------------------------------

const initialState = {
  color: 'red',
  loading: false
}

// ------------------------------------
// Store Injection
// ------------------------------------

export default function helloWorldAsyncReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
