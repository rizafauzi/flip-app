import { StyleSheet } from 'react-native'
import { Colors, Fonts, Spacing } from '../../styles'

export default StyleSheet.create({
	container: {
    width: '100%',
    borderRadius: 7,
    display: 'flex',
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: Colors.White,
  },
  statusTag: (status) => ({
    width: '2%',
    height: '100%',
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    backgroundColor: status ? Colors.Green : Colors.Orange
  }),
  content: {
    padding: 10,
    width: '63%',
    height: '100%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  arrowRight: {
    fontSize: 16, 
    marginHorizontal: 5,
    color: Colors.Black
  },
  statusContent: {
    width: '35%',
    padding: 15,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  status: (status) => ({
    borderWidth: 2,
    display: 'flex',
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: status ? Colors.Green : Colors.Orange,
    backgroundColor: status ? Colors.Green : Colors.White
  }),
	searchCont: (status) => ({
    width: '100%',
		backgroundColor: Colors.Orange,
		paddingBottom: Spacing.DoublePadding,
		height: height - Spacing.TriplePadding,
		paddingHorizontal: Spacing.QuadruplePadding
	})
})
