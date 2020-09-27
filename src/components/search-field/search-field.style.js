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
  iconContainer: {
    width: '8%',
    display: 'flex',
    alignItems: 'center',
    borderTopLeftRadius: 7,
    justifyContent: 'center',
    borderBottomLeftRadius: 7,
  },
  searchIcon: {
    fontSize: 20, 
    marginHorizontal: 5,
    color: Colors.Grey
  },
  arrowIcon: {
    fontSize: 20, 
    marginHorizontal: 5,
    color: Colors.Orange
  },
  content: {
    width: '62%',
    height: '100%',
  },
  statusContent: {
    width: '30%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
