import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  textProp: string;
  alertProp?: string;
  pass?: boolean;
  color?: string;
  withBackground?: boolean;
  passwordsecuryty?: boolean;
  value?: string;
  eyecolor?: boolean;
  onChangeText?: (text: string) => void;
};

export const Input = (props: Props) => {
  const [seepassword, setseepassword] = useState(props.passwordsecuryty);

  const handleSeePassword = () => {
    setseepassword(!seepassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTexts}>
        <Text style={{color: props.color}}>{props.textProp} *</Text>
        <Text style={{color: 'red'}}> {props.alertProp}</Text>
      </View>
      <TextInput
        value={props.value}
        secureTextEntry={seepassword}
        onChangeText={props.onChangeText}
        style={[
          props.withBackground
            ? styles.inputBackGround
            : styles.inputWithOutBackGround,

          typeof props.value !== 'undefined' && props.value.length > 0
            ? styles.borderactive
            : null,
        ]}
      />
      {props.pass && (
        <Icon
          style={[props.eyecolor ? styles.icon : styles.iconlogin]}
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
  containerTexts: {
    flexDirection: 'row',
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
  iconlogin: {
    color: '#fff',
    fontSize: 28,
    position: 'absolute',
    bottom: 9,
    right: 5,
  },
  borderactive: {
    borderWidth: 1,
    borderColor: '#5f6def',
  },
});
