import 'react-native-gesture-handler';
import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import { Provider } from 'react-redux';
import { store } from './src/store/store';
//Screens
import MainScreen from './src/components/MainScreen';
import Main from './src/components/Main';
import Game from './src/components/Game';
import Shop from './src/components/Shop';


export default class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
            name="Main" 
            component={Main} 
            options={{ headerShown: false }}/>
            <Stack.Screen 
              name="Game" 
              component={Game} 
              options={{ headerShown: false }}/>
            <Stack.Screen 
              name="Shop" 
              component={Shop} 
              options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

