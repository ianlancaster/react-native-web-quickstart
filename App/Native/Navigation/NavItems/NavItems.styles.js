// @flow

import { StyleSheet } from 'react-native'
import { metrics, colors } from '../../Themes/'

const navButton = {
  backgroundColor: colors.transparent,
  justifyContent: 'center'
}

export default StyleSheet.create({
  backButton: {
    ...navButton,
    marginTop: -12,
    marginLeft: 0
  },
  hamburgerButton: {
    ...navButton,
    marginTop: -4,
    marginRight: 0
  },
  searchButton: {
    ...navButton,
    marginTop: metrics.section,
    marginRight: metrics.baseMargin,
    alignItems: 'center'
  }
})
