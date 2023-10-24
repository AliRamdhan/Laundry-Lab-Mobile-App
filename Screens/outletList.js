import React from 'react';
import { Text,View,StyleSheet,Image,TouchableOpacity,SafeAreaView,TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import IconFont from 'react-native-vector-icons/FontAwesome5'
import IconNav from 'react-native-vector-icons/Entypo'
export default function outleList(){
    const navigation = useNavigation()
    const [search, searchFunction] = useState('')
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.cursor}>
                    <TouchableOpacity
                        style={{backgroundColor:'#066472',width:'12%',borderRadius:60}}
                        onPress={()=>{navigation.navigate('Home')}}>
                        <IconNav
                            name='chevron-with-circle-left' 
                            solid 
                            size={45} 
                            color='#000000'
                            />
                    </TouchableOpacity>
                </View> 
                <View style={styles.subcontainer}>
                    <View style={styles.pageBtn}>
                        <TouchableOpacity 
                            style={styles.pageMenuSignUp}
                            // onPress={()=>{navigation.navigate('SignUp')}}
                            >
                            <Text> Pick Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.pageMenuSignIn}
                            // onPress={()=>{navigation.navigate('SignIn')}}
                            >
                            <Text> Delivery</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.location}>                        
                    </View>
                    <View style={styles.searchBar}>
                        <TextInput 
                            placeholder='Find Outlet in Here!!'
                            value={search}
                            onChangeText={(text)=>{searchFunction(text)}}
                            style={styles.inputStyle}/>
                    </View>
                    <View style={styles.nearbyLoc}>
                        <Text style={{fontSize:25,fontWeight:'500'}}> 
                            Nearby Located 
                        </Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={styles.nearby}>
                    <TouchableOpacity 
                        style={styles.outletNearby}
                        onPress={()=>{navigation.navigate('OutletProfile')}}>
                        <View style={styles.outletDetails}>
                            <Text> KlinknKlin</Text>
                            <Text>Bekasi, North Cikarang, 175,30, Mekarmukti, 
                            St MovieLand, Beverly Hills, Unit A1-54-8</Text>
                            <Text> 0.09 km </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.outletNearby}>
                        <View style={styles.outletDetails}>
                            <Text> KlinknKlin</Text>
                            <Text>Bekasi, North Cikarang, 175,30, Mekarmukti, 
                            St MovieLand, Beverly Hills, Unit A1-54-8</Text>
                            <Text> 0.09 km </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.outletNearby}>
                        <View style={styles.outletDetails}>
                            <Text> KlinknKlin</Text>
                            <Text>Bekasi, North Cikarang, 175,30, Mekarmukti, 
                            St MovieLand, Beverly Hills, Unit A1-54-8</Text>
                            <Text> 0.09 km </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.outletNearby}>
                        <View style={styles.outletDetails}>
                            <Text> KlinknKlin</Text>
                            <Text>Bekasi, North Cikarang, 175,30, Mekarmukti, 
                            St MovieLand, Beverly Hills, Unit A1-54-8</Text>
                            <Text> 0.09 km </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.outletNearby}>
                        <View style={styles.outletDetails}>
                            <Text> KlinknKlin</Text>
                            <Text>Bekasi, North Cikarang, 175,30, Mekarmukti, 
                            St MovieLand, Beverly Hills, Unit A1-54-8</Text>
                            <Text> 0.09 km </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADEFD1',
        justifyContent:'space-between',

    },
    cursor:{
        width:'100%',
        paddingHorizontal:20,
        position:'absolute',
        top:20
    },
    subcontainer:{
        height:400,
        width:'100%',
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:40
    },
    pageBtn:{
        width:'55%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        borderColor:'black',
        borderBottomWidth:2,    
        borderLeftWidth:2,
        borderTopWidth:2,
        borderRightWidth:2,
        borderRadius:20,
    },
    pageMenuSignUp:{
        paddingVertical:10,
        paddingHorizontal:30,
        borderRadius:20,
    },
    pageMenuSignIn:{
        paddingVertical:10,
        paddingHorizontal:30,
        borderRadius:20,
        backgroundColor:'#3554E7', 
        borderColor:'#3554E7'
    },
    location:{
        width:'90%',
        height:200,
        borderBottomWidth:2,
        borderTopWidth:2,
        borderRightWidth:2,
        borderLeftWidth:2
    },
    nearbyLoc:{
        width:'90%',
    },
    nearby:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
    },
    outletNearby:{
        width:'90%',
        height:110,
        paddingVertical:8,
        paddingHorizontal:20,
        backgroundColor:'#ffffff',
        justifyContent:'center',
        borderRadius:20,
        marginTop:20,
    },
    outletDetails:{
        width:'100%',
        height:'100%',
        justifyContent:'space-around',
    },
    searchBar:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    inputStyle:{
        width:'90%',
        paddingVertical:6,
        paddingHorizontal:30,
        backgroundColor:'#ffffff',
        borderRadius:30
    },
    
})