import { handleAction, createReducer } from '../../Utilities/handleAction'

export const toggleColor = () => ({ type: 'TOGGLE_COLOR' })

handleAction('TOGGLE_COLOR', (state, action) => ({
  color: state.color === 'red' ? 'blue' : 'red'
}))

const initialState = {
  color: 'red'
}

export default createReducer(initialState)
