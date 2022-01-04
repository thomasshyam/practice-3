import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Keyboard,
} from 'react-native';


export default class Myform extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder='Email' keyboardType='email-address' textContentType='emailAddress'/>
                <TextInput style={styles.input} placeholder='Password' autoCapitalize={ false } secureTextEntry={ true } textContentType='password' />
                <TouchableOpacity style={ styles.buttoncontainer }>
                    <Text style={ styles.buttontext }>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.registertext}> Dont have a Account ? Register Now</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.forgotpasswordtext}> Forgot Password</Text>
                </TouchableOpacity>
               
            </View>
            
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.8)',
        paddingLeft:10,
        marginBottom:10,
    },
    buttoncontainer:{
        backgroundColor:'blue',
        paddingVertical:15,
    },
    buttontext:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
    },
    registertext:{
        textAlign:'center',
        fontSize:16,
        marginTop:12,
        color:'white',
    },
    forgotpasswordtext:{
        textAlign:'center',
        fontSize:16,
        marginTop:12,
        color:'white',
    },
});
