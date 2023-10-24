import React from 'react';
import { Text,View,Image,StyleSheet,TouchableOpacity,SafeAreaView,ScrollView} from 'react-native';
import { StackRouter, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/Fontisto'
import Icon3 from 'react-native-vector-icons/FontAwesome5'
export default function Home(){
    const navigation = useNavigation()
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View  iew style={styles.subHeader}>
                    <View style={styles.headerTitle}>
                        <View>
                            <Text 
                            style={{fontFamily:'Poppins',fontSize:30,fontWeight:'500',color:'#ffffff'}}> 
                            Hello, Biru!
                            </Text>
                            <Text
                            style={{fontFamily:'Poppins',fontSize:24,fontWeight:'500',color:'#ffffff'}}> 
                            Welcome to Laundry Lab
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={()=>{navigation.navigate('Notification')}}>
                                <Icon 
                                name='notifications'
                                solid
                                size={50}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.headerPopUp}>
                        <LinearGradient 
                        colors={['#C9FFF7','#ADEFD1','#ADEFD1','#C9FFF7']}
                        style={styles.popUpBg}>
                            <View style={styles.popUpContent}> 
                                <Text 
                                style={styles.popUpcontentText1}> My Point </Text>
                                <Text style={styles.popUpcontentText1}> Payment </Text>
                            </View>
                            <View style={styles.popUpContent}>
                                <Text style={styles.popUpcontentText2}> About Us </Text>
                                <Text style={styles.popUpcontentText2}> Policy </Text>
                                <Text style={styles.popUpcontentText2}> How to Use </Text>
                            </View>
                        </LinearGradient>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={styles.containerScroll}>  
                    <View style={styles.order}>
                        <View style={styles.orderMaps}>
                            <TouchableOpacity 
                                style={styles.orderBtn}
                                onPress={()=>{navigation.navigate('OutletList')}}>
                                <View>
                                    <Text style={styles.popUpcontentText1}> Start Your Order </Text>
                                    <Text style={styles.popUpcontentText2}> Find a laundry outlet for you</Text>
                                </View>
                                <View style={styles.orderIcon}>
                                    <Icon2
                                    name='arrow-right'
                                    solid
                                    size={26}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.recommendation}>
                        <View style={styles.recomTitle}>
                            <View>
                                <Text style={styles.title1}> Recommendation Outlet </Text>
                                <Text style={styles.title2}> Reorder what you had a last time, Easy</Text>
                            </View>
                            <TouchableOpacity>
                                <Text> See all </Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView
                            horizontal={true}>
                            <View style={styles.outletRecommendationList}>
                                <View style={styles.outletRecommendation}>
                                    <View>
                                        <View style={styles.rateRecommendation}>
                                            <Icon2 
                                            name='star'
                                            solid
                                            size={12}
                                            color='#DFB300'
                                            style={{paddingHorizontal:8,paddingVertical:2}}/>
                                        </View>
                                        <Image 
                                            source={require('../Image/fixed.png')} 
                                            style={styles.imgOutlet}/>
                                    </View>
                                    <View style={{width:100,paddingHorizontal:8}}>
                                        <Text style={styles.name}> Name </Text>
                                        <View style={styles.addressForm}>
                                            <Icon3 
                                                name='map-marker-alt'
                                                solid
                                                size={18}
                                                color='#EA352B'
                                                />
                                            <Text style={styles.address}> Alamat </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.outletRecommendation}>
                                    <View>
                                        <View style={styles.rateRecommendation}>
                                            <Icon2 
                                            name='star'
                                            solid
                                            size={12}
                                            color='#DFB300'
                                            style={{paddingHorizontal:8,paddingVertical:2}}/>
                                        </View>
                                        <Image 
                                            source={require('../Image/fixed.png')} 
                                            style={styles.imgOutlet}/>
                                    </View>
                                    <View style={{width:100,paddingHorizontal:8}}>
                                        <Text style={styles.name}> Name </Text>
                                        <View style={styles.addressForm}>
                                            <Icon3 
                                                name='map-marker-alt'
                                                solid
                                                size={18}
                                                color='#EA352B'
                                                />
                                            <Text style={styles.address}> Alamat </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.outletRecommendation}>
                                    <View>
                                        <View style={styles.rateRecommendation}>
                                            <Icon2 
                                            name='star'
                                            solid
                                            size={12}
                                            color='#DFB300'
                                            style={{paddingHorizontal:8,paddingVertical:2}}/>
                                        </View>
                                        <Image 
                                            source={require('../Image/fixed.png')} 
                                            style={styles.imgOutlet}/>
                                    </View>
                                    <View style={{width:100,paddingHorizontal:8}}>
                                        <Text style={styles.name}> Name </Text>
                                        <View style={styles.addressForm}>
                                            <Icon3 
                                                name='map-marker-alt'
                                                solid
                                                size={18}
                                                color='#EA352B'
                                                />
                                            <Text style={styles.address}> Alamat </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                        
                    </View>
                    <View style={styles.nearby}> 
                        <View style={styles.nearbyTitle}>
                            <Text style={styles.title1}> Nearby Outlet </Text>
                            <Text style={styles.title2}> This is outlet near from your location</Text>
                        </View>
                        <View style={styles.outletNearby}>
                            <View style={styles.containerimg}>
                            <View style={styles.rateNearby}>
                                <Icon2 
                                name='star'
                                solid
                                size={12}
                                color='#DFB300'
                                style={{paddingHorizontal:8,paddingVertical:2}}/>
                                <Icon2 
                                name='star'
                                solid
                                size={12}
                                color='#DFB300'
                                style={{paddingHorizontal:8,paddingVertical:2}}/>
                                <Icon2 
                                name='star'
                                solid
                                size={12}
                                color='#DFB300'
                                style={{paddingHorizontal:8,paddingVertical:2}}/>
                                <Icon2 
                                name='star'
                                solid
                                size={12}
                                color='#DFB300'
                                style={{paddingHorizontal:8,paddingVertical:2}}/>
                                <Icon2 
                                name='star'
                                solid
                                size={12}
                                color='#DFB300'
                                style={{paddingHorizontal:8,paddingVertical:2}}/>
                            </View>
                                <Image 
                                    source={require('../Image/fixed.png')} 
                                    style={styles.imgOutlet}/>
                            </View>
                            <View style={{width:100,paddingHorizontal:8}}>
                                <Text style={styles.name}> Name </Text>
                                <View style={styles.addressForm}>
                                    <Icon3 
                                        name='map-marker-alt'
                                        solid
                                        size={18}
                                        color='#EA352B'
                                        />
                                    <Text style={styles.address}> Alamat </Text>
                                </View>
                                <Text style={styles.range}> 1,4 km away</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADEFD1',
    },
    header:{
        width:'100%',
        height:250,
        backgroundColor:'#ADEFD1',
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
    },
    subHeader:{
        width:'100%',
        height:200,
        backgroundColor:'#2F80FF',
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    headerTitle:{
        height:200,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    headerPopUp:{
        width:'76%',
        zIndex:1,
    },
    popUpBg:{
        width:'100%',
        height:100,
        justifyContent:'space-around',
        alignItems:'center',
        borderRadius:20,
    },
    popUpContent:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    popUpcontentText1:{
        color:'#4E4444',
        fontSize:20,
        fontWeight:'500'
    },
    popUpcontentText2:{
        color:'#4E4444',
        fontSize:15,
        fontWeight:'500'
    },
    containerScroll:{
        width:'100%',
        marginTop:50
    },
    order:{
        width:'100%',
        height:230,
        justifyContent:'center',
        alignItems:'center'
    },
    orderMaps:{
        width:'90%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:2,
        borderLeftWidth:2,
        borderRightWidth:2,
        borderTopWidth:2
    },
    orderBtn:{
        width:'75%',
        height:80,
        backgroundColor:'#ffffff',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        borderRadius:20,
    },
    orderIcon:{
        backgroundColor:'#ADEFD1',
        padding:8,
        borderRadius:20
    },
    rateNearby:{
        width:'42%',
        backgroundColor:'#ffffff',
        borderRadius:15,
        position:'absolute',
        top:18,
        left:20,
        zIndex:1,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    rateRecommendation:{
        width:'42%',
        backgroundColor:'#ffffff',
        borderRadius:15,
        position:'absolute',
        top:10,
        left:10,
        zIndex:1,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    recommendation:{
        marginTop:20,
        padding:20,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    recomTitle:{
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    outletRecommendationList:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    outletRecommendation:{
        width:200,
        marginHorizontal:10,
        marginVertical:8,
        backgroundColor:'#ffffff',
        padding:10,
        borderRadius:20
    },
    title1:{
        fontSize:16,
        fontWeight:'700',
        color:'#4B4747'
    },
    title2:{
        fontSize:14,
        fontWeight:'400',
        color:'#4B4747'
    },
    nearby:{
        width:'100%',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:20,
    },
    nearbyTitle:{
        width:'90%',
    },
    outletNearby:{
        width:400,
        margin:8,
        padding:10,
        borderRadius:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    imgOutlet:{
        width:'100%',
        borderRadius:20
    },
    containerimg:{
        width:200,
        backgroundColor:'#ffffff',
        padding:10,
        borderRadius:20
    },
    name:{
        fontSize:18,
        fontWeight:'600',
        color:'#4B4747'
    },
    addressForm:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    address:{
        fontSize:15,
        fontWeight:'400',
        color:'#4B4747'
    },
    range:{
        fontSize:14,
        fontWeight:'600',
        color:'#4361EE'
    }
  });