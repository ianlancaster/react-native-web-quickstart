// @flow

import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'

// screens identified by the router
import HelloWorld from '../Containers/HelloWorld'
import HelloWorldAsync from '../Containers/HelloWorldAsync'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene
            key='drawerChildrenWrapper'
            navigationBarStyle={Styles.navBar}
            titleStyle={Styles.title}
            leftButtonIconStyle={Styles.leftButton}
            rightButtonTextStyle={Styles.rightButton}
          >
            <Scene
              initial
              key='helloWorld'
              component={HelloWorld}
              title='Hello World!'
              renderRightButton={NavItems.hamburgerButton}
              renderBackButton={() => false}
              direction='leftToRight'
            />
            <Scene
              key='HelloWorldAsync'
              component={HelloWorldAsync}
              title='Hello World! | Async'
              renderRightButton={NavItems.hamburgerButton}
              renderBackButton={() => false}
              direction='leftToRight'
            />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
