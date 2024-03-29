import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const DeparturePart = ({show = true, text = 'Serbian'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{show ? 'DEP' : ''}</Text>
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
    textAlign: 'left',
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: '#727373',
    textAlign: 'left',
  },
});
