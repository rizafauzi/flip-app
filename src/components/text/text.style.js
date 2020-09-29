import { StyleSheet } from 'react-native'
import { Colors } from '../../styles'

export default StyleSheet.create({
  container: (bold, size, color = Colors.Black) => ({
    color: color,
    marginBottom: 1,
    marginTop: 1,
    fontSize: size,
    fontFamily: bold ? 'ProductSans-Bold' : 'ProductSans-Regular',
  }),
})
