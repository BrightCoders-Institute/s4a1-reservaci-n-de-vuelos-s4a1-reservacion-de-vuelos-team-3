import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Input = ({
  text = 'Title',
  pass = false,
  color = '#000',
  withBackground = false,
}) => {
  const [seepassword, setseepassword] = useState(false);

  const handleSeePassword = () => {
    setseepassword(!seepassword);
  };

  return (
    <View style={styles.container}>
      <Text style={{color}}>{text}*</Text>
      <TextInput
        secureTextEntry={seepassword}
        style={
          withBackground
            ? styles.inputBackGround
            : styles.inputWithOutBackGround
        }
      />
      {pass && (
        <Icon
          style={styles.icon}
          onPress={handleSeePassword}
          name={seepassword ? 'eye-off-outline' : 'eye-outline'}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 8,
  },
  inputBackGround: {
    width: '100%',
    paddingVertical: 10,
    paddingRight: 45,
    paddingLeft: 20,
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
    marginBottom: 0,
    color: '#000',
  },
  inputWithOutBackGround: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 0,
    borderColor: '#5f6def',
    borderBottomWidth: 2.5,
    color: '#fff',
    paddingRight: 40,
  },
  icon: {
    color: '#000',
    fontSize: 28,
    position: 'absolute',
    bottom: 9,
    right: 5,
  },
});
