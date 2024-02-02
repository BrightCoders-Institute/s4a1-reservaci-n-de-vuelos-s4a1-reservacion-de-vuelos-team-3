import {View, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import ButtonBack from '../../components/ButtonBack';
import {ButtonPrimary} from '../../components/ButtonPrimary';
import {Calendar} from 'react-native-calendars';
import {Card} from '../../components/CardComponent/Card';

export default function FligtsR_03_Calendar({navigation}: any) {
  function navegar() {
    navigation.navigate('FR4');
  }

  function irAtras() {
    navigation.goBack();
  }

  const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
      <ButtonBack onPress={irAtras} />
      <View style={styles.elementsContainer}>
        <Card
          AMS={{show: true, text: 'aqui'}}
          BEG={{show: true, text: 'aca'}}
          date=""
          passengers=""
        />

        <Text style={styles.title}>Select date</Text>

        <Calendar
          onDayPress={day => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: '#5f6def',
            },
          }}
        />

        <View style={styles.buttonContainer}>
          <ButtonPrimary text="Next" onPress={navegar} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    padding: 20,
    flex: 1,
  },
  elementsContainer: {
    justifyContent: 'space-between',
    height: '92%',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 25,
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
