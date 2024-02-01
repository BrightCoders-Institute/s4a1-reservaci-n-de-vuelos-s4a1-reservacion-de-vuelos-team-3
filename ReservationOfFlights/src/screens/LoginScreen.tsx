import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import {Input} from '../components/Input';
import {ButtonPrimary} from '../components/ButtonPrimary';
//import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

export const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableButtonRegister, setEnableButtonRegister] = useState(false);

  //const {navigate} = useNavigation();
  const handleRegisterPress = () => {
    navigation.navigate('Register' as never);
  };

  function validateEmail() {
    const emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (emailRegex.test(email)) {
      loginUser();
    }
  }

  function loginUser() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.replace('Home' as never);
        //resetData();
      })
      .catch(err => {
        console.log(err.name);
      });
  }

  // const resetData = () => {
  //   setPassword('');
  //   setEmail('');
  // };

  if (email.length >= 1 && password.length >= 8) {
    if (!enableButtonRegister) {
      setEnableButtonRegister(true);
    }
  } else {
    if (enableButtonRegister) {
      setEnableButtonRegister(false);
    }
  }

  const imageUrl =
    'https://i.pinimg.com/550x/ba/ae/11/baae11ae1753b2833af58283eeb61508.jpg';

  return (
    <ImageBackground source={{uri: imageUrl}} style={styles.imageBackground}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.inputsContainer}>
          <Input
            value={email}
            onChangeText={text => setEmail(text)}
            textProp="Email"
            color="#fff"
          />
          <Input
            value={password}
            onChangeText={text => setPassword(text)}
            textProp="Password"
            pass={true}
            color="#fff"
          />
        </View>

        <ButtonPrimary
          text="Log In"
          onPress={validateEmail}
          disabled={!enableButtonRegister}
        />

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
