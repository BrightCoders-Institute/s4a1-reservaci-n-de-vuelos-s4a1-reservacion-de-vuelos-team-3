import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import ButtonBack from '../../components/ButtonBack';
import {ButtonPrimary} from '../../components/ButtonPrimary';

export default function FligtsR_01_W({navigation}: any) {
  const [from, setFrom] = useState('');

  function navegar() {
    navigation.navigate('FR2', {
      from: from,
    });
  }

  function irAtras() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ButtonBack onPress={irAtras} />
      <View style={styles.elementsContainer}>
        <Text style={styles.title}>Where are you know?</Text>

        <TextInput
          placeholder="Select location"
          style={[from.length < 1 ? styles.input : styles.inputverified]}
          onChangeText={text => setFrom(text)}
        />

        <View style={styles.buttonContainer}>
          <ButtonPrimary
            text="Next"
            onPress={navegar}
            disabled={from.length < 1}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 20,
    flex: 1,
  },
  elementsContainer: {
    justifyContent: 'flex-end',
    height: '92%',
  },
  buttonContainer: {
    marginTop: 275,
  },
  title: {
    marginTop: 25,
    color: 'black',
    fontSize: 44,
    fontWeight: 'bold',
  },
  input: {
    color: 'black',
    borderBottomWidth: 1,
    borderColor: '#CBCBCB',
    marginVertical: 30,
  },
  inputverified: {
    color: 'black',
    borderBottomWidth: 1,
    borderColor: '#626ee3',
    marginVertical: 30,
  },
});
