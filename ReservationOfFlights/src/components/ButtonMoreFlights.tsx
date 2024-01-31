import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const ButtonMoreFlights = () => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Icon name="add" size={45} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#5f6cf0',
    width: 60,
    height: 60,
    borderRadius: 100,
    position: 'absolute',
    alignSelf: 'center',
    right: 15,
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});
