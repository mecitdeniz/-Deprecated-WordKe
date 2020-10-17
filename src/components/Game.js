import React, { useEffect } from 'react';
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
    Image,
    StyleSheet,
    Text,
    Alert,
    ImageBackground,
    BackHandler,
    ToastAndroid,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import CoinBar from './CoinBar';
import Tile from './Tile';
import AddBar from './AddBar';
import { unSelect } from '../store/actions';


const Game = ({navigation}) =>{

  const data = useSelector(state=>state);
  const { coins, diamonds, selectedRow, selectedCol} = data;
  const dispatch = useDispatch();

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => {
            dispatch(unSelect())
            navigation.goBack()
        } }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
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
                        <Tile row={0} col={0}/>
                        <Tile row={0} col={1}/>
                        <Tile row={0} col={2}/>
                    </View>
                    <View style={styles.column}>
                        <Tile row={1} col={0}/>
                        <Tile row={1} col={1}/>
                        <Tile row={1} col={2}/>
                    </View>
                    <View style={styles.column}>
                        <Tile row={2} col={0}/>
                        <Tile row={2} col={1}/>
                        <Tile row={2} col={2}/>
                    </View>
                    <View style={[styles.column,{justifyContent:"center",paddingTop:10}]}>
                        <Text style={{color:"white",fontSize:20,fontWeight:"bold"}}>{selectedRow}</Text>
                        <Text style={{color:"white",fontSize:20,fontWeight:"bold"}}>{selectedCol}</Text>
                    </View>
                </View>
            </View>
            
            <AddBar/>
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