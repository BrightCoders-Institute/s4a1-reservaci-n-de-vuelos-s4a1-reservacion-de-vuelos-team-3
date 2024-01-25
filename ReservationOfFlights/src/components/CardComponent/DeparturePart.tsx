import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const DeparturePart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BEG</Text>
      <Text style={styles.text}>Serbia</Text>
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
    textAlign: 'left',
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: '#727373',
    textAlign: 'left',
  },
});
