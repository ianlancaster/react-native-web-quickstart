import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import navigationDrawer from '../../Modules/NavigationDrawer/NavigationDrawer.modules'

export const reducers = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    navigationDrawer,
    router,
    ...asyncReducers })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(reducers(store.asyncReducers))
}

export default reducers
