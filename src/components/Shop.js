import React from 'react';
import {
    View,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    ImageBackground,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import CoinBar from './CoinBar';
import AddBar from './AddBar';

const Shop = ({navigation}) =>{

  const data = useSelector(state=>state);
  const { coins, diamonds } = data;
  const dispatch = useDispatch();
  
  return(
    <SafeAreaView style={styles.container}>
        <StatusBar hidden/>
        <ImageBackground source={require('../assets/bg1.png')} style={styles.container}>
            <CoinBar
                coins={ coins }
                diamonds={ diamonds }
            />
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text style={styles.text}>Shop</Text>
            </View>
            <AddBar/>
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

export default Shop;