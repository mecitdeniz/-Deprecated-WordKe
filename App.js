import 'react-native-gesture-handler';
import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
//Screens
import MainScreen from './screens/MainScreen';
import GameScreen from './screens/GameScreen';
import ShopScreen from './screens/ShopScreen';


export default class App extends Component {
  render(){
    return(
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Main" 
        component={MainScreen} 
        options={{ headerShown: false }}/>
        <Stack.Screen 
        name="Game" 
        component={GameScreen} 
        options={{ headerShown: false }}/>
        <Stack.Screen 
        name="Shop" 
        component={ShopScreen} 
        options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

