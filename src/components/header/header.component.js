import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Text, View, Dimensions, TouchableOpacity } from 'react-native'

import styles from './header.style'
import TextInput from '../text-input'
import { Lookups } from '../../utils'

const { width } = Dimensions.get('window')

const MyHeader = ({
  value,
  search,
  backTo,
  onFocus,
  onPress,
  onSearch,
  navigation,
  customRight,
  onChangeText,
  title = 'HEADER',
  disable_navigate,
  disableCustomRight,
}) => {
  const height = Lookups.Custom.headerHeight
  const back = backTo !== undefined ? backTo : () => navigation.goBack(null)

  const searchComp = (height, onChangeText, onSearch, value) => {
    return (
      <View style={styles.searchCont(height)}>
        <View style={styles.textInputCont}>
          <TouchableOpacity onPress={onSearch} style={styles.iconSearchCont}>
            <AntDesign name='search1' style={styles.iconSearch} />
          </TouchableOpacity>
          <TextInput
            value={value}
            onFocus={onFocus}
            placeholder='Search'
            style={styles.textInput}
            onChangeText={onChangeText}
          />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer(height)}>
        <TouchableOpacity
          onPress={back}
          disabled={disable_navigate}
          style={styles.backCont(height)}
        >
          {!disable_navigate && <AntDesign name='arrowleft' style={styles.iconBack} />}
        </TouchableOpacity>
        <View style={styles.titleCont(height, width)}>
          <Text style={styles.textHeader}>{title}</Text>
        </View>
        <TouchableOpacity
          onPress={onPress}
          style={styles.right(height)}
          disabled={disableCustomRight}
        >
          {customRight}
        </TouchableOpacity>
      </View>
      {search && searchComp(height, onChangeText, onSearch, value)}
    </View>
  )
}

export default MyHeader
