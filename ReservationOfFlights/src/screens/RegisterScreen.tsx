import React, {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Input} from '../components/Input';
import {Checkbox} from '../components/Checkbox';
import {ButtonPrimary} from '../components/ButtonPrimary';
// import {ScreenLoader} from '../components/ScreenLoader';
import {useNavigation} from '@react-navigation/native';

interface Props extends StackScreenProps<any, any> {}

export const RegisterScreen = ({}: Props) => {
  const {navigate} = useNavigation();

  const [inputAlert, setInputAlert] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [checkPrivacy, setCheckPrivacy] = useState(false);
  const [enableButtonRegister, setEnableButtonRegister] = useState(false);

  //Comprobar si hay datos en los Inputs
  if (
    nombre.length > 1 &&
    email.length > 1 &&
    password.length > 8 &&
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
    }
  }

  const handleLogInPress = () => {
    navigate('Log_In' as never);
  };
  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>

        <View style={styles.inputsContainer}>
          <Input
            value="O"
            textProp="First Name"
            passwordsecuryty={false}
            withBackground
            onChangeText={text => setNombre(text)}
          />
          <Input
            value="oscar@gmail.com"
            textProp="Email"
            passwordsecuryty={false}
            withBackground
            onChangeText={text => setEmail(text)}
            alertProp={inputAlert}
          />
          <Input
            value="19092001"
            textProp="Password"
            pass={true}
            passwordsecuryty={true}
            withBackground
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
        />

        <View style={styles.haveAccount}>
          <Text>Do you have account?</Text>
          <TouchableOpacity onPress={handleLogInPress}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/*<ScreenLoader />*/}
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
