import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WheelPicker from 'react-native-wheely';
import {Card} from '../../components/CardComponent/Card';
import ButtonBack from '../../components/ButtonBack';
import {ButtonPrimary} from '../../components/ButtonPrimary';

export default function FlightsR_04_Passengers({route, navigation}: any) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const {from, to, date} = route.params;

  function navegar() {
    navigation.navigate('FR5', {
      from: from,
      to: to,
      date: date,
      passengers: selectedIndex,
    });
  }

  function irAtras() {
    navigation.goBack();
  }

  return (
    <View style={styles.content}>
      <ButtonBack onPress={irAtras} />
      <Card
        BEG={{show: true, text: from}}
        AMS={{show: true, text: to}}
        date={date}
        passengers=""
      />

      <View>
        <Text style={styles.headerText}>How many passengers?</Text>
      </View>

      <View style={styles.scrollContainer}>
        <WheelPicker
          selectedIndex={selectedIndex}
          options={['---', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
          onChange={index => setSelectedIndex(index)}
          itemStyle={styles.itemStyle}
          itemTextStyle={styles.itemTextStyle}
        />
        {/* button */}
      </View>
      <View style={styles.ButtonV}>
        <ButtonPrimary
          text="Next"
          onPress={navegar}
          disabled={selectedIndex === 0}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  headerText: {
    width: '85%',
    padding: 20,
    fontSize: 44,
    fontWeight: '800',
    color: '#000',
    textAlign: 'left',
  },
  scrollContainer: {
    flex: 1,
    alignSelf: 'stretch',
    marginLeft: 20,
    marginTop: 10,
  },
  ButtonV: {
    paddingHorizontal: 12,
    paddingBottom: 23,
  },
  itemStyle: {
    backgroundColor: 'white',
  },
  itemTextStyle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25,
  },
});
