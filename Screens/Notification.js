import React from 'react';
import { Text,View,StyleSheet,Image,TouchableOpacity,SafeAreaView,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Home(){
    const navigation = useNavigation()
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.headerNotification}>
                <Text> Notification </Text>
            </View>
            <View style={styles.notifications}> 
                <View style={styles.notification}>
                    <Text style={styles.titleNotif}>Your order has canceled</Text>
                    <View style={styles.notif}>
                        <Text style={styles.textNotif}> Your order 20192920023 has been cancelled by you </Text>
                        <Text style={styles.timeNotif}> 12 Jan </Text>
                    </View>
                </View>
                <View style={styles.notification}>
                    <Text style={styles.titleNotif}>Your order has confirmed</Text>
                    <View style={styles.notif}>
                        <Text style={styles.textNotif}> Your order 20192920023 has been confirmed on 25 December 2025</Text>
                        <Text style={styles.timeNotif}> 12 Jan </Text>
                    </View>
                </View>
                <View style={styles.notification}>
                    <Text style={styles.titleNotif}>Succesfully delivered</Text>
                    <View style={styles.notif}>
                        <Text style={styles.textNotif}> Hi Biru, your order 20192920023 has been succesfully delivered yo tou</Text>
                        <Text style={styles.timeNotif}> 12 Jan </Text>
                    </View>
                </View>
                <View style={styles.notification}>
                    <Text style={styles.titleNotif}>Your order is now in-process</Text>
                    <View style={styles.notif}>
                        <Text style={styles.textNotif}> Your order is in-progress, it will be ready within 2 days</Text>
                        <Text style={styles.timeNotif}> 12 Jan </Text>
                    </View>
                    <TouchableOpacity
                        onPress={()=>{navigation.navigate('OrderDetails')}}>
                        <Icon name='comment' solid size={100} color='#000000'/>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },


  });