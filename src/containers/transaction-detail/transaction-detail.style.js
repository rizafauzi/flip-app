import { StyleSheet } from 'react-native'
import { Colors, Fonts, Spacing } from '../../styles'
import scale from '../../utils/lookups/scale'

export default StyleSheet.create({
  header: {
    padding: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    backgroundColor: Colors.White,
    borderBottomColor: Colors.LightGray,
  },
  subHeader: {
    padding: 20,
    width: '100%',
    display: 'flex',
    borderBottomWidth: 2,
    flexDirection: 'row',
    backgroundColor: Colors.White,
    justifyContent: 'space-between',
    borderBottomColor: Colors.SoftGray,
  },
  flexRow: {
    display: 'flex',
    marginTop: 15,
    flexDirection: 'row'
  },
	container: {
    padding: 20,
    width: '100%',
    backgroundColor: Colors.White
  },
  headerContent: {
    display: 'flex',
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  arrowRight: {
    fontSize: 14, 
    marginHorizontal: 7,
    color: Colors.Black
  },
  copyIcon: {
    fontSize: 16, 
    marginLeft: 10,
    color: Colors.Orange
  }
})
