
import React  from 'react'
import { View, Dimensions } from 'react-native'
import { MyText, Image } from '../../components'

import { Images } from '../../../assets'
import { Colors, Fonts } from '../../styles'

const { height, width } = Dimensions.get('window')

const NotFoundPage = () => {
  return (
    <View style={{ height: height / 1.5, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={Images.error} style={{
        zIndex: 1,
        width: width,
        marginBottom: 15,
        height: height * 0.4,
        resizeMode: 'contain'
      }} />
      <MyText bold color={Colors.Gray} size={Fonts.Large} >Ups! Telah terjadi sesuatu</MyText>
      <MyText color={Colors.Gray} size={Fonts.Large} >Cobalah beberapa saat lagi</MyText>
    </View>
  )
}

export default NotFoundPage