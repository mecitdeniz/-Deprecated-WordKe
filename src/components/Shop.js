import React from 'react';
import {
    View,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    FlatList,
    ImageBackground,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const DATA = [ {id:"1"},{id:"2"},{id:"3"},{id:"4"},{id:"5"},{id:"6"}]
import CoinBar from './CoinBar';
import AddBar from './AddBar';
import ShopItem from './ShopItem';

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
            <View style={{flexDirection:"row",justifyContent:"space-around",height:100,width:200,alignItems:"center"}}>
              <Text style={styles.text}>Wallpaper</Text>
              <Text style={styles.text}>Tile</Text>
            </View>
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                  <FlatList
                  data={DATA}
                  numColumns={3}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => (<ShopItem/>)}
                  />
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
    },
    background:{
      width:350,
      height:350,
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row"
  },
  });

export default Shop;