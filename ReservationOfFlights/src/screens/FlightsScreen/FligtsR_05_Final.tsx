import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from '../../components/CardComponent/Card';
import {ButtonPrimary} from '../../components/ButtonPrimary';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const FligtsR_05_Final = ({route, navigation}: any) => {
  const {from, to, date, passengers} = route.params;

  firestore()
  .collection('Users')
  .doc(auth().currentUser?.uid)
  .collection('Vuelos')
  .add(route.params)
  .then(() => {
    console.log('Vuelo agregado correctamente');
  })

  function navegar() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.content}>
      <View style={styles.contentsecond}>
        {/* card */}
        <View>
          <Card
            BEG={{show: true, text: to}}
            AMS={{show: true, text: from}}
            date={date}
            passengers={passengers}
          />
          <Text style={styles.title}>Your request was received.</Text>
        </View>

        {/* button */}
        <View style={styles.PadH}>
          <ButtonPrimary text="Finish" onPress={navegar} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  PadH: {paddingHorizontal: 10},
  content: {
    paddingVertical: 44,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  contentsecond: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: '70%',
  },
  title: {
    width: '85%',
    padding: 20,
    fontSize: 44,
    fontWeight: '800',
    color: '#000',
    textAlign: 'left',
  },
});
