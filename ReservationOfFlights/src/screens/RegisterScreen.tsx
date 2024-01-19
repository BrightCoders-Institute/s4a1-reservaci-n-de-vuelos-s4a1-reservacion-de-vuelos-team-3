import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Input} from '../components/Input';
import {Checkbox} from '../components/Checkbox';
import {ButtonPrimary} from '../components/ButtonPrimary';
import {ScreenLoader} from '../components/ScreenLoader';

export const RegisterScreen = () => {
  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>

        <View style={styles.inputsContainer}>
          <Input text="First Name" withBackground />
          <Input text="Email" withBackground />
          <Input text="Password" pass={true} withBackground />
        </View>

        <View style={styles.checksContainer}>
          <Checkbox
            textProp="I agree to the Terms and Privacy Policy "
            obligatory
          />
          <Checkbox textProp="Subscribe for select product updates." />
        </View>

        <ButtonPrimary text="Sign Up" />

        <Text style={styles.textOr}>Or</Text>

        <ButtonPrimary
          text="Sign Up with Google"
          icon="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png"
        />

        <View style={styles.haveAccount}>
          <Text>Do you have account?</Text>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScreenLoader />
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
