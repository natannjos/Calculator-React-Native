import React from 'react'
import { 
	Text,
	Dimensions,
	StyleSheet,
	TouchableHighlight
 } from 'react-native'

const styles = StyleSheet.create({
	button:{
		fontSize: 40,
		height: Dimensions.get('screen').width / 4,
		width: Dimensions.get('screen').width / 4,
		backgroundColor: '#f0f0f0',
		borderWidth: 1,
		borderColor: "#888",
		textAlign: 'center',
		textAlignVertical: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		flexGrow:1,
	},
	operationButton: {
		color: "#fff",
		backgroundColor: "#fa8231"
	},
	doubleButton: {
		width: (Dimensions.get('window').width / 4) * 2
	},
	trippleButton: {
		width: (Dimensions.get('window').width / 4) * 3
	}
})

export default props => {

	const stylesButtons = [styles.button]
	
	if(props.operation) stylesButtons.push(styles.operationButton)
		
	if(props.double) stylesButtons.push(styles.doubleButton)

	if(props.tripple) stylesButtons.push(styles.trippleButton)


		return (
				<TouchableHighlight onPress={() => props.onClick(props.label)}>

					<Text style={stylesButtons}>
						{props.label}
					</Text>

				</TouchableHighlight>
		)
}