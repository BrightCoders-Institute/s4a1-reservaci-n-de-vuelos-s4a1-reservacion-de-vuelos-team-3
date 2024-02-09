import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const DestinationPart = ({show = true, text = 'Netherlands'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{show ? 'DES' : ''}</Text>
      <Text style={styles.text}>{text}</Text>
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
