import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {DeparturePart} from './DeparturePart';
import {DestinationPart} from './DestinationPart';
import {DateAndPassengersPart} from './DateAndPassengersPart';

export const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flightPointsDetailsContainer}>
        <DeparturePart />
        <Icon name="airplane" size={30} color="#646fee" />
        <DestinationPart />
      </View>

      <View style={styles.line} />

      <DateAndPassengersPart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    borderRadius: 10,
    padding: 20,
    marginTop: 15,
  },
  flightPointsDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  line: {
    borderColor: '#dededf',
    borderWidth: 0.6,
    marginTop: 10,
  },
});
