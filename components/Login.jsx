import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';

export default function Login() {
	return (
		<View
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}
		>
			<Image
				source={require('../assets/images/login.jpg')}
				style={{
					width: '100%',
					height: 400
				}}
			/>

			<View style={styles.container}>
			<Text style={{
				fontSize: 18,
					fontFamily: "outfit-semibold",
				marginTop: 20
			}}>Plan Your Epic Moments !</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.white,
		marginTop: -50,
		height: "100%",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,



}


})
