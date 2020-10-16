import React from 'react';
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
    Image,
    StyleSheet,
    Text,
    ImageBackground,
    BackHandler,
    ToastAndroid,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import CoinBar from './CoinBar';
import AddBar from './AddBar';

const Game = ({navigation}) =>{

  const data = useSelector(state=>state);
  const { coins, diamonds, isConfigured} = data;
  const dispatch = useDispatch();

  return(
    <SafeAreaView style={styles.container}>
        <StatusBar hidden/>
        <ImageBackground source={require('../assets/bg1.png')} style={styles.container}>
            <CoinBar
                coins={ coins }
                diamonds={ diamonds }
            />
            <AddBar
                isConfigured={isConfigured}
            />
        </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1
    },
    text:{
        color:"white",
        fontSize:30,
        fontWeight:"bold",
    },
    textContainer:{
      flexDirection:"row",
      alignItems:"center",
      height:40,
      marginRight:5
    }
  });

export default Game;