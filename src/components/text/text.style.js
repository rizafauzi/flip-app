import { StyleSheet } from 'react-native'
import { Colors } from '../../styles'

export default StyleSheet.create({
  container: (bold, size, color = Colors.Black) => ({
    color: color,
    fontSize: size,
    fontFamily: bold ? 'ProductSans-Bold' : 'ProductSans-Regular',
  }),
})
