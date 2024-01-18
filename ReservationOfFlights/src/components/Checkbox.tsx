import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export const Checkbox = ({textProp = 'text', obligatory = false}) => {
  return (
    <View style={styles.termsContainer}>
      <BouncyCheckbox
        size={25}
        fillColor="#5f6def"
        unfillColor="#fff"
        text={textProp}
        textStyle={styles.checkBoxText}
        iconStyle={styles.checkBoxRadius}
        innerIconStyle={styles.checkBoxRadius}
        onPress={(isChecked: boolean) => {}}
      />

      <Text style={styles.text}>{obligatory ? '*' : ''}</Text>
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
