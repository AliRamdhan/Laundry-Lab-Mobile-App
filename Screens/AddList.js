import React from 'react';
import { Text,View,StyleSheet,Image,TouchableOpacity,SafeAreaView,ImageBackground, PermissionsAndroid,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation()
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.contain}>
                <View style={styles.header}>
                    <Text style={styles.titleHeader}> List Your Clothes</Text>
                    <TouchableOpacity style={styles.subHeader}>
                        <Text style={styles.subTextHeader}> Click here for package details </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.list}>
                        <View style={styles.item}>
                            <Text style={styles.itemName}> Jacket </Text>
                            <View style={styles.count}>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> - </Text>
                                </TouchableOpacity>
                                <Text style={styles.amount}> 0 </Text>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> + </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemName}> Flanel </Text>
                            <View style={styles.count}>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> - </Text>
                                </TouchableOpacity>
                                <Text style={styles.amount}> 0 </Text>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> + </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemName}> T-Shirt </Text>
                            <View style={styles.count}>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> - </Text>
                                </TouchableOpacity>
                                <Text style={styles.amount}> 0 </Text>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> + </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemName}> Denim Pants </Text>
                            <View style={styles.count}>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> - </Text>
                                </TouchableOpacity>
                                <Text style={styles.amount}> 0 </Text>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> + </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemName}> Short Pants </Text>
                            <View style={styles.count}>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> - </Text>
                                </TouchableOpacity>
                                <Text style={styles.amount}> 0 </Text>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> + </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemName}> hoodie </Text>
                            <View style={styles.count}>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> - </Text>
                                </TouchableOpacity>
                                <Text style={styles.amount}> 0 </Text>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> + </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemName}> Blanket </Text>
                            <View style={styles.count}>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> - </Text>
                                </TouchableOpacity>
                                <Text style={styles.amount}> 0 </Text>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> + </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemName}> Handuk </Text>
                            <View style={styles.count}>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> - </Text>
                                </TouchableOpacity>
                                <Text style={styles.amount}> 0 </Text>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> + </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemName}> Jacket </Text>
                            <View style={styles.count}>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> - </Text>
                                </TouchableOpacity>
                                <Text style={styles.amount}> 0 </Text>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> + </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemName}> Jacket </Text>
                            <View style={styles.count}>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> - </Text>
                                </TouchableOpacity>
                                <Text style={styles.amount}> 0 </Text>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> + </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemName}> Jacket </Text>
                            <View style={styles.count}>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> - </Text>
                                </TouchableOpacity>
                                <Text style={styles.amount}> 0 </Text>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> + </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemName}> Jacket </Text>
                            <View style={styles.count}>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> - </Text>
                                </TouchableOpacity>
                                <Text style={styles.amount}> 0 </Text>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> + </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemName}> Jacket </Text>
                            <View style={styles.count}>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> - </Text>
                                </TouchableOpacity>
                                <Text style={styles.amount}> 0 </Text>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> + </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemName}> Jacket </Text>
                            <View style={styles.count}>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> - </Text>
                                </TouchableOpacity>
                                <Text style={styles.amount}> 0 </Text>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> + </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemName}> Jacket </Text>
                            <View style={styles.count}>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> - </Text>
                                </TouchableOpacity>
                                <Text style={styles.amount}> 0 </Text>
                                <TouchableOpacity style={styles.incDec}>
                                    <Text style={styles.plusminus}> + </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.bottomNav}>
                    <TouchableOpacity 
                        style={styles.bottomBtn}
                        onPress={()=>{navigation.navigate('LaundryBag')}}>
                        <Text style={{fontSize:14,fontWeight:'500'}}> x Item </Text>
                        <Text style={{fontSize:18,fontWeight:'500'}}> Add your list clothes </Text>
                </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        backgroundColor: '#ADEFD1',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    contain:{
        width:'100%',
        height:'100%'
    },
    header:{
        width:'100%',
        borderBottomWidth:2,
        backgroundColor:'#ffffff'
    },
    titleHeader:{
        fontSize:28,
    },
    subTextHeader:{
        fontSize:16,
        color:'#0079FB'
    },
    list:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    item:{
        backgroundColor:'#ffffff',
        flexDirection:'row',
        width:'80%',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:15,
        marginTop:10,
        marginBottom:8
    },
    itemName:{
        fontSize:25,
        fontWeight:'500'
    },
    count:{
        width:'35%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    incDec:{
        backgroundColor:'gray',
        width:30,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
    },
    plusminus:{
        textAlign:'center',
        fontSize:22
    },
    amount:{
        fontSize:25
    },
    bottomNav:{
        width:'100%',
        height:80,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'gray'
    },
    bottomBtn:{
        width:'80%',
        paddingHorizontal:20,
        paddingVertical:2,
        backgroundColor:'#ADGFD8',
        justifyContent:'center',
        borderRadius:20,
    },

  });