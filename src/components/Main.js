import React from 'react';
import {View, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import admob, {MaxAdContentRating} from '@react-native-firebase/admob';

import CoinBar from './CoinBar';
import AddBar from './AddBar';
import Menu from './Menu';
import {configure} from '../store/actions';
const {handleTilePress} = require('../utils/game');

const Main = ({navigation}) => {
  const data = useSelector((state) => state);
  const {coins, diamonds, isConfigured} = data;
  const dispatch = useDispatch();
  /*
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
        console.log(Hey)
    });
  })*/

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.container}>
        <CoinBar coins={coins} diamonds={diamonds} />
        <Menu navigation={navigation} />
        <AddBar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#3698A6"
  },
});

export default Main;
