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
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import admob, { MaxAdContentRating } from '@react-native-firebase/admob';

import CoinBar from './CoinBar';
import AddBar from './AddBar';
import Menu from './Menu';
import { configure} from '../store/actions';

const Main = ({navigation}) =>{

  const data = useSelector(state=>state);
  const { coins, diamonds, isConfigured } = data;
  const dispatch = useDispatch();

  useEffect(() => {
    admob().setRequestConfiguration({
        // Update all future requests suitable for parental guidance
        maxAdContentRating: MaxAdContentRating.PG,
        // Indicates that you want your content treated as child-directed for purposes of COPPA.
        tagForChildDirectedTreatment: true,
        // Indicates that you want the ad request to be handled in a
        // manner suitable for users under the age of consent.
        tagForUnderAgeOfConsent: true,
    }).then(() => {
        dispatch(configure())
    });
  })

  return(
    <SafeAreaView style={styles.container}>
        <StatusBar hidden/>
        <ImageBackground source={require('../assets/bg1.png')} style={styles.container}>
            <CoinBar
                coins={ coins }
                diamonds={ diamonds }
            />
            <Menu navigation={navigation}/>
            <AddBar isConfigured={isConfigured}/>
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

export default Main;