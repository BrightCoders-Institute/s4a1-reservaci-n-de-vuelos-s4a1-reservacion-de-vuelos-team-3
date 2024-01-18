import React from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'

export const Input = ({text= 'Title', pass=false, color='#000', withBackground = false}) => {
  return (
    <View style={{flexDirection: 'column', gap: 8}}>
        <Text style={{color}}>{text}*</Text>
        <TextInput style={withBackground? styles.inputBackGround: styles.inputWithOutBackGround} secureTextEntry={pass}/>
    </View>
  )

}

const styles = StyleSheet.create({
  inputBackGround: {
    width:'100%',
    padding:10,
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
    marginBottom: 20,
    color: '#000',
  },
  inputWithOutBackGround: {
    width:'100%',
    padding:10,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: '#5f6def',
    borderBottomWidth: 2.5,
    color: '#fff',
  },
});