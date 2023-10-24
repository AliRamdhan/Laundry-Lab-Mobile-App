import React from 'react';
import { Text,View,StyleSheet,TouchableOpacity,SafeAreaView,ImageBackground,ScrollView,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function orderDetails(){
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <LinearGradient 
                colors={['#2F80FF','#33CCCC']}
                style={styles.bgHeader}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}> Order Details</Text>
                </View>
            </LinearGradient>
            <ScrollView>
            <View style={styles.background}>
                    <View style={styles.container}>
                        <View style={styles.addressDetails}>
                            <View style={styles.headerAddres}>
                                <Text 
                                    style={{fontSize:22,fontWeight:'500',color:'#524D4D'}}>
                                    Shipping Addres</Text>
                                <TouchableOpacity 
                                    onPress={()=>{navigation.navigate('AnotherAddress')}}>
                                    <Text style={{fontSize:13,color:'#2F80FF',}}>
                                    Choose Another Addres</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.address}>
                                <Text style={{fontSize:20,color:'#524D4D'}}> HOME </Text>
                                <Text style={{fontSize:14,color:'#524D4D'}}> Biru (62+ 813-123-4567) </Text>
                                <Text style={{fontSize:14,color:'#524D4D'}}> Bekasi, North Cikarang, Mekarmukti, St MovieLand, 17530 </Text>
                            </View>
                        </View>
                        <View style={styles.orderDetails}>
                            <Text 
                                style={styles.titleOrder}>
                                Order Details</Text>
                            <View style={styles.headerOrder}>
                                <Image 
                                    source={require('../Image/Logo.png')}
                                    style={styles.logo}/>
                                <View>
                                    <Text style={{fontSize:20,fontWeight:'500'}}> KliknKlik Laundry</Text>    
                                    <Text style={{fontSize:13,fontWeight:'300'}}> Bekasi, North Cikarang, Mekarmukti </Text>
                                    <Text style={{fontSize:13,fontWeight:'300'}}> 5 pcs clothes (700 grams)</Text>
                                    <Text style={{fontSize:18,fontWeight:'500'}}> Rp. 23.000,00</Text>
                                </View>
                            </View>
                            <View style={styles.details}>
                                <View style={styles.subDetails}>
                                    <Text style={{fontSize:17.5,color:'#524D4D'}}> Order-ID </Text>
                                    <Text style={{fontSize:14,color:'#524D4D'}}> F-1874695933</Text>
                                </View>
                                <View style={styles.subDetails}>
                                    <Text style={{fontSize:17.5,color:'#524D4D'}}> Package</Text>
                                    <Text style={{fontSize:14,color:'#524D4D'}}> Kilo Service</Text>
                                </View>
                                <View style={styles.subDetails}>
                                    <Text style={{fontSize:17.5,color:'#524D4D'}}> Service</Text>
                                    <Text style={{fontSize:14,color:'#524D4D'}}> {`Wash & Dry`}</Text>
                                </View>
                                <View style={styles.subDetails}>
                                    <Text style={{fontSize:17.5,color:'#524D4D'}}> List Clothes </Text>
                                    <Text style={{fontSize:14,color:'#524D4D'}}> 5 pcs clothes | 700 grams</Text>
                                </View>
                            </View>
                            
                        </View>
                        <View style={styles.paymentDetails}>
                            <Text style={styles.titleOrder}> Payment Details </Text>
                            <View style={styles.payment}>
                                <View style={styles.paymentSub}>
                                    <View style={styles.subDetails}>
                                            <Text style={{fontSize:17.5,color:'#524D4D'}}> Total Price</Text>
                                            <Text style={{fontSize:14,color:'#524D4D'}}> Rp.23.000,00</Text>
                                    </View>
                                    <View style={styles.subDetails}>
                                            <Text style={{fontSize:17.5,color:'#524D4D'}}> Admin Fee</Text>
                                            <Text style={{fontSize:14,color:'#524D4D'}}> 5%</Text>
                                    </View>
                                    <View style={styles.paymentMethod}>
                                        <Text style={styles.titleOrder}> Payment Method</Text>
                                        <View style={styles.subDetails}>
                                            <Text style={{fontSize:17.5,color:'#524D4D'}}> GOPAY</Text>
                                            <TouchableOpacity
                                                onPress={()=>{navigation.navigate('ChangeMethod')}}>
                                                <Text style={{fontSize:17.5,color:'#2F80FF'}}>Change Method</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity 
                            onPress={()=>{navigation.navigate('Notification')}}>
                            <Text> Notification </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.button}>
                <TouchableOpacity 
                    style={styles.buttonS}
                    onPress={()=>{navigation.navigate('')}}>
                    <Text
                    style={{color:'#FFFFFF',fontSize:18,textAlign:'center',fontWeight:'500'}}> 
                    Order Now </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {    
        width:'100%',
        height:'100%',
        alignItems: 'center',
        backgroundColor:'#ADEFD1',
    },
    background:{
        width:'100%',
        height:'100%',
        justifyContent:'space-around'
    },
    bgHeader:{
        width:'100%',
    },
    header:{
        width:'100%',
        height:100,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
    },
    textHeader:{
        marginTop:20,
        color:'#4B4747',
        fontSize:30,
        fontWeight:'500'
    },
    addressDetails:{
        marginTop:10,
        backgroundColor:'#ffffff',
        width:400,
        height:150,
        borderRadius:25,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    headerAddres:{
        flexDirection:'row',
        width:'90%',
        justifyContent:'space-between',
    },
    address:{
        width:'90%',
    },
    orderDetails:{
        backgroundColor:'#ffffff',
        marginTop:20,
        borderRadius:30,
        width:400,
        height:300, 
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    titleOrder:{
        fontSize:22,
        color:'#524D4D',
        fontWeight:'500',
        textAlign:'left',
        width:'90%',
        paddingVertical:10,
    },
    headerOrder:{
        width:'95%',
        height:120,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    logo:{
        width:120,
        height:120
    },
    details:{
        width:'90%'
    },
    subDetails:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    paymentDetails:{
        backgroundColor:'#ffffff',
        marginTop:20,
        borderRadius:30,
        width:400,
        height:250, 
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    payment:{
        width:'90%',
    },
    paymentSub:{
        width:'100%',
        height:150,
        justifyContent:'space-around'
    },
    paymentMethod:{
        justifyContent:'space-between',
        height:70
    },
    button:{
        height:70,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonS:{
        borderRadius:30,
        width:'80%',
        paddingVertical:10,
        backgroundColor:'#4361EE'
    }
  });