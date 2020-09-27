import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {
  TransactionList,
  TransactionDetail,
} from '../../containers'

const AppStack = createStackNavigator()

const App = () => {
  return (
    <AppStack.Navigator initialRouteName='TransactionList' headerMode='none'>
      <AppStack.Screen name='TransactionList' component={TransactionList} />
      <AppStack.Screen name='TransactionDetail' component={TransactionDetail} />
    </AppStack.Navigator>
  )
}

export default App
