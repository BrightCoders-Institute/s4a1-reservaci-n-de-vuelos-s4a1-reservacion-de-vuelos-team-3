import React from 'react';
import {ActivityIndicator, View, Text, StyleSheet} from 'react-native';

export const ScreenLoader = () => {
  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.boxContainer}>
        <ActivityIndicator size={80} color="#5e6cec" />
        <Text style={styles.text}>Loading...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    backgroundColor: '#22252b',
    height: 130,
    width: 130,
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: 3,
  },
  text: {textAlign: 'center', color: '#5e6cec', fontSize: 18},
});
