import React from 'react';
import { Text,View,StyleSheet,ScrollView,TouchableOpacity,SafeAreaView,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient';

export default function Home(){
    const navigation = useNavigation()
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <LinearGradient 
                    colors={['#2F80FF','#2F87FA','#33CCCC']}
                    style={styles.titleBg}>
                    <Text style={styles.title}> My Laundry Bag </Text>
                </LinearGradient>
            </View>
            <ScrollView style={styles.ScrollView}>
                <View style={styles.contains}>
                    <View style={styles.div1}>
                        <Text style={styles.text}> Choose our service</Text>
                        <Text style={styles.clicked}> Click here for services details </Text>
                        <View style={styles.service}> 
                            <View style={styles.serviceSub}>
                                <TouchableOpacity 
                                    style={styles.serviceRequired}>
                                    <Text style={styles.textRequired}> IRONING </Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={styles.serviceRequired}>
                                    <Text style={styles.textRequired}> {`WASH & DRY`}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.serviceSub}>
                                <TouchableOpacity style={styles.serviceRequired}>
                                    <Text style={styles.textRequired}> DRY CLEANING </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.serviceRequired}>
                                    <Text style={styles.textRequired}> STAIN REMOVING </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.div2}>
                        <Text style={styles.text}> Choose our Package </Text>
                        <Text style={styles.clicked}> Click here for package details </Text>
                        <View style={styles.package}>
                            <TouchableOpacity
                                style={styles.serviceRequiredPackage}>
                                <Text 
                                    style={styles.textPackage}> KILO SERVICE </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                    style={styles.serviceRequiredPackage}>
                                <Text style={styles.textPackage}> Each Item List Service </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.div3}> 
                        <Text style={styles.text}> List Your Clothes</Text>
                        <Text style={styles.clicked}> Click here for package details </Text>
                        <View style={styles.list}>
                            <View style={styles.yourList}>
                                <View style={styles.items}>
                                    <Text style={styles.textList}> Item </Text>
                                    <Text style={styles.textLists}> - </Text>
                                </View>
                                <View style={styles.amounts}>
                                    <Text style={styles.textList}> Amount </Text>
                                    <Text style={styles.textLists}> - </Text>
                                </View>
                                <View style={styles.notes}>
                                    <Text style={styles.textList}> Note</Text>
                                    <Text style={styles.textLists}> - </Text>
                                </View>
                            </View>
                            <View style={styles.addBtn}>
                                <TouchableOpacity 
                                    style={styles.add}
                                    onPress={()=>{navigation.navigate('AddList')}}>
                                <Text style={styles.textAdd}> Add Clothes </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                            <View style={styles.submitBtn}>
                                <TouchableOpacity 
                                    style={styles.submit}
                                    onPress={()=>{navigation.navigate('OrderDetails')}}>
                                    <Text style={styles.textSubmit}> Submit Laundry Bag </Text>
                                </TouchableOpacity>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer:{
        height:130,
        width:'100%',
    },
    ScrollView:{
        width:'100%',
        height:'100%',
    },
    titleBg:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
    },
    contains:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ADEFD1'
    },
    div1:{
        width:'90%',
        marginTop:60
    },
    service:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
    },
    serviceSub:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:15,
    },
    serviceRequired:{
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        width:180,
        height:60,
        justifyContent:'center',
        alignItems:'center'
    },
    textRequired:{
        color:'#4E4444',
        fontSize:18,
        fontWeight:'500'
    },
    text:{
        fontSize:22,
        width:'100%',
        textAlign:'left'
    },
    clicked:{
        width:'100%',
        textAlign:'left',
        color:'#0079FB'
        
    },
    div2:{
        width:'90%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
    },
    serviceRequiredPackage:{
        borderRadius:10,
        width:250,
        height:60,
        marginTop:20,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'center'
    },
    textPackage:{
        color:'#4E4444',
        fontSize:18,
        fontWeight:'500'
    },
    div3:{
        width:'90%',
        marginTop:60,
        height:'40%',
    },
    list:{
        width:'100%',
        height:'50%',
        marginTop:10,
        justifyContent:'space-around',
    },
    yourList:{
        paddingHorizontal:30,
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#FFFFFF',
        borderRadius:10
    },
    items:{
        justifyContent:'center',
        alignItems:'center'
    },
    amounts:{
        justifyContent:'center',
        alignItems:'center'
    },
    notes:{
        justifyContent:'center',
        alignItems:'center'
    },
    textList:{
        fontSize:18,
        fontWeight:'500'
    },
    textLists:{
        fontSize:16,
    },
    addBtn:{
        width:'100%',
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    add:{
        width:120,
        height:35,
        borderRadius:10,
        backgroundColor:'#4361EE',
        justifyContent:'center'
    },
    textAdd:{
        color:'#FFFFFF',
        fontSize:16,
        textAlign:'center'
    },
    submitBtn:{
        zIndex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    submit:{
        borderRadius:10,
        paddingVertical:8,
        paddingHorizontal:50,
        backgroundColor:'#4361EE'
    },
    textSubmit:{
        color:'#FFFFFF',
        fontSize:18,
        fontWeight:'500',
        textAlign:'center'
    },
  });