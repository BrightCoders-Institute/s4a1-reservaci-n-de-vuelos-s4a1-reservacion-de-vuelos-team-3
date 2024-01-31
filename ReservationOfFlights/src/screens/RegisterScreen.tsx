import React, {useState, useEffect} from 'react';
//import {StackScreenProps} from '@react-navigation/stack';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Input} from '../components/Input';
import {Checkbox} from '../components/Checkbox';
import {ButtonPrimary} from '../components/ButtonPrimary';
//import {useNavigation} from '@react-navigation/native';
//import {StackActions} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {ScreenLoader} from '../components/ScreenLoader';
//import {useNavigation} from '@react-navigation/native';

//interface Props extends StackScreenProps<any, any> {}

export const RegisterScreen = ({navigation}: any) => {
  //const {navigate} = useNavigation();

  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputAlert, setInputAlert] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [checkPrivacy, setCheckPrivacy] = useState(false);
  const [enableButtonRegister, setEnableButtonRegister] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '960413805356-bpssvgm9s60brs9sb3huh9emrh94m5n2.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken, user} = await GoogleSignin.signIn();

      console.log(user);
      //navigation.replace('Home' as never);

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log('fallo en el registro de ususario' + error);
    }
  }

  function registerUser() {
    setIsLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Usuario registrado correctamente');
        setIsRegister(true);
        setTimeout(() => {
          navigation.replace('Log_In' as never);
          //navigate('Log_In' as never);
          setIsLoading(false);
          //resetData();
        }, 1500);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }

  // const resetData = () => {
  //   setPassword('');
  //   setEmail('');
  //   setNombre('');
  // };

  //Comprobar si hay datos en los Inputs
  if (
    nombre.length > 1 &&
    email.length > 1 &&
    password.length >= 8 &&
    checkPrivacy
  ) {
    if (!enableButtonRegister) {
      setEnableButtonRegister(true);
    }
  } else {
    if (enableButtonRegister) {
      setEnableButtonRegister(false);
    }
  }

  function validateEmail() {
    const emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!emailRegex.test(email)) {
      setInputAlert('Ingrese un correo valido');
    } else {
      setInputAlert('');
      registerUser();
    }
  }

  const handleLogInPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>

        <View style={styles.inputsContainer}>
          <Input
            value={nombre}
            textProp="First Name"
            passwordsecuryty={false}
            withBackground
            onChangeText={text => setNombre(text)}
          />
          <Input
            value={email}
            textProp="Email"
            passwordsecuryty={false}
            withBackground
            onChangeText={text => setEmail(text)}
            alertProp={inputAlert}
          />
          <Input
            value={password}
            textProp="Password"
            pass={true}
            passwordsecuryty={true}
            withBackground
            eyecolor={true}
            onChangeText={text => setPassword(text)}
          />
          <Text>
            Use 8 or more characters with a mix of letter, numbers, and symbols.
          </Text>
        </View>

        <View style={styles.checksContainer}>
          <Checkbox
            textProp="I agree to the Terms and Privacy Policy "
            obligatory
            onPress={isChecked => setCheckPrivacy(isChecked)}
          />
          <Checkbox textProp="Subscribe for select product updates." />
        </View>

        <ButtonPrimary
          text="Sign Up"
          disabled={!enableButtonRegister}
          onPress={validateEmail}
        />

        <Text style={styles.textOr}>Or</Text>

        <ButtonPrimary
          text="Sign Up with Google"
          icon="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png"
          onPress={onGoogleButtonPress}
        />

        <View style={styles.haveAccount}>
          <Text>Do you have account?</Text>
          <TouchableOpacity onPress={handleLogInPress}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>

      {isLoading && <ScreenLoader isRegister={isRegister} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  containerPrincipal: {
    flex: 1,
  },
  inputsContainer: {
    width: '100%',
    paddingBottom: 20,
    flexDirection: 'column',
    gap: 10,
  },
  checksContainer: {
    width: '100%',
    paddingBottom: 40,
    flexDirection: 'column',
    gap: 20,
  },
  haveAccount: {
    flexDirection: 'row',
    gap: 6,
    paddingTop: 10,
  },
  buttonText: {
    textDecorationLine: 'underline',
    color: '#707cf1',
  },
  title: {
    width: '100%',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#707cf1',
  },
  textOr: {
    textAlign: 'center',
    marginVertical: 15,
  },
});
