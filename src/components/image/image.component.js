import React from 'react'
import { Image } from 'react-native'

const MyImage = ({ source, style, onError, tintColor }) => {
  return (
    <Image
      tintColor={tintColor}
      onError={onError}
      source={source}
      style={style}
    />
  )
}

export default MyImage
