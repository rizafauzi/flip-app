import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { App } from './app'

const RootStack = createStackNavigator()

const FlipNavigation = () => {

  // useEffect(() => {
  //   setTimeout(() => {
  //     SplashScreen.hide()
  //   }, 1000)
  // }, [])

  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name='App' component={App} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default FlipNavigation
