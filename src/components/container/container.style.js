import { StyleSheet } from 'react-native'
import { Colors } from '../../styles'

export default StyleSheet.create({
  container: (width = '100%', height = '100%', backgroundColor = Colors.White) => ({
    width: width,
    height: height,
    backgroundColor: backgroundColor,
  }),
})
