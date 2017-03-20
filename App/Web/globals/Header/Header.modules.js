let ACTION_HANDLERS = {}

// const handleAction = (ACTION_TYPE, stateChanges) => {
//   ACTION_HANDLERS = {
//     ...ACTION_HANDLERS,
//     [ACTION_TYPE]: (state, action) => ({
//       ...state,
//       ...stateChanges(state, action)
//     })
//   }
// }

// ------------------------------------
// Actions & Hadlers (Reducers)
// ------------------------------------

// ------------------------------------
// Store Injection
// ------------------------------------

const initialState = {}

export default function componentReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
