import React, { useState, useEffect, useContext, useMemo } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {
  TransactionList,
  TransactionDetail,
} from '../../containers'

import { TransactionContext } from '../../contexts'

const AppStack = createStackNavigator()

const App = () => {
  const [transactionDetail, setTransactionDetail] = useState(null)

  return (
    <TransactionContext.Provider value={{ transactionDetail, setTransactionDetail }} >
      <AppStack.Navigator initialRouteName='TransactionList' headerMode='none'>
        <AppStack.Screen name='TransactionList' component={TransactionList} />
        <AppStack.Screen name='TransactionDetail' component={TransactionDetail} />
      </AppStack.Navigator>
    </TransactionContext.Provider>
  )
}

export default App
