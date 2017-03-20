import { injectReducer } from '../../Store/reducers'

export default (store) => ({
  path: 'hello-world-async',
  getComponent (nextState, next) {
    require.ensure([
      './helloWorldAsync.container',
      '../../../Modules/HelloWorldAsync.modules'
    ], (require) => {
      const helloWorldAsync = require('./helloWorldAsync.container').default
      const helloWorldAsyncReducer = require('../../../Modules/HelloWorldAsync.modules').default

      injectReducer(store, {
        key: 'helloWorldAsync',
        reducer: helloWorldAsyncReducer
      })

      next(null, helloWorldAsync)
    })
  }
})
