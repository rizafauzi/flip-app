import React from 'react'
import { MyText } from '../../components'
import { Dimensions, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import styles from './transaction-card.style'
import { Colors, Fonts, Spacing } from '../../styles'
import { Lookups } from '../../utils'

const TransactionCard = ({ data }) => {

  const createdDate = new Date(
    data.created_at.split(' ').length > 0 ? 
    data.created_at.split(' ')[0] : 
    null 
  ).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const statusTrx = data.status === 'SUCCESS' ? true : false
  const statusDescription = data.status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'
  
  return (
    <View style={styles.container} >
      <View style={styles.statusTag(statusTrx)} >
      </View>
      <View style={styles.content}>
        <View style={styles.header} >
          <MyText bold>{data.sender_bank.toUpperCase()}</MyText>
          <FontAwesome5 name='arrow-right' style={styles.arrowRight} />
          <MyText bold>{data.beneficiary_bank.toUpperCase()}</MyText>
        </View>
        <MyText>{data.beneficiary_name.toUpperCase()}</MyText>
        <MyText>{
          `Rp ${Lookups.Convert.formatMoney(data.amount)} • ${createdDate} `}
        </MyText>
      </View>
      <View style={styles.statusContent} >
        <View style={styles.status(statusTrx)}>
          <MyText bold color={statusTrx ? Colors.White : Colors.Black} >{statusDescription}</MyText>
        </View>
      </View>
    </View>
  )
}



export default TransactionCard
