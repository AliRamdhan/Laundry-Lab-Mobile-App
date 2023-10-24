import React from 'react';
import {Text,TextInput,TouchableOpacity,SafeAreaView,View,StyleSheet,Image,ImageBackground} from 'react-native'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

export default function SignIn(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigation =useNavigation()
    const handleSignIn = async function(){
        try{
            await auth().signInWithEmailAndPassword(email,password)
            console.log('Home')
            navigation.navigate('Home')
        }
        catch{
            console.log('error')
        }
    }
    return(
        <ImageBackground
            source={require('../Image/SignLog.png')}
            style={styles.backgrounds}>
            <SafeAreaView style={styles.container}>
                <View style={styles.pageBtn}>
                    <TouchableOpacity 
                        style={styles.pageMenuSignUp}
                        onPress={()=>{navigation.navigate('SignUp')}}>
                        <Text> Sign Up </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.pageMenuSignIn}
                        onPress={()=>{navigation.navigate('SignIn')}}>
                        <Text> Sign In </Text>
                    </TouchableOpacity>
                </View>
                <Image 
                    source={require('../Image/Logo.png')}
                    style={styles.logo}/>
                <View style={styles.inputS}>
                    <Text style={styles.formatInput}> Email Address</Text>                    
                    <TextInput 
                        placeholder='Type your email'
                        value={email}
                        onChangeText={(text)=>{setEmail(text)}}
                        style={styles.inputStyle}/>
                    <Text style={styles.formatInput}> Password</Text>
                    <TextInput 
                        placeholder='Type your password'
                        value={password}
                        onChangeText={(text)=>{setPassword(text)}}
                        secureTextEntry
                        style={styles.inputStyle}/>
                    <Text style={styles.forgot}> Forgot Password?</Text>                    
                    <TouchableOpacity
                        style={styles.button}   
                        // onPress={handleSignIn}
                        onPress={()=>{navigation.navigate('Home')}}
                        >
                        <Text style={styles.textBtn}> Sign In </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inform}>
                    <Text style={styles.informText}> LOGIN</Text>
                    <Text style={styles.informTexts}> {`Login into our laundry app \n to make easier your laundry`}</Text>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent:'space-between'
    },
    backgrounds:{
        width:'100%',
        height:'100%',
    },
    logo:{
        marginTop:30,
        width:200,
        height:165,
    },
    pageBtn:{
        marginTop:80,
        display:'flex',
        flexDirection:'row',
        borderColor:'black',
        borderBottomWidth:2,    
        borderLeftWidth:2,
        borderTopWidth:2,
        borderRightWidth:2,
        borderRadius:20,
    },
    pageMenuSignUp:{
        paddingVertical:10,
        paddingHorizontal:40,
        borderRadius:20,
    },
    pageMenuSignIn:{
        paddingVertical:10,
        paddingHorizontal:40,
        borderRadius:20,
        backgroundColor:'#3554E7', 
        borderColor:'#3554E7'
    },
    inputS:{
        height:'28%',
        justifyContent:'space-around',
        alignItems:'center',
        width:'100%',
        marginBottom:30,
    },
    inputStyle:{
        width:300,
        height:45,
        paddingVertical:5,
        paddingHorizontal:15,
        borderRadius:20,
        backgroundColor:'#FFFFFF',
        borderColor:'#FFFFFF',
        paddingVertical:5,
        marginBottom:10,
    },
    formatInput:{
        fontSize:15,
        width:300,
        textAlign:'left'
    },
    forgot:{
        width:'75%',
        textAlign:'right',
        color:'#FFFFFF',
    },
    button:{
        marginTop:15,
        borderBottomWidth:2,    
        borderLeftWidth:2,
        borderTopWidth:2,
        borderRightWidth:2,
        borderRadius:20,
        width:250,
        height: 42,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#4361EE',
        borderColor:'#4361EE',
    },
    textBtn:{
        color:'#FFFFFF'
    },
    inform:{
        height:'20%',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    informText:{
        fontSize:30,
        color:'#FFFFFF',
        borderBottomWidth:3,
        borderColor:'#FFFFFF'
    },
    informTexts:{
        fontSize:20,
        color:'#FFFFFF',
        textAlign:'center'
    },
    
})