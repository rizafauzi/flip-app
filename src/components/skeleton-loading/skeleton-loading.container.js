import React from 'react'
import {
  View,
} from 'react-native'
import SkeletonContent from 'react-native-skeleton-content-nonexpo'

const SkeletonLoading = () => {
  return (
    <View>
      <SkeletonContent
        containerStyle={{ flex: 1, width: '100%' }}
        isLoading={true}
        layout={Array.apply(null, Array(10)).map((_, index) => {
          return {
            key: index,
            height: 80,
            width: '100%',
            borderRadius: 10,
            marginBottom: '3%',
          }
        })}
      />
    </View>
  )
}

export default SkeletonLoading