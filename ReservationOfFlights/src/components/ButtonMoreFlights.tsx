import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  onPress?: (event: GestureResponderEvent) => void;
};

export const ButtonMoreFlights = (props: Props) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
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
