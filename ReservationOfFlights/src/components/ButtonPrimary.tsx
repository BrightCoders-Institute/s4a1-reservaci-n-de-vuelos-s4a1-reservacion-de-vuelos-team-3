import React from 'react';
import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

export const ButtonPrimary = ({text = 'NaN', icon = ''}) => {
  return (
    <TouchableOpacity style={styles.container}>
      {icon !== '' ? (
        <Image
          source={{
            uri: icon,
          }}
          style={styles.icon}
        />
      ) : (
        ''
      )}

      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#5f6def',
    padding: 10,
    borderRadius: 10,
    width: '100%',
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
