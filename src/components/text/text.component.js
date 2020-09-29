import React from 'react'
import { Text } from 'react-native'

import styles from './text.style'
import { Fonts } from '../../styles'

const MyText = ({
  bold,
  color,
  style,
  children,
  size = Fonts.Medium * 0.9
}) => {
  
  return (
    <Text style={[styles.container(bold, size, color), style]}>{children}</Text>
  )
}

export default MyText
