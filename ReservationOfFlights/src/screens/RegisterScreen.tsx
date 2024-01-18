import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { Input } from '../components/Input'
import { Checkbox } from '../components/Checkbox'

export const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{ width: '100%' }}>
                <Text style={styles.title}>Sign Up</Text>
            </View>

            <View style={{ width: '100%', paddingBottom: 20 }}>
                <Input text='First Name' withBackground />
                <Input text='Email' withBackground />
                <Input text='Password' pass={true} withBackground />
            </View>

            <View style={{ width: '100%', paddingBottom: 20, flexDirection: 'column', gap: 20 }}>
                <Checkbox textProp='I agree to the Terms and Privacy Policy ' obligatory />
                <Checkbox textProp='Subscribe for select product updates.' />
            </View>

            <View style={{ width: '100%', paddingBottom: 20, flexDirection: 'column', gap:20 }}>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.textButton}>Sign Up</Text>
                </TouchableOpacity>

                <Text style={{textAlign: 'center'}}>
                    Or
                </Text>

                <TouchableOpacity style={styles.buttons}>
                <Image
                    source={{ uri: 'https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png' }}
                    style={styles.googleIcon}
                    />
                    <Text style={styles.textButton}>Sign Up with Google</Text>
                </TouchableOpacity>
            </View>

            

            <View style={{ flexDirection: 'row', gap: 6, paddingTop: 10 }}>
                <Text>
                    Do you have account?
                </Text>
                <TouchableOpacity>
                    <Text style={{ textDecorationLine: 'underline', color: '#707cf1' }}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
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
    },
    googleIcon: {
        width: 30,
        height: 30,
        marginRight: 20,

    },
})    
