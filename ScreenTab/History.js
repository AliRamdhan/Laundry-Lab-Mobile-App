import React from 'react';
import { Text,View,StyleSheet,Image,TouchableOpacity,SafeAreaView,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function loginAs(){
    const navigation = useNavigation()
    return(
        <ImageBackground
            source={require('../Image/LoginAs.png')}
            style={styles.backgrounds}>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={ styles.text}> Teman Hukum</Text>
                    <View style={styles.div}>
                        <TouchableOpacity 
                            style={styles.buttonCustomer} 
                            onPress={()=>{navigation.navigate('SignIn')}}>
                            <Text style={styles.textCustomer}> Customer </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.buttonOwner} 
                            onPress={()=>{navigation.navigate('SignIn')}}>
                            <Text style={styles.textOwner}> Owner </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContainer:{
        height:'50%',
        width:'100%',
        justifyContent:'space-around'
    },
    backgrounds:{
        width:'100%',
        height:'100%',
    },
    text:{
        fontSize:40,
        fontWeight:'bold',
        color:'#FFFFFF',
        width:'100%',
        textAlign:'center'
    },
    div:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    buttonOwner:{
        width:242,
        height:77,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:'#FFFFFF',
        borderBottomWidth:2,    
        borderLeftWidth:2,
        borderTopWidth:2,
        borderRightWidth:2,
        margin:10,
        borderRadius:10,
        paddingVertical:8,
        backgroundColor:'#FFFFFF',
        textAlign:'center',
    },
    buttonCustomer:{
        width:242,
        height:77,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:'#FFFFFF',
        borderBottomWidth:2,    
        borderLeftWidth:2,
        borderTopWidth:2,
        borderRightWidth:2,
        margin:10,
        borderRadius:10,
        paddingVertical:8,
        backgroundColor:'#FFFFFF',
        textAlign:'center',
    },
    
    textCustomer:{
        color:'#6B6565',
        fontSize:30,
    },
    textOwner:{
        color:'#6B6565',
        fontSize:30,
    }

  });