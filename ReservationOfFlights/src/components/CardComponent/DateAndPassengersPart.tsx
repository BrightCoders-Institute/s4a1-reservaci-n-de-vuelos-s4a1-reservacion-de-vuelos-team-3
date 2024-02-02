import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const DateAndPassengersPart = ({
  date = 'September 3, 2023',
  passengers = '2 passengers',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{date}</Text>
      <Text style={styles.text}>{passengers}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: '#444444',
    textAlign: 'center',
  },
});
