// @flow

import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './NavItems.styles'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors, metrics } from '../../Themes'

const openDrawer = () => {
  NavigationActions.refresh({
    key: 'drawer',
    open: true
  })
}

export default {
  backButton () {
    return (
      <TouchableOpacity onPress={NavigationActions.pop}>
        <Icon name='angle-left'
          size={metrics.icons.large}
          color={colors.snow}
          style={styles.backButton}
        />
      </TouchableOpacity>
    )
  },

  hamburgerButton () {
    return (
      <TouchableOpacity onPress={openDrawer}>
        <Icon name='bars'
          size={metrics.icons.medium}
          color={colors.snow}
          style={styles.hamburgerButton}
        />
      </TouchableOpacity>
    )
  },

  searchButton (callback: Function) {
    return (
      <TouchableOpacity onPress={callback}>
        <Icon name='search'
          size={metrics.icons.small}
          color={colors.snow}
          style={styles.searchButton}
        />
      </TouchableOpacity>
    )
  }

}
