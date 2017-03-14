import { combineReducers } from 'redux'
import helloWorld from '../Modules/helloWorld'
import helloWorldAsync from '../Modules/helloWorldAsync'

export default combineReducers({
  helloWorld,
  helloWorldAsync
})
