import fetch from '../../Utilities/isomorphic-fetch'
import { handleAction, createReducer } from '../../Utilities/handleAction'

export const asyncToggleColor = () => {
  return dispatch => {
    dispatch({ type : 'START_REQUEST' })
    return fetch('http://192.168.0.17:3001/api/v1/helloWorldAsync')
      .then(res => res.json())
      .then(json => dispatch({ type: 'ASYNC_TOGGLE_COLOR' }))
      .catch(err => console.log('Error: ', err))
  }
}

handleAction('START_REQUEST', (state, action) => ({
  loading: true
}))

handleAction('ASYNC_TOGGLE_COLOR', (state, action) => ({
  color: state.color === 'red' ? 'blue' : 'red',
  loading: false
}))

const initialState = {
  color: 'red',
  loading: false
}

export default createReducer(initialState)
