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
import Tile from './Tile';
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
            <View style={{flex:1,justifyContent:"center"}}>
                <View style={styles.gameTable}>
                    <View style={styles.column}>
                        <Tile character="A"/>
                        <Tile character="A"/>
                        <Tile character="A"/>
                    </View>
                    <View style={styles.column}>
                        <Tile character="A"/>
                        <Tile character="A"/>
                        <Tile character="A"/>
                    </View>
                    <View style={styles.column}>
                        <Tile character="A"/>
                        <Tile character="A"/>
                        <Tile character="A"/>
                    </View>
                    <View style={[styles.column,{justifyContent:"center",paddingTop:10}]}>
                        <Tile character="A"/>
                    </View>
                </View>
            </View>
            
            <AddBar
                isConfigured={isConfigured}
            />
        </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    gameTable:{
        width:270,
        height:400,
        paddingVertical:20,
        paddingHorizontal:5,
        alignSelf:"center",
        borderWidth:0,
        justifyContent:"space-around"
      },
      column:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        height:40,
      },
  });

export default Game;