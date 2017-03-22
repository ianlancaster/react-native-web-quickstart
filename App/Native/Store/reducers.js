import { combineReducers } from 'redux'
import helloWorld from '../../Modules/HelloWorld/HelloWorld.modules'
import helloWorldAsync from '../../Modules/HelloWorldAsync/HelloWorldAsync.modules'

export default combineReducers({
  helloWorld,
  helloWorldAsync
})
