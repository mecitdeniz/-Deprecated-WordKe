import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ShopItem from './ShopItem';

const themes = [
  {
    id: 0,
    backgroundColor: '#15BDDB',
    name: 'Blue Raspberry',
    tileColor: '#79E8E2',
    borderColor: '#79E8E2',
    textColor: '#15BDDB',
  },
  {
    id: 1,
    backgroundColor: '#F9EEE2',
    name: 'Alpaca Wool',
    tileColor: '#182F53',
    borderColor: '#182F53',
    textColor: '#F9EEE2',
  },
  {
    id: 2,
    backgroundColor: '#F57A4D',
    name: 'Coral Rose',
    tileColor: '#9C3725',
    borderColor: '#9C3725',
    textColor: '#F57A4D',
  },
  {
    id: 3,
    backgroundColor: '#292939',
    name: 'Nighty Sky',
    tileColor: '#F2F2E6',
    borderColor: '#F2F2E6',
    textColor: '#292939',
  },
];

const Shop = ({navigation}) => {
  const data = useSelector((state) => state);

  const {coins, diamonds} = data;
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar hidden />
      <FlatList
        data={themes}
        numColumns={1}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <ShopItem item={item}/>}
      />

    </SafeAreaView>
  );
};

export default Shop;
