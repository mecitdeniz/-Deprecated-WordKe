import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const ShopItem = (props) => {
  const {item, tab} = props;
  const {isUnlocked, isSelected} = item;
  return (
    <View style={[styles.container, {backgroundColor: item.backgroundColor}]}>
      <View style={styles.preview}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={[
              styles.tile,
              {backgroundColor: item.tileColor, borderColor: item.borderColor},
            ]}>
            <Text style={{fontSize: 20, color: item.textColor}}>A</Text>
          </View>
          <View
            style={[
              styles.tile,
              {backgroundColor: item.tileColor, borderColor: item.borderColor},
            ]}>
            <Text style={{fontSize: 20, color: item.textColor}}>B</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={[
              styles.tile,
              {backgroundColor: item.tileColor, borderColor: item.borderColor},
            ]}>
            <Text style={{fontSize: 20, color: item.textColor}}>C</Text>
          </View>
          <View
            style={[
              styles.tile,
              {backgroundColor: item.tileColor, borderColor: item.borderColor},
            ]}>
            <Text style={{fontSize: 20, color: item.textColor}}>D</Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 26, fontWeight: 'bold',width:130,letterSpacing:1.5 ,color: item.tileColor}}>
          {item.name}
        </Text>
      </View>
      <TouchableOpacity style={[styles.button,{backgroundColor:item.tileColor}]}>
        <Text style={{fontSize: 16,color:item.textColor}}>Kullan</Text>
      </TouchableOpacity>
    </View>
  );
};

const renderButton = (isUnlocked, isSelected) => {
  if (isUnlocked && isSelected)
    return (
      <View style={styles.button}>
        <Image source={require('../assets/ok.png')} style={styles.iconS} />
        <Text style={styles.text}>Seçili</Text>
      </View>
    );
  else if (isUnlocked && !isSelected)
    return (
      <TouchableOpacity style={styles.button}>
        <Image source={require('../assets/close.png')} style={styles.iconS} />
        <Text style={styles.text}>Seç</Text>
      </TouchableOpacity>
    );
  else
    return (
      <TouchableOpacity style={styles.button}>
        <Image source={require('../assets/shop.png')} style={styles.iconS} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.text}>100</Text>
          <Image source={require('../assets/coin.png')} style={styles.iconXS} />
        </View>
        <Text style={styles.text}>Satın al</Text>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 200,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  preview: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  tile: {
    width: 50,
    height: 50,
    margin: 2.5,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 70,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ShopItem;
