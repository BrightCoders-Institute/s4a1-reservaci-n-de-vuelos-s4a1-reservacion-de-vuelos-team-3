import React ,{useState, useEffect} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {Card} from '../components/CardComponent/Card';
import {ButtonMoreFlights} from '../components/ButtonMoreFlights';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { ActivityIndicator } from 'react-native';

function line () {
  return(
    <View style={{backgroundColor: 'black', height: 1, marginHorizontal: 20}}/>
  )
}


export const HomeScreen = ({navigation}: any) => {

const [data, setdData] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const subscriber = firestore()
    .collection('Users')
    .doc(auth().currentUser?.uid)
    .collection('Vuelos')
    .onSnapshot(querySnapshot => {
      const users = [];

      querySnapshot.forEach(documentSnapshot => {
        users.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      setdData(users);
      setLoading(false);
    });

  // Unsubscribe from events when no longer in use
  return () => subscriber();
}, []);

  function navegar() {
    navigation.navigate('FR1');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Flights</Text>
      <FlatList data={data} ItemSeparatorComponent={line} renderItem={({item})=> (
        <Card 
          AMS={{show: true, text: item.from}}
          BEG={{show: true, text: item.to}}
          date={item.date}
          passengers={item.passengers}/>
      )} style={styles.flatList}  />
      <ButtonMoreFlights onPress={navegar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#707cf1',
    
  },
  flatList: {
    marginTop: 10,
  },
});
