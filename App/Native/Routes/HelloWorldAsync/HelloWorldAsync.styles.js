import { StyleSheet } from 'react-native'
import { fonts } from '../../Themes'

export const classes = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center'
  },
  helloWorld: {
    textAlign: 'center',
    fontFamily: fonts.type.base,
    fontSize: fonts.size.h5
  }
})
