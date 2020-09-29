import { StyleSheet } from 'react-native'
import { Colors, Fonts, Spacing } from '../../styles'

export default StyleSheet.create({
	container: {},
	searchCont: (height) => ({
		width: '100%',
		backgroundColor: Colors.Orange,
		paddingBottom: Spacing.DoublePadding,
		height: height - Spacing.TriplePadding,
		paddingHorizontal: Spacing.QuadruplePadding
	}),
	textInputCont: {
		width: '100%',
		height: '100%',
		borderRadius: 50,
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: Colors.White
	},
	iconSearchCont: {
		width: '15%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	iconSearch: { fontSize: 20, color: Colors.Gray },
	textInput: {
		width: '85%',
		height: '150%',
		fontSize: Fonts.Small,
		fontFamily: 'Montserrat-Medium'
	},
	headerContainer: (height) => ({
		minHeight: height,
		flexDirection: 'row',
		backgroundColor: Colors.Orange
	}),
	backCont: (height) => ({
		width: height,
		alignItems: 'center',
		justifyContent: 'center'
	}),
	iconBack: { fontSize: 20, color: Colors.White },
	titleCont: (height, width) => ({
		height: height,
		alignItems: 'center',
		justifyContent: 'center',
		width: width - 2 * height
	}),
	textHeader: {
		color: Colors.White,
		fontSize: Fonts.ExtraLarge,
		fontFamily: 'ProductSans-Bold'
	},
	right: (height) => ({
		width: height,
		height: height,
		alignItems: 'center',
		justifyContent: 'center'
	})
})
