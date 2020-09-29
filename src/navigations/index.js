import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { App } from './app'

const RootStack = createStackNavigator()

const FlipNavigation = () => {

  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name='App' component={App} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default FlipNavigation
