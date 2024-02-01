import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {Card} from '../components/CardComponent/Card';
import {ButtonMoreFlights} from '../components/ButtonMoreFlights';
import {ButtonLogOut} from '../components/ButtonLogOut';

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
];

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Flights</Text>
      <FlatList data={data} renderItem={Card} style={styles.flatList} />
      <ButtonMoreFlights />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#707cf1',
  },
  flatList: {
    marginTop: 10,
  },
});
