import { injectReducer } from '../../Store/reducers'

export default (store) => ({
  path: 'hello-world',
  getComponent (nextState, next) {
    require.ensure([
      './helloWorld.container',
      '../../../Modules/helloWorld'
    ], (require) => {
      const helloWorld = require('./helloWorld.container').default
      const helloWorldReducer = require('../../../Modules/helloWorld').default

      injectReducer(store, {
        key: 'helloWorld',
        reducer: helloWorldReducer
      })

      next(null, helloWorld)
    })
  }
})
