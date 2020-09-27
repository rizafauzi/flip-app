import React from 'react'
import { Colors } from '../../styles'
import styles from './container.style'
import { View, StatusBar } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Container = ({
  children,
  width = '100%',
  height = '100%',
  backgroundColor,
  fullscreen = false,
  needSafeArea = true,
  lightBarStyle = true,
  statusbarColor = Colors.Orange,
}) => {
  const insets = useSafeAreaInsets()
  return (
    <View style={{ ...styles.container(width, height, backgroundColor) }}>
      <View style={{ height: needSafeArea ? insets.top : 0, backgroundColor: statusbarColor }}>
        <StatusBar
          hidden={fullscreen}
          backgroundColor={statusbarColor}
          barStyle={lightBarStyle ? 'light-content' : 'dark-content'}
        />
      </View>

      {children}
    </View>
  )
}

export default Container
