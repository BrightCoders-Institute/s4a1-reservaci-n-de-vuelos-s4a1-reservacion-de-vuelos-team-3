import React from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

type Props = {
  text: string;
  icon?: string;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
};

export const ButtonPrimary = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.container,
        props.disabled ? styles.disabled : styles.enable,
      ]}
      disabled={props.disabled}>
      {props.icon !== undefined ? (
        <Image
          source={{
            uri: props.icon,
          }}
          style={styles.icon}
        />
      ) : (
        ''
      )}

      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
  enable: {
    backgroundColor: '#5f6def',
  },
  disabled: {
    backgroundColor: '#A0A0A0',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
