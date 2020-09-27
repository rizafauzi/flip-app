import { Alert } from 'react-native'

const CustomAlert = (message, status) => {
  Alert.alert(
    status ? 'Congratulation' : 'Something Wrong',
    `${message}`,
    [{ text: 'OK', onPress: () => {} }],
    {
      cancelable: false,
    }
  )
}

export default CustomAlert
