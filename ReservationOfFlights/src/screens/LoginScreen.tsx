import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import {Input} from '../components/Input';
import {ButtonPrimary} from '../components/ButtonPrimary';
import {useNavigation} from '@react-navigation/native';

export const LoginScreen = () => {
  const {navigate} = useNavigation();
  const handleRegisterPress = () => {
    navigate('Register' as never);
  };

  const imageUrl =
    'https://i.pinimg.com/550x/ba/ae/11/baae11ae1753b2833af58283eeb61508.jpg';

  return (
    <ImageBackground source={{uri: imageUrl}} style={styles.imageBackground}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.inputsContainer}>
          <Input textProp="Email" color="#fff" />
          <Input textProp="Password" pass={true} color="#fff" />
        </View>

        <ButtonPrimary text="Log In" />

        <View style={styles.notAccount}>
          <Text style={styles.simpleText}>Don't have an account?</Text>
          <TouchableOpacity onPress={handleRegisterPress}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(25,9,33,0.7)',
  },
  inputsContainer: {
    width: '100%',
    paddingBottom: 20,
  },
  buttons: {
    backgroundColor: '#5f6def',
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    width: '100%',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#707cf1',
  },
  simpleText: {
    color: '#fff',
  },
  buttonText: {
    textDecorationLine: 'underline',
    color: '#707cf1',
  },
  notAccount: {
    flexDirection: 'row',
    gap: 6,
    paddingTop: 10,
  },
});
