import React from 'react'
import { Dimensions, View, TouchableOpacity } from 'react-native'
import { MyText, TextInput } from '../../components'
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import styles from './search-field.style'
import { Colors, Fonts, Spacing } from '../../styles'
import { Lookups } from '../../utils'

const SearchField = ({ value='', onChangeText, sortValue, onSortAction }) => {
  
  return (
    <View style={styles.container} >
      <View style={styles.iconContainer} >
        <SimpleLineIcons name="magnifier" style={styles.searchIcon} />
        
      </View>
      <View style={styles.content}>
        <TextInput
          value={value}
          // style={styles.textInput}
          placeholder={'Cari nama, bank, atau nominal'}
          onChangeText={(text) => onChangeText(text)}
        />
      </View>
      <TouchableOpacity 
        sortValue={sortValue.name}
        onPress={onSortAction}
        style={styles.statusContent} 
      >
        <MyText bold size={Fonts.Small} color={Colors.Orange} >{sortValue.name}</MyText>
        <Feather name="chevron-down" style={styles.arrowIcon} />
      </TouchableOpacity>
    </View>
  )
}

export default SearchField
