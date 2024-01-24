import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type Props = {
  textProp: string;
  obligatory?: boolean;
  onPress?: (isChecked: boolean) => void;
};

export const Checkbox = (props: Props) => {
  return (
    <View style={styles.termsContainer}>
      <BouncyCheckbox
        size={25}
        fillColor="#5f6def"
        unfillColor="#fff"
        text={props.textProp}
        textStyle={styles.checkBoxText}
        iconStyle={styles.checkBoxRadius}
        innerIconStyle={styles.checkBoxRadius}
        onPress={props.onPress}
      />

      <Text style={styles.text}>{props.obligatory ? '*' : ''}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  termsContainer: {
    flexDirection: 'row',
  },
  checkBoxRadius: {
    borderRadius: 0,
  },
  checkBoxText: {
    textDecorationLine: 'none',
  },
  text: {
    color: 'red',
  },
});
