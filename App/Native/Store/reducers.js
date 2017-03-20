import { combineReducers } from 'redux'
import helloWorld from '../../Modules/HelloWorld.modules'
import helloWorldAsync from '../../Modules/HelloWorldAsync.modules'

export default combineReducers({
  helloWorld,
  helloWorldAsync
})
