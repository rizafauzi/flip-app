import React, { useState, useEffect, useContext } from 'react'
import {
  View,
  Dimensions,
  BackHandler,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native'
import Clipboard from '@react-native-community/clipboard'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { 
  Modal, 
  Alert,
  MyText, 
  Header,
  Container, 
  SearchField,
  SkeletonLoading, 
  TransactionCard, 
} from '../../components'
import { Lookups } from '../../utils'
import { Colors, Fonts } from '../../styles'
import styles from './transaction-detail.style'
import { TransactionContext } from '../../contexts'

const TransactionDetail = ({ navigation }) => {
  const { transactionDetail } = useContext(TransactionContext) 
  
  const [showDetail, setShowDetail] = useState(true)

  const { 
    id, 
    amount, 
    remark,
    created_at,
    unique_code,
    sender_bank, 
    account_number,
    beneficiary_name, 
    beneficiary_bank, 
  } = transactionDetail

  const createdDate = new Date(
    created_at.split(' ').length > 0 ? 
    created_at.split(' ')[0] : 
    null 
  ).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const copyToClipboard = () => {
    Clipboard.setString(id)
    Alert('ID Transaksi telah disalin ke clipboard', true)
  }

  const detailRow = (rowOne, rowTwo, rowThree, rowFour) => {
    return (
      <View style={styles.flexRow}>
        <View style={{ width: '60%' }}>
          <MyText bold>{rowOne}</MyText>
          <MyText>{rowTwo}</MyText>
        </View>
        <View style={{ width: '40%' }}>
          <MyText bold>{rowThree}</MyText>
          <MyText>{rowFour}</MyText>
        </View>
      </View>
    )
  }

  return (
    <Container>
      <Header title={'Detail Transaksi'} navigation={navigation} />
      <ScrollView 
        style={{
          paddingTop: 20,
          backgroundColor: Colors.LightGray,
        }}
      >
        <View style={styles.header}>
          <MyText bold>{`ID TRANSAKSI: #${id}`}</MyText>
          <TouchableOpacity
            onPress={copyToClipboard}
            style={{ width: '15%', height: '100%' }}
          >
            <MaterialCommunityIcons name="content-copy" style={styles.copyIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.subHeader}>
          <MyText bold>DETAIL TRANSAKSI</MyText>
          <TouchableWithoutFeedback onPress={() => setShowDetail(!showDetail)}>
            <View style={{ paddingHorizontal: 10 }}>
              <MyText color={Colors.Orange}>
                {showDetail ? 'Tutup' : 'Tampilkan'}
              </MyText>
            </View>
          </TouchableWithoutFeedback>
        </View>

        {showDetail && 
          <View style={styles.container}>
            <View style={styles.headerContent} >
              <MyText bold>{sender_bank.toUpperCase()}</MyText>
              <FontAwesome5 name='arrow-right' style={styles.arrowRight} />
              <MyText bold>{beneficiary_bank.toUpperCase()}</MyText>
            </View>

            {detailRow(beneficiary_name.toUpperCase(), account_number, 'NOMINAL', `Rp. ${ Lookups.Convert.formatMoney(amount) }`)}
            {detailRow('BERITA TRANSFER', remark, 'KODE UNIK', unique_code)}
            {detailRow('WAKTU DIBUAT', createdDate)}
          </View>
        }
        
      </ScrollView>
    </Container>
  )
}

export default TransactionDetail