// @flow

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from '../RootContainer'
import createStore from '../../../Store/configureStore'

const store = createStore()

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

export default App
