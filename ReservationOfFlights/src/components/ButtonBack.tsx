import {GestureResponderEvent, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
};

export default function ButtonBack({onPress}: Props) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Icon name="chevron-back-outline" color="#646fee" size={35} />
    </TouchableWithoutFeedback>
  );
}
