import React from 'react';
import { Text,View,StyleSheet,TouchableOpacity,SafeAreaView,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient';
import Icon1 from 'react-native-vector-icons/Fontisto'
import Icon2 from 'react-native-vector-icons/FontAwesome5'


export default function Home(){
    const navigation = useNavigation()
    return(       
        <LinearGradient 
            colors={['#2F80FF','#4AEDED']}
            style={styles.background}>
            <SafeAreaView style={styles.container}>
                <View style={styles.about}>
                    <LinearGradient 
                        colors={['#F9FFFF','#C9FFF7']}
                        style={styles.aboutBackground}>
                    <Text style={styles.nameLaundry}> KliknKlik Laundry </Text>                
                    <View style={styles.subAbout}>
                        <View style={styles.locationOutlet}>
                            <Icon2
                                name='map-marker-alt'
                                solid
                                size={18}
                                color='#EA352B'
                            />
                            <Text style={styles.location}> Jababeka, Cikarang </Text>
                        </View>
                        <View style={styles.rate}>
                            <Icon1
                                name='star'
                                solid
                                size={12}
                                color='#DFB300'
                            />
                            <Text style={{fontSize:18}}> 4.2/5 (1326 reviews)</Text>
                            <TouchableOpacity>
                                <Text style={{color:'#4361EE',fontSize:16}}> See All </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.contact}>
                            <Image 
                                source={require('../Image/WA.png')}
                                style={{width:20,height:20}}/>
                            <Text style={{fontSize:18}}> Text Us here!</Text>
                            <TouchableOpacity>
                            <Text 
                                style={{marginRight:5,
                                        color:'#4361EE',
                                        fontSize:16}}> Get Us</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </LinearGradient>
                </View>
                <View style={styles.inform}>
                    <LinearGradient 
                        colors={['#F9FFFF','#C9FFF7']}
                        style={styles.aboutInform}>
                        <View style={styles.openOrClose}> 
                            <Text style={{fontSize:22,}}> INFORMATION </Text>
                            <Text style={styles.time}> OPEN </Text>
                        </View>
                        <Text style={styles.explainedLaundry}>
                        {'Hii, KliknKlik laundry are open now and ready to give our best service to you.\nLife’s perfect when your clothes is fresh from the laundry.\nbest regards, Klik n Klik laundry.'}
                        </Text>
                    </LinearGradient>
                </View>
                <View style={styles.service}>
                    <LinearGradient 
                        colors={['#F9FFFF','#C9FFF7']}
                        style={styles.aboutService}>
                        <View style={styles.subService}>
                            <TouchableOpacity>
                                <Text style={styles.textServiceHours}> OPEN HOURS </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.textServiceService}> SERVICE </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.textServicePrice}> PRICE LIST </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.expService}>
                            <Text style={styles.expText}>
                                {`For now, contact us via the available WhatsApp \n contact to see the price catalog of our laundry service outlet.\n We are waiting for your text, Thank you!`}
                            </Text>
                        </View>
                    </LinearGradient>
                </View>
                <TouchableOpacity 
                    style={styles.order}
                    onPress={()=>{navigation.navigate('LaundryBag')}}>
                    <Text style={styles.textOrder}> Make an Order </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex:1,
    },
    background:{
        width:'100%',
        height:'100%',
    },
    nameLaundry:{
        marginTop:20,
        fontSize:30,
    },
    about:{
        width:'95%',
        height:255,
    },
    aboutBackground:{
        width:'100%',
        height:'100%',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        justifyContent:'space-around',
        alignItems:'center',
    },
    aboutInform:{
        width:'100%',
        height:'100%',
        borderRadius:30,
        justifyContent:'space-around',
        alignItems:'center',
    },
    aboutService:{
        width:'100%',
        height:'100%',
        borderRadius:30,
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    subAbout:{
        height:'50%',
        width:'100%',
        justifyContent:'space-around',
        alignItems:'center'
    },
    location:{
        width:'90%',
        textAlign:'left',
        borderBottomWidth:1,
        borderStyle:'dashed',
        fontSize:18
    },
    rate:{
        width:'90%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:1,
        borderStyle:'dashed',
        fontSize:16
    },
    contact:{
        width:'90%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:1,
        borderStyle:'dashed'
    },
    inform:{
        width:'95%',
        height:220,
    },
    openOrClose:{
        width:'90%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:2,
        borderStyle:'dashed',
        paddingVertical:5,
        marginTop:5
    },
    time:{
        borderBottomWidth:1,
        borderTopWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1,
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:3,
        marginRight:10,
    },
    explainedLaundry:{
        width:'95%',
        fontSize:20,
        textAlign:'center'
    },
    service:{
        display:'flex',
        height:250,
        width:'95%',
    },
    subService:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'90%',
    },
    textServiceHours:{
        fontSize:18,
        fontWeight:'500'
    },
    textServiceService:{
        fontSize:18,
        fontWeight:'500'
    },
    textServicePrice:{
        fontSize:18,
        fontWeight:'500'
    },
    expService:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20,
    },
    expText:{
        fontSize:18,
        width:'90%',
        textAlign:'center',
        marginBottom:10
    },
    order:{
        backgroundColor:'#4361EE',
        borderRadius:20,
        width:225,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
    },
    textOrder:{
        fontSize:20, 
        color:'#E4FEFA'
    }
  });