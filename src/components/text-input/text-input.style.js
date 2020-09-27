import { StyleSheet } from 'react-native'

import { Lookups } from '../../utils'
import { Fonts, Colors } from '../../styles'

export default StyleSheet.create({
  container: (color = Colors.Orange) => ({
    color: color,
    fontFamily: 'ProductSans-Regular',
  }),
  ttIcon: {
    fontSize: 35,
    color: Colors.Green,
  },
})
