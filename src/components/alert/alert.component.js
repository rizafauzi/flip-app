import { Alert } from 'react-native'

const CustomAlert = (message, status) => {
  Alert.alert(
    status ? 'Selamat!' : 'Ada sesuatu yang salah',
    `${message}`,
    [{ text: 'OK', onPress: () => {} }],
    {
      cancelable: false,
    }
  )
}

export default CustomAlert
