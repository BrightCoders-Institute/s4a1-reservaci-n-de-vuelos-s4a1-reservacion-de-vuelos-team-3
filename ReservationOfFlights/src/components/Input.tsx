import React from 'react'
import { Text, TextInput, View } from 'react-native'

export const Input = ({text= 'Title', pass=false}) => {
  return (
    <View>
        <Text>{text}</Text>
        <TextInput style={{ width:'100%', padding:10, backgroundColor: '#ffffff', borderRadius: 10}} secureTextEntry={pass}/>
    </View>
  )
}
