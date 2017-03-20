import Iphone from 'globals/Iphone'

export const createRoutes = (store) => {
  const routes = {
    path: '/',
    component: Iphone,
    indexRoute: { onEnter: (nextState, replace) => replace('/hello-world') },
    getChildRoutes (location, next) {
      require.ensure([], (require) => {
        next(null, [
          require('./HelloWorld').default
        ])
      })
    }
  }

  return routes
}

export default createRoutes
