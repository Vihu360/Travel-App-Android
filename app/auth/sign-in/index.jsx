import { View, Text, SafeAreaView, StyleSheet, StatusBar, Image } from 'react-native';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function signIn() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle="dark-content" backgroundColor="#f0f8ff" />
			<View style={{ padding: 30 }}>
				{/* <View style={{ width: "100%", height: "100%", backgroundColor: Colors.white }}>

				</View> */}
			</View>

			<Image
				source={require('../../../assets/images/pic3.png')}
				style={{
					width: '100%',
					height: 560,
					resizeMode: "contain",
					position: 'absolute',
					top: 394,
					right:32
				}}
			/>

			<View style={styles.box}>

						<Text>Hello</Text>

				</View>

		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#6092A6', // Light blue background color
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	  box: {
    position: 'absolute',
    width: '100%',
    height: '50%',
    backgroundColor: Colors.white,
    borderBottomRightRadius: 120,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 1, // Shadow opacity
    shadowRadius: 15, // Shadow radius
    elevation: 8, // Elevation for Android
  },
});
