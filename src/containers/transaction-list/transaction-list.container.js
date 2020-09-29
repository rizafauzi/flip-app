import React, { useState, useEffect, useContext, useMemo } from 'react'
import {
  View,
  ScrollView,
  Dimensions,
  BackHandler,
  RefreshControl,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback
} from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'


import APIKit from '../../api'
import { 
  Modal, 
  Image,
  MyText, 
  Header,
  Container, 
  SearchField,
  NotFoundPage,
  SkeletonLoading, 
  TransactionCard, 
} from '../../components'
import { Colors, Fonts } from '../../styles'

import { Images } from '../../../assets'
import styles from './transaction-list.style'
import { TransactionContext } from '../../contexts'

const sortingChoice = [{
  id: 0,
  name: 'URUTKAN'
}, {
  id: 1,
  name: 'Nama A-Z'
},
{
  id: 2,
  name: 'Nama Z-A'
},
{
  id: 3,
  name: 'Tanggal Terbaru'
},
{
  id: 4,
  name: 'Tanggal Terlama'
}]

const TransactionList = ({ navigation }) => {
  const { setTransactionDetail } = useContext(TransactionContext) 

  const [error, setError] = useState(false)
  const [dataState, setDataState] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [fetchLoading, setFetchLoading] = useState(true)
  const [sortValue, setSortValue] = useState({
    id: 0,
    name: 'URUTKAN'
  }) 

  useEffect(() => {
    onRefetch()
  }, [])

  const onRefetch = () => {
    setError(false)
    APIKit.get('/frontend-test')
    .then(({ data }) => {
      setDataState(mappedData(data))
      setFetchLoading(false)
    })
    .catch((err) => {
      setError(true)
      setFetchLoading(false)
      console.log(err)
    })
  }

  const onSortAction = () => {
    setShowModal(true)
  }

  const mappedData = (data) => {
    const datas = []
    for (const [_, value] of Object.entries(data)) {
      datas.push(value)
    }
    return datas
  }

  const sortedData = () => {
    switch(sortValue.id) {
      case 0:
        return dataState
      case 1:
        return dataState.sort((a, b) => {
          const curName = a.beneficiary_name.toUpperCase(); 
          const nextName = b.beneficiary_name.toUpperCase();
          return curName < nextName ? -1 : 
             curName > nextName ? 1 : 0
        })
      case 2:
        return dataState.sort((a, b) => {
          const curName = a.beneficiary_name.toUpperCase(); 
          const nextName = b.beneficiary_name.toUpperCase();
          return curName < nextName ? 1 : 
             curName > nextName ? -1 : 0
        })
      case 3:
        return dataState.sort((a, b) => 
          new Date(a.created_at.split(' ')[0]) > 
          new Date(b.created_at.split(' ')[0]) ? 1 : -1 )
      case 4:
        return dataState.sort((a, b) => 
          new Date(b.created_at.split(' ')[0]) >
          new Date(a.created_at.split(' ')[0]) ? 1 : -1 )
      default:
        return dataState
    }
  }

  const filteredData = () => {
    return sortedData().filter(dt => 
      dt.sender_bank.toLowerCase().includes(searchValue.toLowerCase()) ||
      dt.beneficiary_name.toLowerCase().includes(searchValue.toLowerCase()) ||
      dt.beneficiary_bank.toLowerCase().includes(searchValue.toLowerCase()) ||
      dt.amount.toString().includes(searchValue.toLowerCase())
    )
  }

  const modal = () => {
    return (
      <Modal 
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      >
        <View style={styles.baseModal}>
          {sortingChoice.map((dt, index) => 
            <TouchableOpacity key={index} 
              style={styles.button}
              onPress={() => {
                setSortValue(dt)
                setShowModal(false)
              }}
            >
              <Fontisto 
                style={styles.radioButton}
                name={sortValue.id === dt.id ? 
                  'radio-btn-active' : 
                  'radio-btn-passive' }
                />
              <MyText>{dt.name}</MyText>
            </TouchableOpacity>
          )}
        </View>
      </Modal>
    )
  }

  return (
    <Container>
      {modal()}
      <Header title={'Transaksi'} disable_navigate />
      <ScrollView 
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={fetchLoading}
            onRefresh={onRefetch}
          />
        }
      >
        <SearchField 
          value={searchValue} 
          sortValue={sortValue}
          onSortAction={onSortAction}
          onChangeText={setSearchValue} 
        />
        {fetchLoading ? 
          <SkeletonLoading />
          :
          error ?
          <NotFoundPage />
          :
          filteredData().map((dt, index) => 
            <TouchableWithoutFeedback
              key={index}
              onPress={() => {
                setTransactionDetail(dt)
                navigation.navigate('TransactionDetail')
              }}
            >
              <View>
                <TransactionCard data={dt} />
              </View>
            </TouchableWithoutFeedback>
          )
        }
      </ScrollView>
    </Container>
  )
}

export default TransactionList