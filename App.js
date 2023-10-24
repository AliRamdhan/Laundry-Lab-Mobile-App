import { NavigationContainer, StackActions, StackRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/login'
import SignUp from './Screens/SignUp'
import SignIn from './Screens/SignIn'
import OutletProfile from './Screens/OutletProfil'
import Home from './Screens/Home'
import LaundryBag from './Screens/LaundryBag'
import OrderDetails from './Screens/orderDetails';
import Notification from './Screens/Notification'
import AddList from './Screens/AddList'
import OutletList from './Screens/outletList';
import Tab from './Tab'
const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='Home' component={Tab}/>
        <Stack.Screen name='OutletProfile' component={OutletProfile}/>
        <Stack.Screen name='LaundryBag' component={LaundryBag}/>
        <Stack.Screen name='OrderDetails' component={OrderDetails}/>
        <Stack.Screen name='Notification' component={Notification}/>
        <Stack.Screen name='AddList' component={AddList}/>
        <Stack.Screen name='OutletList' component={OutletList}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
