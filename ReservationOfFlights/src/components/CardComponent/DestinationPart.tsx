import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const DestinationPart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AMS</Text>
      <Text style={styles.text}>Netherlands</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#000',
    textAlign: 'right',
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: '#727373',
    textAlign: 'right',
  },
});
