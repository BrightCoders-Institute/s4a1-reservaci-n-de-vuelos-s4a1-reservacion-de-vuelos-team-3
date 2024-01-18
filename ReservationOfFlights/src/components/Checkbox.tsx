import React from 'react'
import { View, Text } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";

export const Checkbox = ({textProp="text", obligatory=false}) => {
  return (
    <View style={{flexDirection: 'row'}}>
        <BouncyCheckbox
            size={25}
            fillColor="#5f6def"
            unfillColor="#fff"
            text={textProp}
            textStyle={{textDecorationLine: 'none'}}
            iconStyle={{ borderRadius: 0 }}
            innerIconStyle={{ borderRadius: 0}}
            onPress={(isChecked: boolean) => {}}
        />
        
        <Text style={{color: 'red'}}>{obligatory? '*' : ''}</Text>
    </View>
    
  )
}
