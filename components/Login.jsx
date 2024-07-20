import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

export default function Login() {

	const router = useRouter();


	const handleFirstPress = () => {
		alert('First button pressed!');
	};

	const handleSecondPress = () => {
		router.push('auth/sign-in');
	};

	return (
		<View
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}
		>
			{/* The status bar */}

			<SafeAreaView style={styles.statusbar}>
				<StatusBar
					barStyle="dark-content" // Change this to "dark-content" if needed
					backgroundColor="#87CEEB"
					hidden={false} // Ensures the status bar is visible
				/>
			</SafeAreaView>

			<Image
				source={require('../assets/images/login.jpg')}
				style={{
					width: '100%',
					height: 560
				}}
			/>

			<View style={styles.container}>
				<Text
					style={{
						fontSize: 17,
						fontFamily: 'outfit',
						marginTop: 20,
						textAlign: 'center',
						marginLeft: 44,
						marginRight: 44,
						lineHeight: 23,
						marginBottom: 8
					}}
				>
					The world is a book, and we are here to turn its most beautiful pages for{' '}
					<Text style={{ fontFamily: 'outfit-semibold' }}>YOU ❤️</Text>
				</Text>

				{/* Buttons */}

				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.button} onPress={handleFirstPress}>
						<Text style={styles.buttonText}>sign Up</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={handleSecondPress}>
						<Text style={styles.buttonText}>sign In</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text
							style={{
								fontFamily: 'outfit-semibold',
								marginTop: 15,
								textDecorationLine: 'underline',
								fontSize: 16
							}}
						>
							skip
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.white,
		marginTop: -50,
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		borderTopLeftRadius: 45,
		borderTopRightRadius: 45
	},
	statusbar: {
		flex: 1,
		backgroundColor: '#E0FFFF'
	},

	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	button: {
		backgroundColor: Colors.black,
		padding: 12,
		margin: 10,
		borderRadius: 18,
		width: 275,
		display: 'flex',
		alignItems: 'center'
	},
	buttonText: {
		color: Colors.white,
		fontSize: 18
	}
});
