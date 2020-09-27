import React, { useState, useEffect } from 'react'
import {
  View,
  ScrollView,
  Dimensions,
  BackHandler,
  RefreshControl,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'

import APIKit from '../../api'
import { 
  Modal, 
  MyText, 
  Header,
  Container, 
  SearchField,
  SkeletonLoading, 
  TransactionCard, 
} from '../../components'
import { Colors, Fonts } from '../../styles'


const TransactionList = () => {
  const sortingChoice = [
    'URUTKAN',
    'Nama A-Z',
    'Nama Z-A',
    'Tanggal Terbaru',
    'Tanggal Terlama',
  ]

  const [searchValue, setSearchValue] = useState('')
  const [fetchLoading, setFetchLoading] = useState(true)
  const [sortValue, setSortValue] = useState('URUTKAN') 
  const [showModal, setShowModal] = useState(true)
  const [dataState, setDataState] = useState([])

  const mappedData = (data) => {
    const datas = []
    for (const [_, value] of Object.entries(data)) {
      datas.push(value)
    }
    return datas
  }

  useEffect(() => {
    APIKit.get('/frontend-test')
    .then(({ data }) => {
      setDataState(mappedData(data))
      setFetchLoading(false)
    })
    .catch((err) => {
      setMyLoading(false)
      console.log(err)
    })
  }, [])


  const modal = () => {
    return (
      <Modal 
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      >
        <View style={{
          padding: 15,
          width: '80%',
          borderRadius: 5,
          backgroundColor: Colors.White,
        }}>
          {sortingChoice.map((dt, index) => 
            <TouchableOpacity key={index} 
              style={{
                padding: 10,
                width: '100%',
                marginBottom: 5,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() => {
                setSortValue(dt)
                setShowModal(false)
              }}
            >
              <Fontisto 
                style={{
                  fontSize: 20,
                  color: Colors.Orange,
                  marginRight: 10
                }}
                name={sortValue === dt ? 
                  'radio-btn-active' : 
                  'radio-btn-passive' }
                />
              <MyText>{dt}</MyText>
            </TouchableOpacity>
            
          )}
        </View>
      </Modal>
    )
  }

  const onSortAction = () => {
    setShowModal(true)
  }

  const onRefreshPage = () => {
    setFetchLoading(true)
    APIKit.get('/frontend-test')
    .then(data => {
      setFetchLoading(false)
    })
    .catch((err) => {
      setMyLoading(false)
      console.log(err)
    })
  }

  return (
    <Container>
      {modal()}
      <Header title={'Transaksi'} disable_navigate />
      <ScrollView 
        refreshControl={
          <RefreshControl
            refreshing={fetchLoading}
            onRefresh={() => onRefreshPage()}
          />
        }
        style={{
          padding: 10,
          backgroundColor: Colors.LightGray,
        }}
      >
        <SearchField 
          value={searchValue} 
          sortValue={sortValue}
          onSortAction={() => onSortAction()}
          onChangeText={setSearchValue} 
        />
        {fetchLoading ? 
          <SkeletonLoading />
          :
          dataState.map((dt, index) => 
          <TransactionCard key={index} data={dt} />)
        }
      </ScrollView>
    </Container>
  )
}

export default TransactionList