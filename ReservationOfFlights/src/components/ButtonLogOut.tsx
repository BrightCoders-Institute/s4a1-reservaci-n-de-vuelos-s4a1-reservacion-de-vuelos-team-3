import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const ButtonLogOut = () => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <View style={styles.elementsContainer}>
        <Icon name="log-out-outline" size={25} color="#fff" />
        <Text style={styles.text}>Log out</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#B22222',
    borderRadius: 10,
    position: 'absolute',
    alignSelf: 'flex-end',
    top: 17,
    right: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  elementsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  text: {
    color: '#fff',
  },
});
