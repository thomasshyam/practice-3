import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    KeyboardAvoidingView,
    
} from 'react-native';
import Myform from './Myform';

export default class Login extends Component {

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.logocontainer}>
                    <Image style={ styles.logo }source={require('./images/logo1.png')}/>
                    <Text style={styles.title}>Hello shyam</Text>
                </View>
                <View style={styles.form}>
                    <Myform />
                </View>
            </KeyboardAvoidingView>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#000',
        width:Dimensions.get('window').width,
    },
    logocontainer:{
        alignItems:'center',
        justifyContent:'center',
        flexGrow:1,
    },
    logo:{
        width:100,
        height:100,
        
    },
    title:{
        color:'white',
        marginTop:15,
    },
    form:{
        flex:1,
    },
   
});
