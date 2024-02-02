import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from '../../components/CardComponent/Card';
import {ButtonPrimary} from '../../components/ButtonPrimary';

export const FligtsR_05_Final = ({navigation}: any) => {
  return (
    <View style={styles.content}>
      <View style={styles.contentsecond}>
        {/* card */}
        <View>
          <Card
            BEG={{show: true, text: 'de aqui'}}
            AMS={{show: true, text: 'aca'}}
            date="33232"
            passengers="3e"
          />
          <Text style={styles.title}>Your request was received.</Text>
        </View>

        {/* button */}
        <View style={styles.PadH}>
          <ButtonPrimary text="Finish" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  PadH: {paddingHorizontal: 10},
  content: {
    paddingVertical: 44,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  contentsecond: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: '70%',
  },
  title: {
    width: '85%',
    padding: 20,
    fontSize: 44,
    fontWeight: '800',
    color: '#000',
    textAlign: 'left',
  },
});
