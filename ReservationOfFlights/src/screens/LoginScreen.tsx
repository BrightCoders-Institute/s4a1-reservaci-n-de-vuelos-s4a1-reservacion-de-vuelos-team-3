import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View,ImageBackground } from 'react-native'
import { Input } from '../components/Input'

export const LoginScreen = () => {
    const imageUrl = 'https://i.pinimg.com/originals/87/f4/66/87f4662aafebbd7daf408630d64c7492.jpg';
    
  return (
    <ImageBackground
    source={{ uri: imageUrl }}
    style={{ flex: 1}}
    >
    
    <View style={styles.container}>
        <View style={{width: '100%'}}>
        <Text style={styles.title}>Login</Text>
        </View>

        <View style={{width: '100%', paddingBottom: 20}}>
            <Input text='Email' color='#fff' />
            <Input text='Password' pass={true} color='#fff' />
        </View>

        <TouchableOpacity style={styles.buttons}>
            <Text style={styles.textButton}>Log in</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', gap: 6, paddingTop: 10}}>
            <Text style={{color: '#fff'}}>
                Don't have an account? 
            </Text>
            <TouchableOpacity>
                <Text style={{textDecorationLine: 'underline', color: '#707cf1'}}>Register</Text>
            </TouchableOpacity>
        </View>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'rgba(25,9,33,0.7)',
    },
    buttons:{
        backgroundColor: '#5f6def',
        padding: 10,
        borderRadius: 10,
        width: '100%',
    },
    textButton: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',

    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#707cf1',
    }
})