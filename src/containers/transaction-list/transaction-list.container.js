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
  MyText, 
  Header,
  Container, 
  SearchField,
  SkeletonLoading, 
  TransactionCard, 
} from '../../components'
import { Colors, Fonts } from '../../styles'

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

  const [dataState, setDataState] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [fetchLoading, setFetchLoading] = useState(true)
  const [sortValue, setSortValue] = useState({
    id: 0,
    name: 'URUTKAN'
  }) 

  const onRefetch = () => {
    APIKit.get('/frontend-test')
    .then(({ data }) => {
      setDataState(mappedData(data))
      setFetchLoading(false)
    })
    .catch((err) => {
      setFetchLoading(false)
      console.log(err)
    })
  }

  useEffect(() => {
    onRefetch()
  }, [])

  const mappedData = (data) => {
    const datas = []
    for (const [_, value] of Object.entries(data)) {
      datas.push(value)
    }
    return datas
  }

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

  const onSortAction = () => {
    setShowModal(true)
  }

  const filteredData = () => {
    return dataState.filter(dt => dt.name.includes(searchValue))
  }

  return (
    <Container>
      {modal()}
      <Header title={'Transaksi'} disable_navigate />
      <ScrollView 
        refreshControl={
          <RefreshControl
            refreshing={fetchLoading}
            onRefresh={onRefetch}
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
          onSortAction={onSortAction}
          onChangeText={setSearchValue} 
        />
        {fetchLoading ? 
          <SkeletonLoading />
          :
          dataState.map((dt, index) => 
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