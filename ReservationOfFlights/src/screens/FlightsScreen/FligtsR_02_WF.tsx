import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import ButtonBack from '../../components/ButtonBack';
import {ButtonPrimary} from '../../components/ButtonPrimary';
import {Card} from '../../components/CardComponent/Card';

export default function FligtsR_02_WF({navigation}: any) {
  function navegar() {
    navigation.navigate('FR3');
  }

  function irAtras() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ButtonBack onPress={irAtras} />
      <View style={styles.elementsContainer}>
        <Card
          AMS={{show: true, text: 'aqui'}}
          BEG={{show: false, text: ''}}
          date=""
          passengers=""
        />

        <Text style={styles.title}>Where will you be flying to?</Text>

        <TextInput placeholder="Select location" style={styles.input} />

        <View style={styles.buttonContainer}>
          <ButtonPrimary text="Next" onPress={navegar} />
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
    marginTop: 260,
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
});
