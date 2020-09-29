import { StyleSheet } from 'react-native'
import { Colors, Fonts, Spacing } from '../../styles'
import scale from '../../utils/lookups/scale'

export default StyleSheet.create({
  scrollView: {
    padding: 10,
    backgroundColor: Colors.LightGray,
  },
  subHeader: {
    padding: 20,
    width: '100%',
    display: 'flex',
    borderBottomWidth: 2,
    flexDirection: 'row',
    backgroundColor: Colors.White,
    justifyContent: 'space-between',
    borderBottomColor: Colors.SoftGray
  },
  baseModal: {
    padding: 15,
    width: '80%',
    borderRadius: 5,
    backgroundColor: Colors.White,
  },
  button: {
    padding: 10,
    width: '100%',
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
	radioButton: {
    fontSize: 20,
    marginRight: 10,
    color: Colors.Orange
  }
})
