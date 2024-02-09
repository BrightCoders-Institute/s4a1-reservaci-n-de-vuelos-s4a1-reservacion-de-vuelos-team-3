import {View, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import ButtonBack from '../../components/ButtonBack';
import {ButtonPrimary} from '../../components/ButtonPrimary';
import {Calendar} from 'react-native-calendars';
import {Card} from '../../components/CardComponent/Card';
import {format} from "date-fns";

const getFormattedDate = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, 'MMMM dd, yyyy');
  };

export default function FligtsR_03_Calendar({route, navigation}: any) {
  const [date, setDate] = useState('');
  const [formatDate, setFormatDate] = useState('');
  const {from, to} = route.params;

  function navegar() {
    navigation.navigate('FR4', {
      from: from,
      to: to,
      date: formatDate,
    });
  }

  function irAtras() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ButtonBack onPress={irAtras} />
      <View style={styles.elementsContainer}>
        <Card
          AMS={{show: true, text: from}}
          BEG={{show: true, text: to}}
          date=""
          passengers={0}
        />

        <Text style={styles.title}>Select date</Text>

        <Calendar
          onDayPress={day => {
            setFormatDate(getFormattedDate(day.dateString));
            setDate(day.dateString)
          }}
          markedDates={{
            [date]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: '#5f6def',
            },
          }}
        />

        <View style={styles.buttonContainer}>
          <ButtonPrimary
            text="Next"
            onPress={navegar}
            disabled={date.length < 1}
          />
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
