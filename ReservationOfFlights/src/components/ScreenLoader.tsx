import React from 'react';
import {ActivityIndicator, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//

type Props = {
  isRegister: boolean;
};

export const ScreenLoader = (props: Props) => {
  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.boxContainer}>
        {props.isRegister ? (
          <View style={styles.icon}>
            <Icon name="checkmark-circle-outline" size={80} color={'#5e6cec'} />
          </View>
        ) : (
          <ActivityIndicator size={80} color="#5e6cec" />
        )}
        <Text style={styles.text}>
          {props.isRegister ? 'Signed Up' : 'Signing Up'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    backgroundColor: '#22252b',
    height: 130,
    width: 130,
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: 3,
  },
  text: {textAlign: 'center', color: '#5e6cec', fontSize: 18},
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
