// ------------------------------------
// Actions
// ------------------------------------
let ACTION_HANDLERS = {}

export const fetchAdditionalContent = (bool) => ({
  type: 'FETCH_ADDITIONAL_CONTENT',
  bool
})
ACTION_HANDLERS = {
  ...ACTION_HANDLERS,
  FETCH_ADDITIONAL_CONTENT: (state, action) => ({
    ...state,
    appShouldFetchContent: action.bool
  })
}

// ------------------------------------
// Reducers
// ------------------------------------
const initialState = { appShouldFetchContent: false }

export default function coreLayoutReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
