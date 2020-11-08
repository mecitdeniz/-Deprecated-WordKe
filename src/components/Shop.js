import React, { useState }from 'react';
import {
    View,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Wallpapers from '../db/wallpapers.json'
import Tiles from '../db/tiles.json'

import CoinBar from './CoinBar';
import AddBar from './AddBar';
import ShopItem from './ShopItem';

const Shop = ({navigation}) =>{

  const data = useSelector(state=>state);

  const [ tab, setTab ] = useState(0);

  const { coins, diamonds } = data;
  const dispatch = useDispatch();
  
  return(
    <SafeAreaView style={styles.container}>
        <StatusBar hidden/>
        <ImageBackground source={require('../assets/w1.png')} style={styles.container}>
            <CoinBar
                coins={ coins }
                diamonds={ diamonds }
            />
            <View style={{flexDirection:"row",justifyContent:"space-around",height:100,width:200,alignItems:"center"}}>
              <TouchableOpacity onPress={()=>setTab(0)}>
                <Text style={styles.text}>Arkaplan</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setTab(1)}>
                <Text style={styles.text}>Taş</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>

              {tab == 0 
              ?<FlatList
                data={Tiles}
                numColumns={3}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (<ShopItem
                item = { item }
                tab={tab}
                />)}
              />
              :<FlatList
                data={Wallpapers}
                numColumns={3}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (<ShopItem
                item = { item }
                tab={tab}
                />)}
                />
              }
                  
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